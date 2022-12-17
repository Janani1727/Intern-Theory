import {Image} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
const fetchdata=()=>{

  return axios.get(`http://localhost:3000/offline`);
}


export default function Offline(){

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
          <h3 style={{textAlign:"left" ,marginTop:"50px", fontSize:"22px"}}>Certified Offline Courses</h3>
          <p  style={{textAlign:"left",marginTop:"10px" }}>Intern Theory launches certified classroom training for select courses in Mumbai. If you are from another city and wish to join our courses.</p>
         </div>
         </>
    )
}