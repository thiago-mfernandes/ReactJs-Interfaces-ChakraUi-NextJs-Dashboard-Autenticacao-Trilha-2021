import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

  //guarda uma referencia do meu input na DOM, preciso referenciar qual  tipo de elemento atraves do generic
  const searchInputRef = useRef<HTMLInputElement>(null);
  //assim eu consigo obter o valor dessa referencia
  //console.log(searchInputRef.current?.value)


  return (
    <Flex // a label se parece com um input
      as="label"
      flex="1"
      py="4"
      px="8"
      marginLeft="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      backgroundColor="gray.800"
      borderRadius="full"
    >
      <Input 
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        px="4"
        marginRight="4"
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20"/>
    </Flex>
  );
}