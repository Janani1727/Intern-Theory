import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
  
    useDisclosure,
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (


        <>
        <Box
         w={'full'}
         h={'90vh'}
         backgroundImage={
           'url(https://assets.interntheory.com/creative/Web-Banner.jpg)'
         }
         backgroundSize={'cover'}
         backgroundPosition={'center center'}>
        
        <div style={{}} >
        <Heading marginRight={"800px"} >17163 Companies</Heading>
        <h1 style={{marginLeft:"-700px"}}> Trust Us With Their Intern Requirements Wouldn't You?</h1>
        
        </div>
        
            <Flex>
                
                <SimpleGrid width={"40%"} columns={[4, null, 4]} spacing='20px' mt={"70px"} py={10} ml={"110px"}>
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




                {/* <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
                  Some other content that'll receive focus on close.
                </Box> */}
                {/* <Box width={"100%"}> */}
                <Button mt={4} onClick={onOpen}>
                    Open Modal
                </Button>
                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Start Hiring Interns</ModalHeader>
                        {/* <ModalCloseButton /> */}
                        <p style={{ marginLeft: "25px" }}>Already have an account?</p>
                        <div style={{ border: "1px dashed red", backgroundColor: "#fceff1", width: "90%", margin: "auto" }}>
                            <p>If you are a student looking for internships, please register as a student by clicking here.</p>
                        </div>
                        <ModalBody>
                            <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
                                <Center>
                                    <Text>Send to Linkedin</Text>
                                </Center>
                            </Button>
                            <p style={{ textAlign: "center" }}>OR</p>
                            <Flex >
                                <Input marginRight={"10px"} marginTop={4} variant='flushed' placeholder='First Name' />
                                <Input marginLeft={"10px"} marginTop={4} variant='flushed' placeholder='Last Name' />
                            </Flex>

                            <Input marginTop={8} variant='flushed' placeholder='Comapany Name *' />
                            <Input marginTop={8} variant='flushed' placeholder='Mobile Number*' />
                            <Input marginTop={8} variant='flushed' placeholder=' Email (Please use a corporate email only)*' />
                            <Input marginTop={8} variant='flushed' placeholder='Password*' />
                            <Input marginTop={8} variant='flushed' placeholder='How Did You Find Us*' />
                        </ModalBody>

                        <ModalFooter>
                            <Button w={'full'} border={"1px solid red"} backgroundColor={"white"} color={"red"} onClick={onClose}>
                                Proceed to Posting Internship
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
            </Box>
            {/* </Box> */}
        </>


    )
}