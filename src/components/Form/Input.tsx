import { Input as ChackaInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: IInputProps) {
  return (
    <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChackaInput
              name={name}
              id={name}
              focusBorderColor='pink.500'
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              {...rest }
            />
          </FormControl>
  )
}