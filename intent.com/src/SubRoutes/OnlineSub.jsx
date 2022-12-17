import { Box, 
    Image,
    Stack,
    Heading,
    Card,
    CardBody,Text,
    CardFooter,
    Button,
    ButtonGroup,
    
} from "@chakra-ui/react"

const OnlineSub = ({image,id,emi,desc,price,title}) => {
    return(

<Box  width={"80%"} margin={"auto"}>

<Card maxW='sm'>
<CardBody>
 <Image
   src={image}
   alt='Green double couch with wooden legs'
   borderRadius='lg'
 />
 <Stack mt='6' spacing='3'>
   <Heading size='md'>{title}</Heading>
   <Text>
    {desc}
   </Text>
   <Text color='blue.600' fontSize='2xl'>
     {price}
   </Text>
 </Stack>
</CardBody>

<CardFooter>
 <ButtonGroup spacing='2'>
   <Button variant='solid' colorScheme='blue'>
     {emi}
   </Button>
   <Button variant='ghost' colorScheme='blue'>
     Add to cart
   </Button>
 </ButtonGroup>
</CardFooter>
</Card>
</Box>

    )
}

export default OnlineSub()


        {/* <Box width={"100%"}> */}
      //   <Flex
      //   minH={'100vh'}
      //   align={'center'}
      //   justify={'center'}
      //   bg={useColorModeValue('gray.50', 'gray.800')}>
      //   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      //     <Stack align={'center'}>
      //       <Heading fontSize={'4xl'}>Sign in to your account</Heading>
      //       <Text fontSize={'lg'} color={'gray.600'}>
      //         to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
      //       </Text>
      //     </Stack>
      //     <Box
      //       rounded={'lg'}
      //       bg={useColorModeValue('white', 'gray.700')}
      //       boxShadow={'lg'}
      //       p={8}>
      //       <Stack spacing={4}>
      //         <FormControl id="email">
      //           <FormLabel>Email address</FormLabel>
      //           <Input type="email" />
      //         </FormControl>
      //         <FormControl id="password">
      //           <FormLabel>Password</FormLabel>
      //           <Input type="password" />
      //         </FormControl>
      //         <Stack spacing={10}>
      //           <Stack
      //             direction={{ base: 'column', sm: 'row' }}
      //             align={'start'}
      //             justify={'space-between'}>
      //             <Checkbox>Remember me</Checkbox>
      //             <Link color={'blue.400'}>Forgot password?</Link>
      //           </Stack>
      //           <Button
      //             bg={'blue.400'}
      //             color={'white'}
      //             _hover={{
      //               bg: 'blue.500',
      //             }}>
      //             Sign in
      //           </Button>
      //         </Stack>
      //       </Stack>
      //     </Box>
      //   </Stack>
      // </Flex>



{/* <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>
    <ModalHeader>Register Candidate</ModalHeader>
    {/* <ModalCloseButton /> */}
    // <p style={{ marginLeft: "25px" }}>Already have an account?</p>
    // <div style={{ border: "1px dashed red", backgroundColor: "#fceff1", width: "90%", margin: "auto" }}>
    //     <p>If you are a company looking to hire interns, please register as a company by clicking here</p>
    // </div>
    // <ModalBody>
    //     <Button w={'full'} colorScheme={'facebook'} >
    //         <div style={{  borderRadius: "5px" }}>
    //             <FaFacebook />
    //         </div>
    //         <Center>
    //             <Text>Register with Facebook</Text>
    //         </Center>
    //     </Button>

//         {/* Google */}
//         <Button backgroundColor={"#087cdd"}color={"white"} w={'full'} marginTop={"10px"}>
//             <div style={{ backgroundColor: "white", borderRadius: "5px" }}>
//                 <FcGoogle />
//             </div>
//             <Center>
//                 <Text>Register with Google</Text>
//             </Center>
//         </Button>
   
//    <Flex >
//    <Input marginRight={"10px"} marginTop={8} variant='flushed' placeholder='First Name*' />
//  <Input marginLeft={"10px"} marginTop={8} variant='flushed' placeholder='Last Name*' />
//    </Flex>

//  <Input   marginTop={8} variant='flushed' placeholder='Email*' />
//  <Input  marginTop={8} variant='flushed' placeholder='Password*' />
//     </ModalBody>

//     <ModalFooter>
//         <Button  w={'full'} border={"1px solid red"} backgroundColor={"white"} onClick={onClose}>
//             Next
//         </Button>
        
//     </ModalFooter>
// </ModalContent>
// </Modal> 