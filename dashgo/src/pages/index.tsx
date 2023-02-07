import { Input } from "@/components/Form/Input"
import { Button, Flex, Stack } from "@chakra-ui/react"
// Stack is a layout component used to group elements together and apply a space between them.
// FormControl serve para agrupar elementos similares em contexto. Ex.: Label e Input
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

interface SignInFormData {
  email: string;
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório.").email("E-mail Inválido."),
  password: yup.string().required("Senha obrigatória."),
})

export default function SignIn() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: yupResolver(SignInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);

  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
          <Input type="password" label="Senha" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
        </Stack>
        <Button 
          type="submit"
          marginTop="6"
          colorScheme="pink" // https://chakra-ui.com/docs/styled-system/theme#alphas
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
