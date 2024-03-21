import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react"


export const Header  = () => {
  return(
    <ChakraProvider>
      <Box backgroundColor={"black"} color={"#fff"} padding={"20px"} fontSize={"20px"} fontWeight={"bold"}>
      <Center>
      <h1>Dio Bank</h1>
</Center>
   
      </Box>
   

    </ChakraProvider>
  
  
  )
}
