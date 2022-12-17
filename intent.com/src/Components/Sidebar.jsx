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
import { Link as RouterLink } from "react-router-dom"

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()

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

            <Flex marginTop={5}>
              <div style={{ marginTop: "5px", color: "grey" }}><FaAlignCenter /></div>
              <div style={{ marginLeft: "20px" }}>Post InternShip</div>
            </Flex>

            <RouterLink >
              <Flex marginTop={5}>
                <div style={{ marginTop: "5px", color: "grey" }}><FaChartArea /></div>
                <div style={{ marginLeft: "5px" }}>
                <Select fontSize={"20px"} border={"none"} fontWeight={"500"} placeholder='Courses'>
                
                <option  value='option1'> <a href="online">Online Courses</a></option>
                
               
                  <option  value='option2'>Classroom Training</option>
                       {/* <RouterLink to="/online">
                <option value='option1'>Online Courses</option>
                </RouterLink>

                <RouterLink to="/offline">
                  <option value='option2'>Classroom Training</option>
                 </RouterLink> */}
                 
                </Select>
                </div>
              </Flex>
              </RouterLink>
           

            <RouterLink to="/contact">
              <Flex marginTop={5}>
                <div style={{ marginTop: "5px", color: "grey" }}><FaPhoneAlt /></div>
               
                <div style={{ marginLeft: "20px" }}>Contact Us</div>
              </Flex>
            </RouterLink>
            <div style={{ border: "0.1px solid grey", marginTop: "10px" }}></div>

            <Flex marginTop={5}>
              <div style={{ marginTop: "5px", color: "grey" }}><FaAlignLeft /></div>
              <div style={{ marginLeft: "20px" }}>Register</div>
            </Flex>

            <Flex marginTop={5}>
              <div style={{ marginTop: "5px", color: "grey" }}><FaDoorOpen /></div>
              <div style={{ marginLeft: "20px" }}>Login</div>
            </Flex>
           
            <RouterLink to="/online">
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
                </RouterLink>
         
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  )
}