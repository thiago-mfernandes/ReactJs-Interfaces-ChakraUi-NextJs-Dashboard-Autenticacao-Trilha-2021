import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
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
      />
      <Icon as={RiSearchLine} fontSize="20"/>
    </Flex>
  );
}