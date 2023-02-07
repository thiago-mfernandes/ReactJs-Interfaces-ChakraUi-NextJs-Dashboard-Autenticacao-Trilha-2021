import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      // https://chakra-ui.com/docs/styled-system/responsive-styles#the-array-syntax
      
      // baseado no sistema de breakpoints do chakra, posso passar um array de medidas e e o chakra coloca cada medida na sequencia de breakpoints
      
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      width="64">
      dashgo
      <Text
        as="span"
        color="pink.500"marginLeft={1}>
        .
      </Text>
    </Text> 
  );
}