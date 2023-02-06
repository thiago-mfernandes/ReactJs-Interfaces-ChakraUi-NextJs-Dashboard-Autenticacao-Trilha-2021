import { Input } from "@/components/Form/Input"
import { Button, Flex, Stack } from "@chakra-ui/react"
// Stack is a layout component used to group elements together and apply a space between them.
// FormControl serve para agrupar elementos similares em contexto. Ex.: Label e Input

export default function Home() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360} // medida em px
        backgroundColor="gray.800"
        padding="8" // 8*4px = 32px ou 8/2=2rem
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>
        <Button 
          type="submit"
          marginTop="6"
          colorScheme="pink" // https://chakra-ui.com/docs/styled-system/theme#alphas
          size="lg"
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
