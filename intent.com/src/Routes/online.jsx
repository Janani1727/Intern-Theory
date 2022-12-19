import {useState,useEffect} from "react"
import axios from "axios";
import {Image,
 Card,
 CardBody,
 Text,
 Heading,
 Stack,
 Divider,
 CardFooter,
 Button,
 ButtonGroup,
 Grid

  } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"

const fetchdata=()=>{

  return axios.get(`http://localhost:3000/online`);
}


export default function Online({image,price,desc,brand,emi}){
  const [data,setData]=useState([])
  
  useEffect(()=>{
    fetchdata().then((res)=>setData(res.data))
    
  },[])
  console.log(data)
return(
//   <>

// <div style={{backgroundColor:"#153d49",height:"300px"}} >
//           <Image width={"80%"} margin={"auto"} src='https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png'/>
//         </div>
         
//          <div  style={{width:"80%", margin:"auto",color:"gray"}}>
//           <h3 style={{textAlign:"left" ,marginTop:"50px", fontSize:"22px"}}>Certified Online Courses</h3>
//           <p  style={{textAlign:"left",marginTop:"10px" }}>Upgrade your skills with Intern Theory's online learning platform. Enrol for any certified online courses and get a step ahead of competition. Select from a range of skill based online courses and kickstart your career.</p>
//          </div>

//          <div style={{border:"1px solid red",width:"80%",margin:"auto"}}>  
//          <div style={{display:"grid",border:"1px solid blue",width:"100%",height:"",gridTemplateColumns:"repeat(4, 1fr)",gap:"10px"}}>
//    {data.map((e)=>(
    
// <Card maxW='sm'border={"1px solid green"} >
//   <CardBody >
//     <Image
//       src={e.image}
//       alt='Green double couch with wooden legs'
//       borderRadius='lg'
//       height={"200px"}
//     />
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>{e.title}</Heading>
//       <Text>
//         {e.desc}
//       </Text>
//       <div style={{border:"0.2px dashed #153d49"}}></div>
//       <Text  fontSize='2xl'>
//        {e.price}
//       </Text>
//       <Text color='#ffb526' fontSize='2xl'>
//        {e.emi}
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <ButtonGroup spacing='2'>
     
//       <Button variant='ghost' colorScheme='blue'>
//         KNOW MORE
//       </Button>
//       <Button variant='solid' colorScheme='red'>
//         CHECKOUT
//       </Button>
//     </ButtonGroup>
//   </CardFooter>
// </Card>
 

//         ))}
//         </div> 
//         </div> 

      
//     </>
<>
<div style={{backgroundColor:"#f8f8f8 "}}>
<div style={{backgroundColor:"#153d49",height:"300px" }} >
          <Image width={"80%"} margin={"auto"} src='https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png'/>
        </div>
         
         <div  style={{width:"80%", margin:"auto",color:"gray"}}>
          <h3 style={{textAlign:"left" ,marginTop:"50px", fontSize:"22px"}}>Certified Online Courses</h3>
          <p  style={{textAlign:"left",marginTop:"10px" }}>Upgrade your skills with Intern Theory's online learning platform. Enrol for any certified online courses and get a step ahead of competition. Select from a range of skill based online courses and kickstart your career.</p>
         </div>

         <div style={{border:"0px solid red",width:"80%",margin:"auto",marginBottom:"50px",marginTop:"50px"}}>  
         <div style={{gap:"20px",display:"grid",border:"0px solid blue",width:"100%", gridTemplateColumns:"repeat(4, 1fr)"}}>
   {data.map((e)=>(
    
<Card border={"0px solid green"} >
  <CardBody >
    <Image
      src={e.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={"150px"}
      width={"100%"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' textAlign={"left"}>{e.title}</Heading>
      <Text textAlign={"left"}>
        {e.desc}
      </Text>
      <div style={{border:"0.2px dashed #153d49"}}></div>
      <Text textAlign={"right"} fontSize='lg'>
       {e.price}
      </Text>
      <Text textAlign={"right"} color='#ffb526' fontSize='lg'>
       {e.emi}
      </Text>
    </Stack>
    <ButtonGroup mt={"10px"}  >
      <Button variant='ghost' colorScheme='blue'>
        KNOW MORE
      </Button>
        <RouterLink to="/Cart">
      <Button textAlign={"right"} variant='solid' colorScheme='red'>
        ADD TO CART
      </Button>
      </RouterLink>
    </ButtonGroup>
  </CardBody>
 
</Card>
 

        ))}
        </div> 
        </div> 
        </div>
      
    </>
    )
  }


  

