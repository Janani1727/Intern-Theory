import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Center,
    Text,
    Button,
    Input,
    Flex


} from '@chakra-ui/react'

import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginCompany() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (


        <>
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
                    <ModalHeader>Register Candidate</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <p style={{ marginLeft: "25px" }}>Already have an account?</p>
                    <div style={{ border: "1px dashed red", backgroundColor: "#fceff1", width: "90%", margin: "auto" }}>
                        <p>If you are a company looking to hire interns, please register as a company by clicking here</p>
                    </div>
                    <ModalBody>
                        <Button w={'full'} colorScheme={'facebook'} >
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
                   
                   <Flex >
                   <Input marginRight={"10px"} marginTop={8} variant='flushed' placeholder='First Name*' />
                 <Input marginLeft={"10px"} marginTop={8} variant='flushed' placeholder='Last Name*' />
                   </Flex>
               
                 <Input   marginTop={8} variant='flushed' placeholder='Email*' />
                 <Input  marginTop={8} variant='flushed' placeholder='Password*' />
                    </ModalBody>

                    <ModalFooter>
                        <Button  w={'full'} border={"1px solid red"} backgroundColor={"white"} onClick={onClose}>
                            Next
                        </Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* </Box> */}
        </>


    )
}