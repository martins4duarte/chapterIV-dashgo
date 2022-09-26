import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from "../../components/Form/Input";
import Link from "next/link";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function UserList() {

  const createUserFormSchemaError = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'A senha deve conter no minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], "As senhas devem ser iguais")
  })

  const { register, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(createUserFormSchemaError)
  });

  const handleCreateUser: SubmitHandler<FormDataProps> = async (values) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    console.log(values)
  } 


  return (
    <Box>
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="8" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="248px" spacing={["6", "8"]} w="100%">
              <Input label="Nome Completo" {...register('name')} error={formState.errors.name}/>
              <Input type="email" label="E-mail" {...register('email')} error={formState.errors.email}/>
            </SimpleGrid>

            <SimpleGrid minChildWidth="248px" spacing="8" w="100%">
              <Input type="password" label="Senha" {...register('password')} error={formState.errors.password}/>
              <Input type="password" label="Confirme a Senha" {...register('password_confirmation')} error={formState.errors.password_confirmation}/>
            </SimpleGrid>

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="blackAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
