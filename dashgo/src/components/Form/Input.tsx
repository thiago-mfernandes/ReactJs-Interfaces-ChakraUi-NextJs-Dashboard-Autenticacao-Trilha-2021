import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({ name, label, ...rest }: InputProps, ref) => {
  return (
    <FormControl> 
      {!! label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}     
        focusBorderColor="pink.500" // prop exclusiva do chakra
        backgroundColor="gray.900"
        variant="filled" // https://chakra-ui.com/docs/components/input/usage#changing-the-appearance-of-the-input
      
      
        //como modificar os estados do css(hover, active, outline)???
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg" //https://chakra-ui.com/docs/components/input/usage#changing-the-size-of-the-input
        ref={ref}
        
        //preciso receber todas as propriedades comuns a um input.
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);