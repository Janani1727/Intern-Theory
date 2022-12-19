import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    Image,
    SimpleGrid,
    Box,
    Input
    
   
  } from '@chakra-ui/react';

  import Caro from "../Components/carousel"
  export default function Home() {
    return (
        <>
      <Flex
        w={'full'}
        h={'60vh'}
        backgroundImage={
          'url(https://assets.interntheory.com/creative/Homepage-Banner.png)'
        }
        backgroundSize={'cover'}
        // backgroundPosition={'center center'}
        // opacity={"0.6"}
        backgroundColor={"rgb(68, 100, 120)"}
       >
    
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, blur)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              textAlign="center"
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}>
              Let's Get You Ready
              
            </Text>

            <Text
              color={'white'}
              fontWeight={100}
            //   lineHeight={1.2}
            //   fontSize={useBreakpointValue({ base: '1xl', md: '4xl' })}
            >
           The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An Internship. Get Placed
              
            </Text>

            <div  style={{display:"flex",marginBottom:"50px", height:"80px",width:"100%",boxShadow:"dark-lg"}}>
        <Input  marginLeft={"120px"} marginTop={"10px"} width={"18%"} variant='flushed' placeholder='Cities..' />
        <Input marginLeft={"20px"} marginTop={"10px"}  width={"18%"} variant='flushed' placeholder='Type..' />
        <Input  marginLeft={"20px"}  marginTop={"10px"}width={"18%"} variant='flushed' placeholder='Preferences..' />
        <p style={{marginLeft:"10px",marginTop:"25px"}}> OR</p>
        <Input  marginLeft={"10px"}marginTop={"10px"} width={"18%"} variant='flushed' placeholder='Search..' />  
        <button style={{marginTop:"10px",height:"40px", color:"white",width:"100px",border:"#087cdd",backgroundColor:"#087cdd",borderRadius:"5px"}}>Search</button>
 </div>
            
          </Stack>
        </VStack>
      </Flex>

      <div style={{
        // border:"0px solid black",
        height:"500px",
        display:"flex",
        width:"90%",
        margin:"auto"
        }}>
        <div style={{
        // border:"1px solid red",
        width:"50%",margin:"auto",
        marginLeft:"10px"
    }}>
        <div style={{display:"flex",
                fontSize:"32px" ,
                fontWeight:"500" 
    }}>
        <h1>PLETHORA OF OPPORTUNITIES </h1>
        <h1 style={{color:"red", marginLeft:"18px"}}>FOR YOU</h1>
        </div>
        <div style={{border:"0.5px solid #A0AEC0",width:"600px",backgroundColor:"gray"}}></div>
        <div style={{width:"690px"}}>
        <p style={{textAlign:"left"}}>We are on a mission to connect employers to young talent all over India. With our strong corporate network, it will no longer be a challenge to find the right internship for you</p>
        </div>  
        </div>

        <div style={{
        // border:"1px solid red",
        width:"50%"
    }}>
   
<SimpleGrid columns={[4, null, 4]} spacing='10px' py={10} ml={12}>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-1.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-2.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-3.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-6.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-7.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-8.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-8.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-10.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-11.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-12.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-14.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-13.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-14.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-15.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-16.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-17.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-18.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-19.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-20.png'></Image>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-21.png'></Image>
  <Image src=''></Image>

</SimpleGrid>
    </div>
      </div>
     

        <Box bg={'#f7fcfe'} h={'650px'} py={20}>
            <Flex ml={"450px"} mb={5}>
            <Text fontSize={35} fontWeight={600}>LET’S GET SOME </Text> 
            <Text fontSize={35} fontWeight={600} color={'red'} ml={'20px'}> WORK EXPERIENCE</Text>
           
            </Flex>
            
<SimpleGrid columns={[2, null, 4]} spacing='10px' width={'80%'} margin={'auto'}>
  <Image src='https://assets.interntheory.com/creative/home-internships/Marketing-Icon.jpg'></Image>
  <Image src='https://assets.interntheory.com/creative/home-internships/BD.jpg'></Image>
  <Image src='https://assets.interntheory.com/creative/home-internships/Content-Writing.jpg'></Image>
  <Image src='https://assets.interntheory.com/creative/home-internships/Graphic.jpg'></Image>
  <Image src='https://assets.interntheory.com/creative/home-internships/Finance.jpg'></Image>
  <Image src='https://assets.interntheory.com/creative/home-internships/HR.jpg'></Image>
  <Image src='https://assets.interntheory.com/creative/home-internships/Eng.jpg'></Image>
  <Image src='https://assets.interntheory.com/creative/home-internships/All-Internships.jpg'></Image>
