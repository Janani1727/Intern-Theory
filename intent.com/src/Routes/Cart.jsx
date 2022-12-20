import { FaTimesCircle } from "react-icons/fa"


import { Box, Text, Card, Image, Stack, Heading, Button, CardBody, CardFooter, Flex, background } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react"

const fetchdata = () => {

  return axios.get(`http://localhost:3000/cart`);
}


const Handledel=(id)=>{
  console.log(id)
 


    axios.delete(` http://localhost:3000/cart/${id}`)
    .then((response) => {
      
     console.log("response",response.data)

     window.location.reload(true)
    })
};
// http://localhost:3000/cart/${id}

const empcart=(e)=>{
  axios.delete(` http://localhost:3000/cart`)
    .then((response) => {
      
     console.log("response",response.data)

    //  window.location.reload(true)
    })
}

export default function Cart(e) {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchdata().then((res) => setData(res.data))

  }, [])
  console.log(data)

  return (
    <div style={{ border: "1px solid black", backgroundColor: "#f8f8f8 ", marginBottom: "100px",margin: "auto", }}>
      <>
        <div style={{ border: "0px solid red", height: "auto", width: "65%", margin: "auto", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
          {data.map((e) => (
            <>
              <div style={{ border: "0px solid black", display: "flex", height: "130px", width: "100%" }}>
                <div style={{ border: "0px solid red", width: "100%", display: "flex" }}>
                  <Box color={"#df1e2e "} width={"50px"} height={"50px"} padding={2.5} borderRadius={"50%"} marginLeft={"5px"} marginTop={"15px"}
                    _hover={{
                      backgroundColor: "gray.300"
                    }}
                    fontSize={"30px"}

                    onClick={()=>Handledel(e.id)}
                  >
                    <FaTimesCircle />
                  </Box>

                  <img src={e.image} style={{ width: "150px", height: "70px", marginLeft: "20px", marginTop: "15px" }} alt="" />

                  <Text fontSize={"20px"} marginLeft={"18px"} marginTop={"15px"} fontWeight={"bold"}>{e.title}</Text>
                  <Text fontSize={"16px"} marginLeft={"318px"} textDecorationLine={"line-through"} marginTop={"35px"}>₹ 50000</Text>

                  <Text    fontSize={"18px"} fontWeight={"bold"} marginTop={"35px"}>{e.price}</Text>
                      
                      {/* <Button    onClick={()=>empcart(e.id)}>del</Button> */}

                </div>

              </div>


              <div style={{ border: "0.2px dashed grey" }}></div>
              <Flex ml={"700px"} fontSize={"16px"}  gap={"100px"} mt={"10px"}>
            <Text > Amount</Text>
           <Text>{e.price}</Text>
            </Flex>


            </>

          ))}
           
            {/* <Flex ml={"700px"} fontSize={"16px"}  gap={"100px"} mt={"10px"}>
            <Text > Amount</Text>
           <Text>{e.price}</Text>
            </Flex> */}
            <div style={{ border: "0.2px solid grey",width:"300px",marginLeft:"690px" }}></div>
            
            
            <Flex ml={"700px"}  fontSize={"16px"}  gap={"100px"} mt={"10px"}>
            <Text>SGST 9%</Text>
           <Text>₹ 1710</Text>
            </Flex>
            {/* <div style={{ border: "0.2px dashed grey" }}></div> */}
            <div style={{ border: "0.2px solid grey",width:"300px",marginLeft:"690px" }}></div>



          <Flex gap={"20px"} ml={"700px"} mt={"10px"}>
               <RouterLink to={'/Checkout'}>
            <Button backgroundColor={"#df1e2e"} color={"white"}
              _hover={{
                bg: 'red.700',
              }}
            >CHECKOUT</Button>
            </RouterLink>
            <Button backgroundColor={"#df1e2e"} color={"white"}
              _hover={{
                bg: 'red.700',
              }}
              // onClick={()=>empcart(e.id)}

            >EMPTY CART</Button>
          </Flex>
        </div>
      </>
    </div>
  )

}

