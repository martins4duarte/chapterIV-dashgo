import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form';

type FormDataProps = {
  email: string;
  password: string;
}

export default function SignIn() {

  const signInFormSchemaError = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha obrigatória'),
  })

  const { register, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(signInFormSchemaError)
  });

  const handleSignIn: SubmitHandler<FormDataProps> = async (values) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    console.log(values)
  } 

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input label='E-mail' type="email" {...register('email')} error={formState.errors.email}/>
          <Input label='Senha' type="password" {...register('password')} error={formState.errors.password}/> 
        </Stack>

        <Button type='submit' mt="10" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>

      </Flex>
    </Flex>
  )
}

