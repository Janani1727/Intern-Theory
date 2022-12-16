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
  
  } from '@chakra-ui/react';
  import { FaHome,FaShoppingBag,FaList ,FaChartArea,FaPhoneAlt,FaDoorOpen,FaAlignLeft,FaAlignCenter} from 'react-icons/fa';

  import Images from "../Images/Add.png"

  import { HamburgerIcon} from '@chakra-ui/icons';
 import {Link as RouterLink} from "react-router-dom"

 export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = React.useRef()
  
    return (
      <>

<HamburgerIcon  onClick={onOpen} color="black" mt={5} ml={5}  boxSize={10} />
        
        <Drawer
          isOpen={isOpen}
          placement='left'
        >
          <DrawerOverlay />
          <DrawerContent>
         
            <HamburgerIcon boxSize={10} ml={5} mt={"10px"} onClick={onClose} />
            <Image  src={Images} h={20} ml={"60px"} mt={"-60px"} width={"100px"}/>

            <DrawerHeader>
              <RouterLink to="./">
                <Flex marginTop={5} >
                    <div style={{marginTop:"5px" ,color:"grey" }}><FaHome/></div> 
                    <div style={{marginLeft:"20px"}}>Home</div>
                </Flex>
                </RouterLink>
               
                <RouterLink to="/internship">
                <Flex marginTop={5}>
                    <div style={{marginTop:"5px",color:"grey" }}><FaList/></div> 
                    <div style={{marginLeft:"20px"}}>InternShip</div>
                </Flex>
                </RouterLink>

                <Flex marginTop={5}>
                    <div style={{marginTop:"5px" ,color:"grey"}}><FaShoppingBag/></div> 
                    <div style={{marginLeft:"20px"}}>Jobs</div>
                </Flex>
                <Flex marginTop={5}>
                    <div style={{marginTop:"5px" ,color:"grey"}}><FaAlignCenter/></div> 
                    <div style={{marginLeft:"20px"}}>Post InternShip</div>
                </Flex>
                <Flex marginTop={5}>
                    <div style={{marginTop:"5px" ,color:"grey"}}><FaChartArea/></div> 
                    <div style={{marginLeft:"20px"}}>Courses</div>
                </Flex>
                <Flex marginTop={5}>
                    <div style={{marginTop:"5px",color:"grey" }}><FaPhoneAlt/></div> 
                    <div style={{marginLeft:"20px"}}>Contact Us</div>
                </Flex>
                  <div style={{border:"0.1px solid grey" ,marginTop:"10px"}}></div>
                  
                <Flex marginTop={5}>
                    <div style={{marginTop:"5px",color:"grey" }}><FaAlignLeft/></div> 
                    <div style={{marginLeft:"20px"}}>Register</div>
                </Flex>

                <Flex marginTop={5}>
                    <div style={{marginTop:"5px",color:"grey" }}><FaDoorOpen/></div> 
                    <div style={{marginLeft:"20px"}}>Login</div>
                </Flex>
            </DrawerHeader>
          </DrawerContent>
         
          
        </Drawer>
      </>
    )
  }