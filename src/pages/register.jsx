import { Box } from "@chakra-ui/react";
import End from "../components/end";
import Header1 from "../components/header1";
import Registerr from "../components/Registerr";
 export default function Register(){
    return (
        <Box 
     width='100vw'
     height='100vh'
    >
        <Box 
         width={'95%'}
         height='100%'
         position={'relative'}
         left={'2.5%'}
        >
            <Header1></Header1> 
            <Registerr namee="Đăng kí"></Registerr>
            <End></End>  
        </Box>
         
    </Box>
    )
 }