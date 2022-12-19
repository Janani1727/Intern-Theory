// import { HamburgerIcon } from '@chakra-ui/icons';
import React from "react"
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerHeader,
  Image,
  Flex,
  Select,

} from '@chakra-ui/react';
// import Link from "react"
import { FaHome, FaShoppingBag, FaList, FaChartArea, FaPhoneAlt, FaDoorOpen, FaAlignLeft, FaAlignCenter } from 'react-icons/fa';

import Images from "../Images/Add.png"

import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink,useNavigate } from "react-router-dom"


export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
const navigate=useNavigate()

  
const handleonoff=(e)=>{
      console.log(e.target.value) 
      if(e.target.value==="online"){
        navigate("/online")
      }else if(e.target.value==="offline"){
        navigate("/offline")
      }
      
}

  
const logcompstud=(e)=>{
  console.log(e.target.value) 
  if(e.target.value==="loginstudent"){
    navigate("/loginstudent")
  }else if(e.target.value==="logincompany"){
    navigate("/logincompany")
  }
  
}

  
const regcompstud=(e)=>{
  console.log(e.target.value) 
  if(e.target.value==="registercompany"){
    navigate("/registercompany")
  }else if(e.target.value==="registerstudent"){
    navigate("/registerstudent")
  }
  
}
  return (
    <>

      <HamburgerIcon onClick={onOpen} color="black" mt={5} ml={5} boxSize={10} />

      <Drawer
        isOpen={isOpen}
        placement='left'
      >
        <DrawerOverlay />
        <DrawerContent>

          <HamburgerIcon boxSize={10} ml={5} mt={"10px"} onClick={onClose} />
          <Image src={Images} h={20} ml={"60px"} mt={"-60px"} width={"100px"} />

          <DrawerHeader>
            <RouterLink to="./">
              <Flex marginTop={5} >
                <div style={{ marginTop: "5px", color: "grey" }}><FaHome /></div>
                <div style={{ marginLeft: "20px" }}>Home</div>
              </Flex>
            </RouterLink>

            <RouterLink to="/internship">
              <Flex marginTop={5}>
                <div style={{ marginTop: "5px", color: "grey" }}><FaList /></div>
                <div style={{ marginLeft: "20px" }}>InternShip</div>
              </Flex>
            </RouterLink>

            <RouterLink to="/jobs">
              <Flex marginTop={5}>
                <div style={{ marginTop: "5px", color: "grey" }}><FaShoppingBag /></div>
                <div style={{ marginLeft: "20px" }}>Jobs</div>
              </Flex>
            </RouterLink>
            <RouterLink to="/logincompany">
            <Flex marginTop={5}>
              <div style={{ marginTop: "5px", color: "grey" }}><FaAlignCenter /></div>
              <div style={{ marginLeft: "20px" }}>Post InternShip</div>
            </Flex>
            </RouterLink>

            
              <Flex marginTop={5}>
                <div style={{ marginTop: "5px", color: "grey" }}><FaChartArea /></div>
                <div style={{ marginLeft: "5px" }}>
                <Select fontSize={"20px"} border={"none"} fontWeight={"500"} placeholder='Courses' onChange={handleonoff}>
                
                <option  value='online'> <a href="online">Online Courses</a></option>
                
               
                  <option  value='offline'>Classroom Training</option>
             
                </Select>
                </div>
              </Flex>
              
           

            <RouterLink to="/contact">
              <Flex marginTop={5}>
                <div style={{ marginTop: "5px", color: "grey" }}><FaPhoneAlt /></div>
               
                <div style={{ marginLeft: "20px" }}>Contact Us</div>
              </Flex>
            </RouterLink>
            <div style={{ border: "0.1px solid grey", marginTop: "10px" }}></div>

            <Flex marginTop={5}>
              <div style={{ marginTop: "5px", color: "grey" }}><FaAlignLeft /></div>
              {/* <div style={{ marginLeft: "20px" }}>Register</div> */}
              <Select fontSize={"20px"} border={"none"} fontWeight={"500"} placeholder='Register' onChange={regcompstud}>
                
              <option  value='registercompany'>Company</option>
              <option  value='registerstudent'>Student</option>
               
                </Select>
            </Flex>
               


            <Flex marginTop={5}>
              <div style={{ marginTop: "5px", color: "grey" }}><FaDoorOpen /></div>
              {/* <div style={{ marginLeft: "20px" }}>Login</div> */}
              <Select fontSize={"20px"} border={"none"} fontWeight={"500"} placeholder='Login' onChange={logcompstud}>
                
                <option  value='logincompany'>Company</option>
                <option  value='loginstudent'>Student</option>
                 
                  </Select>
            </Flex>
           
            {/* <RouterLink to="/online">
                <option value='option1'>Online Courses</option>
                </RouterLink>
               
                <RouterLink to="/offline">
                  <option value='option2'>Classroom Training</option>
                 </RouterLink>
               
                 <RouterLink to="/registerstudent">
                <option value='option1'>RegisterStudent</option>
                </RouterLink>
         
                <RouterLink to="/registercompany">
                <option value='option1'>RegisterCompany</option>
                </RouterLink>
                
                <RouterLink to="/logincompany">
                <option value='option1'>loginCompany</option>
                </RouterLink>
                
                <RouterLink to="/loginstudent">
                <option value='option1'>LoginStudent</option>
                </RouterLink> */}
         
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  )
}