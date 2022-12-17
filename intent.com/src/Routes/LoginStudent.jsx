import React from "react"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,

} from '@chakra-ui/react'

import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginStudent() {
   
    return (


        <>
             <Flex
             
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            width={"150%"}
            p={8}>
                  <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Register Candidate</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            Already have an account?<Link color={'blue.400'}>Sign Up</Link> 
            </Text>
            <div style={{ border: "1px dashed red", backgroundColor: "#fceff1", width: "90%", margin: "auto" }}>
         <p>If you are a company looking to hire interns, please register as a company by clicking here</p>
     </div>
          </Stack>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
        </>


    )
}
