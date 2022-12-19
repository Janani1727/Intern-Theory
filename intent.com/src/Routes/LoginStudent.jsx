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

import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export default function LoginStudent() {
   
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
            marginInlineStart={"-292px"}
            marginLeft={"10px"}
            width={"100%"}
            p={8}>
                  <Stack align={'center'}>
                
            <Heading fontSize={'4xl'} marginLeft={"-366px"}>Login</Heading>
            
            <div style={{ textAlign:"left",border: "1px dashed red",marginTop:"8px" ,backgroundColor: "#fceff1", width: "90%", marginLeft:"-41px"}}>
         <p style={{textAlign:"left"}}>If you are a student looking for internships, please login as a student by clicking here</p>
     </div>
          </Stack>
          <Button w={'full'} colorScheme={'facebook'} marginTop={4} >
                            <div style={{  borderRadius: "5px" }}>
                                <FaFacebook />
                            </div>
                            <Center>
                                <Text>Register with Facebook</Text>
                            </Center>
                        </Button>

                        {/* Google */}
                        <Button backgroundColor={"#087cdd"}color={"white"} w={'full'} marginTop={"10px"}>
                            <div style={{ backgroundColor: "white", borderRadius: "5px" }}>
                                <FcGoogle />
                            </div>
                            <Center>
                                <Text>Register with Google</Text>
                            </Center>
                        </Button>
                   
            <Stack spacing={4}>

                {/* <FormLabel>Email address</FormLabel> */}
                {/* <Flex >
                   <Input marginRight={"10px"} marginTop={8} variant='flushed' placeholder='First Name*' />
                 <Input marginLeft={"10px"} marginTop={8} variant='flushed' placeholder='Last Name*' />
                   </Flex> */}
                   <Input   marginTop={8} variant='flushed' placeholder='Email/Number*' />
                 <Input  marginTop={8} variant='flushed' placeholder='Password*' />
           
              
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
