
import {
   Flex,
   Input
  } from '@chakra-ui/react';
  import axios from "axios"
  import { useEffect, useState } from "react"
  const fetchdata=()=>{

    return axios.get(`http://localhost:3000/Internship`);
  }
export default function  Internship(){

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
 <div style={{width:"80%",margin:"auto"}}>
       <Flex>
         <div style={{border:"0px solid red",width:"30%"}} > 
            <img  style={{height:"93%"}} src="https://assets.interntheory.com/creative/Internship_left_course_add_02.png" alt="" />
         </div>
         <div style={{border:"1px solid red",width:"70%"}}>
           <h1 style={{textAlign:"left",fontSize:"30px"}} >All Internships</h1>
         </div>
       </Flex>
       </div>
    </>

)
}
