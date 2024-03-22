import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react"
import ButtonLogin from "./Button/ButtonLogin";
import { login } from "../services/login";


export const Card = () => {
  return(
    <div>
     <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
            <Center>
              <ButtonLogin onClick={() => login()} />
           
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
    </div>
  )
}