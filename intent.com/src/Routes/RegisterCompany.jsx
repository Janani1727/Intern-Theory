import React from "react"
import {
  
   
 
    Checkbox,
    Stack,
    Link,
 useColorModeValue,
    Box,
    Center,
    Text,
    Button,
    Input,
    Flex,
    Image,
    SimpleGrid,
    Heading


} from '@chakra-ui/react'

import { SiLinkedin,  } from 'react-icons/si';

export default function RegisterCompany() {
   
    return (


        <>
        <Box
         w={'full'}
         h={'100vh'}
         backgroundImage={
           'url(https://assets.interntheory.com/creative/Web-Banner.jpg)'
         }
         backgroundSize={'cover'}
         backgroundPosition={'center center'}>
        
        <div style={{}} >
        <Heading marginRight={"700px"} >17163 Companies</Heading>
        <h1 style={{marginLeft:"-700px" ,marginTop:"10px",fontSize:"20px"}}> Trust Us With Their Intern Requirements Wouldn't You?</h1>
        
        </div>
        
            <Flex>
                
                <SimpleGrid width={"40%"} columns={[4, null, 4]} spacing='-10px' mt={"10px"} py={10} ml={"110px"}>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-1.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-2.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-3.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-4.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-5.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-6.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-7.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-8.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-9.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-10.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-11.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-12.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-13.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-14.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-15.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-16.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-17.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-18.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-19.png'></Image>
                    <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-20.png'></Image>
                    {/* <Image src='https://assets.interntheory.com/creative/home-logo-colored/logo-21.png'></Image> */}
                    

                </SimpleGrid>




           


<Flex
             
             minH={'80vh'}
             align={'center'}
             justify={'center'}
             marginTop={"-100px"}
            >
             <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
             
               <Box
                 rounded={'lg'}
                 bg={useColorModeValue('white', 'gray.700')}
                 boxShadow={'dark-lg'}
                 width={"100%"}
                 marginInlineStart={"-492px"}
                 marginLeft={"10px"}
                 p={8}>
                       <Stack align={'center'} >
                     <Box marginLeft={"-200px"} textAlign={"left"}>
                     <Heading fontSize={'3xl'} fontWeight={"500"} marginBottom={"10px"} >Start Hiring Interns</Heading>
                 <p fontSize={'lg'} color={'gray.600'}   >
                 Already have an account?<Link color={'blue.400'}>Sign in</Link> 
                 </p>
                     </Box>
                 
                 <div style={{ textAlign:"left",border: "1px dashed red",marginTop:"8px" ,backgroundColor: "#fceff1", width: "100%"}}>
              <p style={{textAlign:"left"}}>If you are a student looking for internships, please register as a student by clicking here</p>
          </div>
               </Stack>
               <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />} marginTop={"8px"} >
          <Center>
            <Text>Register With LinkedIn</Text>
          </Center>
        </Button>
                        
                 <Stack spacing={4}>
     
                     {/* <FormLabel>Email address</FormLabel> */}
                     <Flex >
                        <Input marginRight={"10px"} marginTop={8} variant='flushed' placeholder='First Name' />
                      <Input marginLeft={"10px"} marginTop={8} variant='flushed' placeholder='Last Name' />
                        </Flex>
                        <Input   marginTop={8} variant='flushed' placeholder='Company Name*' />
                      <Input  marginTop={8} variant='flushed' placeholder='Mobile Number*' />
                      <Input   marginTop={8} variant='flushed' placeholder='Email(Please use a corporate Email only)' />
                      <Input  marginTop={8} variant='flushed' placeholder='Password' />
                      <Input   marginTop={8} variant='flushed' placeholder='How Did You Find Us?*' />
                     
                   
                   <Stack spacing={10}>
                     <Button
                       border={"1px solid red"}
                       color={'red'}
                       bg={'white'} 
                       _hover={{
                         bg: 'red.100',
                       }}>
                    PROCEED TO POSTING INTERNSHIP
                     </Button>
                   </Stack>
                 </Stack>
               </Box>
             </Stack>
           </Flex>

                
            </Flex>
            </Box>
            {/* </Box> */}
        </>


    )
}