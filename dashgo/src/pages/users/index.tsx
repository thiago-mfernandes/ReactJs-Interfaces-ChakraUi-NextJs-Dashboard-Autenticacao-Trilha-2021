import Link from "next/link";
import { Text, Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { useUsers } from "@/services/hooks/useUsers";
import { useState } from "react";

export default function UserList() {

  const [page, setPage] = useState(1);

  //passar no parametro do hook um nome que serve como chave do que vai ser armazenado no cache, um nome de referencia para os meus dados, para futuramente alterar, resetar, revalidar e passar um terceiro parametro para o tempo de revalidacao dos dados em cache
  //isFetching indica se esta havendo uma renovacao dos dados..

  const { data, isLoading, isFetching, error } = useUsers(page);

  //console.log(query);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
            </Heading>            
            <Button
              as={Link}
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              href="/users/create"
            >
              Criar novo
            </Button>            
          </Flex>

          {
            // se estiver carregando, exibe um loading
            isLoading ? (
              <Flex justifyContent="center">
                <Spinner />
              </Flex>
            
            //se der um erro, exibe
            ) : error ? (
              <Flex justifyContent="center">
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>

            //se nao exibe a tabela com os dados
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" w="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      { isWideVersion && <Th>Data de Cadastro</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {
                      data.users.map(user => (
                        <Tr key={user.id}>
                          <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td w="100%">
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                          </Td>
                          { isWideVersion && <Td>{user.createdAt}</Td> }
                          { isWideVersion &&
                            <Td>
                              <Button 
                                as="a" 
                                size="sm" 
                                fontSize="small" 
                                colorScheme="purple" 
                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                              >
                                Editar
                              </Button>
                            </Td>
                          }
                        </Tr>
                      ))
                    }
                  </Tbody>
                </Table>

                <Pagination totalCountOfPages={data.totalCount} currentPage={page} onPageChange={setPage} />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  );
}