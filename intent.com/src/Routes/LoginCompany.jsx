import React from "react"
import {
    Flex,
    Box,
    FormControl,
    Center,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,

} from '@chakra-ui/react'
import {  SiLinkedin } from 'react-icons/si';

export default function LoginCompany() {
   
    return (


        <>
              <Flex
             
             minH={'80vh'}
             align={'center'}
             justify={'center'}
            >
             <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
             
               <Box
                 rounded={'lg'}
                 bg={useColorModeValue('white', 'gray.700')}
                 boxShadow={'dark-lg'}
                 width={"100%"}
                
                 marginLeft={"10px"}
                 p={8}>
                       <Stack align={'center'}>
                     
                 <Heading fontSize={'4xl'}marginLeft={"-366px"}>Login</Heading>
                 
                 <div style={{ textAlign:"left",border: "1px dashed red",marginTop:"8px" ,backgroundColor: "#fceff1", width: "100%"}}>
              <p style={{textAlign:"left"}}>If you are a company looking to hire interns, please register as a company by clicking here</p>
          </div>
               </Stack>
               <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />} marginTop={"8px"} >
          <Center>
            <Text>Register With LinkedIn</Text>
          </Center>
        </Button>
                        
                 <Stack spacing={4}>
                   <FormControl id="email">
                     {/* <FormLabel>Email address</FormLabel> */}
                     {/* <Flex >
                        <Input marginRight={"10px"} marginTop={8} variant='flushed' placeholder='First Name*' />
                      <Input marginLeft={"10px"} marginTop={8} variant='flushed' placeholder='Last Name*' />
                        </Flex> */}
                        <Input   marginTop={8} variant='flushed' placeholder='Email/Number*' />
                      <Input  marginTop={8} variant='flushed' placeholder='Password*' />
                   </FormControl>
                   
                   <Stack spacing={10}>
                     <Stack
                       direction={{ base: 'column', sm: 'row' }}
                       align={'start'}
                       justify={'space-between'}>
                       <Checkbox>Remember me</Checkbox>
                       <Link color={'blue.400'}>Forgot password?</Link>
                     </Stack>
                     <Text fontSize={'lg'} color={'gray.600'}>
                 Don't have an account?<Link color={'blue.400'}>Create Your Account</Link> 
                 </Text>
                     <Button
                       border={"1px solid red"}
                       color={'red'}
                       bg={'white'} 
                       _hover={{
                         bg: 'red.100',
                       }}>
                       LOGIN
                     </Button>
                   </Stack>
                 </Stack>
               </Box>
             </Stack>
           </Flex>
        </>


    )
}