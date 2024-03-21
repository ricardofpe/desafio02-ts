import { Button } from "@chakra-ui/react"
import { login } from "../../services/login"

interface ButtonProps {
  onClick: () => {} 
}






export default function ButtonLogin({onClick}:ButtonProps ) {
  return (
    <Button maxWidth={'80px'} onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
    Login
  </Button>
  )
}
