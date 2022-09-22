import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Pagination from "../../components/Pagination";
import Link from "next/link";

export default function UserList() {

  const isLargeThan992px = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Box>
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="bold">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>Criar Novo</Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                { isLargeThan992px && ( <Th>Data de cadastro</Th> )}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Text fontWeight="bold">Caio Martins</Text>
                  <Text fontSize="sm" color="gray.300">teste@teste.com</Text>
                </Td>
                
                { isLargeThan992px && ( 
                  <Td>
                    <Text>19 Set 2021</Text>
                  </Td> 
                )}
                
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="blue" leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>Editar</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
