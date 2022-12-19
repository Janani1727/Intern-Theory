import {FaTimesCircle} from "react-icons/fa"
// import { Box, Image} from "@chakra-ui/react"

import { Box,Text,Card,Image,Stack,Heading,Button, CardBody, CardFooter } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
export default function Cart({image,title,price}){

    //  const {id}=useParams();
    //   console.log(id);
     

    return(
        <>
        <div >
        <div style={{display:"flex",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:"80%",margin:"auto"}}>

        <Box color={"red"}  width={"50px"} height={"50px"} padding={2.5} borderRadius={"50%"} marginLeft={"5px"}
          _hover={{
            backgroundColor:"gray.300"
          }}
          fontSize={"30px"}
        >
        <FaTimesCircle  />
        </Box>

        <Card
  direction={{ base: 'column', sm: 'row' }}
//   overflow='hidden'
//   variant='outline'
>
  <Image
    // objectFit='cover'
    maxW={{  sm: '200px' }}
    height={"70px"}
    width={"150px"}
    src='https://assets.interntheory.com/creative/courses/thumbnails/it.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody marginLeft={"-350px"}>
      <Heading size='md'>IT Starter Pack (4 Courses)</Heading>
      <Text>
        ₹ 15999
        </Text>
    </CardBody>
        
     
  <div style={{border:"0.2px dashed gray",width:"130%",marginLeft:"-150px"}}></div> 

    <CardFooter>
      <Button marginLeft={"300px"} variant='solid' colorScheme='red'>
     EMPTY CART
      </Button>
      
      <RouterLink to="/checkout">
      <Button marginLeft={"10px"} variant='solid' colorScheme='red'>
     CHECKOUT
      </Button>
      </RouterLink>
      {/* <div style={{border:"0.2px solid gray",marginLeft:"200px",height:"300px",marginTop:"-100px"}}></div>  */}
      
      
    </CardFooter>
   
   
  </Stack>
  {/* <Flex >
        <div>Amount</div>
        <div>₹ 5999</div>
      </Flex>
      <div style={{border:"0.2px solid gray"}}></div>
      <Flex>
        <div>CGST 9%</div>
        <div>₹ 540 </div>
      </Flex>
       <Flex>
        <div>SGST 9%</div>
        <div>₹ 540</div>
      </Flex> */}
</Card>
</div>
{/* <div style={{border:"0.2px solid gray",marginLeft:"400px"}}></div> */}
{/* <Input   marginTop={8} variant='flushed' placeholder='' />
  <Input  marginTop={8} variant='flushed' placeholder='' /> */}
        
        {/* <div style={{border:"0.2px dashed gray",width:"80%",margin:"auto"}}></div> */}
        </div>
        </>
    )
}

<Text>
EMI Starting at ₹ 915 /month
</Text>