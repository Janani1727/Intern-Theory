
import {
   
    Input,
    Card, Image, CardBody, Flex,Stack,Text,Heading,
    
   } from '@chakra-ui/react';
   import axios from "axios"
   import { useEffect, useState } from "react"

   const fetchdata=()=>{

    return axios.get(`http://localhost:3000/Jobs`);
  }
  
 export default function  Jobs(){

  
  const [data,setData]=useState([])
  
  useEffect(()=>{
    fetchdata().then((res)=>setData(res.data))
    
  },[])
  console.log(data)
 return(
  <>
  
  <div  style={{display:"flex",marginBottom:"50px", height:"80px",width:"100%",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Input  marginLeft={"120px"} marginTop={"10px"} width={"18%"} variant='flushed' placeholder='Cities..' />
        <Input marginLeft={"20px"} marginTop={"10px"}  width={"18%"} variant='flushed' placeholder='Type..' />
        <Input  marginLeft={"20px"}  marginTop={"10px"}width={"18%"} variant='flushed' placeholder='Preferences..' />
        <p style={{marginLeft:"10px",marginTop:"25px"}}> OR</p>
        <Input  marginLeft={"10px"}marginTop={"10px"} width={"18%"} variant='flushed' placeholder='Search..' />  
        <button style={{marginTop:"10px",height:"40px", color:"white",width:"100px",border:"#087cdd",backgroundColor:"#087cdd",borderRadius:"5px"}}>Search</button>
 </div>
 <div style={{backgroundColor:"#f8f8f8 "}}>
 <div style={{width:"80%",margin:"auto"}}>
       <Flex>
         <div style={{border:"0px solid red",width:"30%",height:"20%",marginRight:"20px",backgroundColor:"#f8f8f8 "}} > 
            <img  style={{height:"93%"}} src="https://assets.interntheory.com/creative/Internship_left_course_add_02.png" alt="" />
         </div>
         <div style={{border:"0px solid red",width:"70%",backgroundColor:"white",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
           <h1 style={{textAlign:"left",fontSize:"30px",marginBottom:"20px", marginLeft:"10px",marginTop:"10px"}} >Fresher Jobs</h1>

           {data.map((e)=>(
<>
<Card
  direction={{ base: 'column', sm: 'row' }} 
  // overflow='hidden'
  // variant='outline'
>
  <Image
    // objectFit='cover'
    // maxW={{  sm: '200px' }}
    src={e.image}
    alt='Caffe Latte'
    width={"70px"}
    height={'60px'}
    margin={"50px"}
  />

  <Stack>
    <CardBody>
      <Heading color={"gray.700"} textAlign={"left"} size='sm'>{e.title}</Heading>

      <Text color={"gray"} textAlign={"left"}>
        {e.type}
      </Text>

      <Text color={"gray"} textAlign={"left"}>
        {e.dept}
      </Text>

      <Text color={"gray"} textAlign={"left"}>
        {e.place}
      </Text>

      <Text color={"blackAlpha.800"} textAlign={"left"} >
       Salary: {e.salary}
      </Text>
    </CardBody>
  </Stack>

 
    <CardBody>
      <Text textAlign={"right"}>
       {e.week}
      </Text>

      <Text textAlign={"right"} mt={"10px"} color={"#087cdd"}>
       {e.app}
      </Text>
     
    </CardBody>
    {/* <img style={{width:"30px",height:"30px",backfaceVisibility:"hidden",marginLeft:"200px",marginTop:"50px"}} src={e.ima} alt="" /> */}
</Card>
{/* <FaShareAlt style={{marginLeft:"750px",marginTop:"-30px"}} /> */}

  <div style={{border:"1px dashed gray"}}></div>
  
  
  
</>
       ))}
<Text textAlign={"center"} mt={"10px"} color={"gray"}>
     End of Search Results
      </Text>
         </div>
        
       </Flex>

       </div>
       </div>
    
    </>
 
 )
 }
 