</SimpleGrid>
</Box>

<Box bg={'#e4e2e3'} h={'400px'} py={5} >
            <Flex ml={"550px"} mb={5}>
            <Text fontSize={35} fontWeight={600}>HOW ABOUT </Text> 
            <Text fontSize={35} fontWeight={600} color={'red'} ml={'20px'}> UPSKILLING ?</Text>
           
            </Flex>
            
<SimpleGrid columns={[1, null, 3]} spacing='10px' width={'80%'} margin={'auto'}>
  <Image src='https://assets.interntheory.com/creative/home-courses/Homepage-stock.jpg'></Image>
  <Image src='	https://assets.interntheory.com/creative/home-courses/Homepage-digital.jpg'></Image>
  <Image src=' https://assets.interntheory.com/creative/home-courses/Homepage-web.jpg'></Image>
</SimpleGrid>
</Box>

<div style={{
        // border:"0px solid black",
        height:"400px",
        display:"flex",
        width:"90%",
        margin:"auto"
        }}>
     
        <div style={{
        // border:"1px solid red",
        width:"50%"
    }}>
   
<SimpleGrid columns={[4, null, 4]} spacing='10px' py={10} ml={12}>
 
  
  <img src="https://assets.interntheory.com/creative/chart.png" style={{maxWidth:"230%" ,marginLeft:"150px"}} alt="" />

</SimpleGrid>


    </div>

    <div style={{
        // border:"1px solid red",
        width:"50%",margin:"auto",
        marginLeft:"50px"
    }}>
        <div style={{display:"flex",
                fontSize:"30px" ,
                fontWeight:"600" 
    }}>
        <h1>WE ARE CONSTANTLY </h1>
        <h1 style={{color:"red", marginLeft:"12px"}}>GROWING</h1>
        </div>
        <div style={{border:"0.5px solid #A0AEC0",width:"600px",backgroundColor:"gray"}}></div>
        <div style={{width:"690px"}}>
        <p style={{textAlign:"left"}}>We are on a mission to help every student in India. Upgrading your CV and getting you a meaningful job remains our sole motive and we are not stopping anytime soon</p>
        </div>  
        </div>

      </div>
{/* 
<Box  boxShadow='2xl' p='6' rounded='md' bg='white' width={"70%"} margin={"auto"}>
      <div style={{display:"flex" ,border:"0px solid gray",
    height:"120px"}}>
      
        <div style={{width:"30%",marginTop:"30px"}}>
            <Avatar src='https://assets.interntheory.com/img/testimonial-image/in2.jpg'></Avatar>
            <h2>Siddarth Viyappu</h2>
            <h5>Intern at Gooseberry Homes</h5>
        </div>
        <Divider width={"2px"} orientation='vertical' height='160px'/>
        <div style={{width:"70%",marginTop:"50px"}}>
            <p>"I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. 
                They've set the bars really high! Kudos team!"</p>
        </div>
       
      </div>

      </Box> 

      <Box  boxShadow='2xl' p='6' rounded='md' bg='white' width={"70%"} margin={"auto"}>
      <div style={{display:"flex" ,border:"0px solid gray",
    height:"120px"}}>
      
        <div style={{width:"30%",marginTop:"30px"}}>
            <Avatar src='https://assets.interntheory.com/img/testimonial-image/in4.jpg'></Avatar>
            <h2>Harshil Bhadra</h2>
            <h5>Intern at Porsche</h5>
        </div>
        <Divider width={"2px"} orientation='vertical' height='160px'/>
        <div style={{width:"70%",marginTop:"50px"}}>
            <p>"If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, 
                the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start."</p>
        </div>
       
      </div>
      </Box> 
      <Box  boxShadow='2xl' p='6' rounded='md' bg='white' width={"70%"} margin={"auto"}>
      <div style={{display:"flex" ,border:"0px solid gray",
    height:"120px"}}>
      
        <div style={{width:"30%",marginTop:"30px"}}>
            <Avatar src='https://assets.interntheory.com/img/testimonial-image/in3.jpg'></Avatar>
            <h2>Amani Nagda</h2>
            <h5>Intern at ViaCom18</h5>
        </div>
        <Divider width={"2px"} orientation='vertical' height='160px'/>
        <div style={{width:"70%",marginTop:"50px"}}>
            <p>"I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through.
                 I thank Intern Theory team for giving me this opportunity."</p>
        </div>
       
      </div>
      </Box> */}

      <Caro />
  

</>
    );
  }

 