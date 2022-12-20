
import { Link as RouterLink } from "react-router-dom"



import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
   
    Text,
    Checkbox,
   
  } from '@chakra-ui/react';

export default function Checkout() {
    return (
        <>
            

            <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}
            width={"50%"}
            margin={"auto"} >
            <Stack spacing={6}>
                
              <HStack >
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder={"Enter First Name"}/>
                  </FormControl>
                </Box>
                <Box >
                  <FormControl id="mobilenumber">
                    <FormLabel>Mobile Number</FormLabel>
                    <Input type="number" placeholder={"Enter Mobile Number"} />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="pincode" isRequired>
                    <FormLabel>Pincode</FormLabel>
                    <Input type="number" placeholder={"Enter Pincode"} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city">
                    <FormLabel>City</FormLabel>
                    <Input type="text" placeholder={"Enter City Name"}/>
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="state" isRequired>
                    <FormLabel>State</FormLabel>
                    <Input type="text" placeholder={"Enter State Name"}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="building">
                    <FormLabel>Building name or number</FormLabel>
                    <Input type="text" placeholder={"Enter Building Name"}/>
                  </FormControl>
                </Box>
              </HStack>
              
              <HStack>
                <Box>
                  <FormControl id="street" isRequired>
                    <FormLabel>Street name or number</FormLabel>
                    <Input type="text" placeholder={"Enter Street Name"}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="landmark">
                    <FormLabel>Landmark</FormLabel>
                    <Input type="text" placeholder={"Enter Landmark"}/>
                  </FormControl>
                </Box>
              </HStack>
              <Stack p={2}>
                <Text align={'center'}>
                  Adress Type(Optional)
                </Text>
                <Flex justifyContent={"flex-start"}>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked >
                   Home
                </Checkbox>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked marginLeft={10}>
                   Office
                </Checkbox>
                </Flex>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked>
                   Use this as my default shipping adress
                </Checkbox>
                <br />
                <hr />
                <br />

                <RouterLink to="/thankyou">
                <Button bg="#faa619" color={"white"} fontWeight="bold"  
                backgroundColor={"#df1e2e"} 
                _hover={{
                  bg: 'red.700',
                }}>Continue</Button>

                </RouterLink>
                <br />
                <hr />
                <br />
              </Stack>
            </Stack>
          </Box>
           


        </>
    )
}