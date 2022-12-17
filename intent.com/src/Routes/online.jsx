import { Box, 
    Image,
    SimpleGrid,
    Stack,
    Heading,
    Card,
    CardBody,Text,
    CardFooter,
    Button,
    ButtonGroup,
    Flex,
    Grid

} from "@chakra-ui/react"

import axios from "axios"
import { useEffect, useState } from "react"
// import OnlineSub from "../SubRoutes/OnlineSub";

// import Api from "../Components/ApiCall"
const fetchdata=()=>{

  return axios.get(`http://localhost:3000/online`);
}


export default function Online(){
    const [data,setData]=useState([])
    useEffect(()=>{
      fetchdata().then((res)=>setData(res.data))
    },[])
    console.log(data)
   return(
        <>
  <div style={{backgroundColor:"#153d49",height:"300px"}} >
    <Image width={"80%"} margin={"auto"} src='https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png'/>
  </div>
   
   <div  style={{width:"80%", margin:"auto",color:"gray"}}>
    <h3 style={{textAlign:"left" ,marginTop:"50px", fontSize:"22px"}}>Certified Online Courses</h3>
    <p  style={{textAlign:"left",marginTop:"10px" }}>Upgrade your skills with Intern Theory's online learning platform. Enrol for any certified online courses and get a step ahead of competition. Select from a range of skill based online courses and kickstart your career.</p>
   </div>

   {/* <Box  width={"80%"} margin={"auto"}>

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
   </Box> */}
{/* <Flex>
      {data.map((el)=>(
             <Grid>
            <Card>
            <OnlineSub 
                 key={el.id}
                 img={el.image}
                 brand={el.brand}
                 desc={el.desc}
                 title={el.title}
                 price={el.price} 
                 emi={el.emi}
                />
            </Card>
             </Grid>
      ))}

   </Flex> */}
  </>
    )


  }
