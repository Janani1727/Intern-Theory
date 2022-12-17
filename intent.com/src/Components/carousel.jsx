import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Avatar,Box,Divider} from "@chakra-ui/react"

function Caro() {
  return (
    <div style={{height:"250px", backgroundColor:"#e4e2e3" , paddingTop:"40px" }} >
    <Carousel >
      <Carousel.Item interval={1700 } >
      <Box  mt={10} boxShadow='base' pt='6' border="1px solid gray" rounded='md' bg='white' width={"70%"} margin={"auto"}>
      <div style={{display:"flex" ,border:"0px solid gray",
    height:"120px"}}>
      
        <div style={{width:"30%",marginTop:"30px"}}>
            <Avatar src='https://assets.interntheory.com/img/testimonial-image/in2.jpg'></Avatar>
            <h2>Siddarth Viyappu</h2>
            <h5>Intern at Gooseberry Homes</h5>
        </div>
        <Divider width={"2px"} orientation='vertical' height='160px'/>
        <div style={{width:"70%",marginTop:"40px"}}>
            <p>"I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. 
                They've set the bars really high! Kudos team!"</p>
        </div>
       
      </div>

      </Box> 
      </Carousel.Item>
      {/* <Carousel.Item interval={1700}>
      <Box  boxShadow='2xl' border="1px solid gray" rounded='md' bg='white' width={"70%"} margin={"auto"}>
      <div style={{display:"flex" ,border:"0px solid gray",
    height:"120px"}}>
      
        <div style={{width:"30%",marginTop:"30px"}}>
            <Avatar src='https://assets.interntheory.com/img/testimonial-image/in4.jpg'></Avatar>
            <h2>Harshil Bhadra</h2>
            <h5>Intern at Porsche</h5>
        </div>
        <Divider width={"2px"} orientation='vertical' height='160px'/>
        <div style={{width:"70%",marginTop:"30px"}}>
            <p>"If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, 
                the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start."</p>
        </div>
       
      </div>
      </Box> 
      </Carousel.Item> */}
      <Carousel.Item  interval={1700}>
      <Box  border="1px solid gray" boxShadow='base' p='6' rounded='md' bg='white' width={"70%"} margin={"auto"}>
      <div style={{display:"flex" ,border:"0px solid gray",
    height:"120px"}}>
      
        <div style={{width:"30%",marginTop:"30px"}}>
            <Avatar src='https://assets.interntheory.com/img/testimonial-image/in3.jpg'></Avatar>
            <h2>Amani Nagda</h2>
            <h5>Intern at ViaCom18</h5>
        </div>
        <Divider width={"2px"} orientation='vertical' height='160px'/>
        <div style={{width:"70%",marginTop:"40px"}}>
            <p>"I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through.
                 I thank Intern Theory team for giving me this opportunity."</p>
        </div>
       
      </div>
      </Box> 
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Caro;