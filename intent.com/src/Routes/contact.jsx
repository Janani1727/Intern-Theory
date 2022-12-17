import { Heading, Input} from "@chakra-ui/react"
import { Button } from "react-bootstrap"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
export default function Contact(){
    return(
    
        <>
        <div style={{display:"flex",width:"100%" ,height:"700px", padding:"100px"}}>
        <div style={{width:"50%",border:"0px solid gray"}}>
            <Heading textAlign={"left"} fontSize={"50px"} fontWeight={"400"}>Contact</Heading>
            <p style={{textAlign:"left" ,fontSize:"18px",color:"gray" }}>Have something to say? Give us a holler through any one of the ways below, and we’ll get back within 24 hours. On a side note, like the rest around us, we have fallen victims to Social Media.
                 Feel free to get in touch on Facebook, LinkedIn or Instagram anytime!</p>
                 <Input  marginTop={8} variant='flushed' placeholder='Email Address' />
                 <Input  marginTop={8} variant='flushed' placeholder='Mobile No' />
                 <Input   marginTop={8} variant='flushed' placeholder='Subject' />
                 <Input  marginTop={8} variant='flushed' placeholder='Message' />
            <button style={{width:"100px",color:"white", height:"0px",backgroundColor:"#df1e2e", borderRadius:"10px" ,marginTop:"20px"}}>submit</button>
        </div>
        <div style={{width:"50%",border:"1px solid red"}}>

        <div >
            {/* <div >
                <iframe  style={{width:"100%",height:"200%",frameborder:"0", scrolling:"no", marginheight:"0" ,marginwidth:"0"}} src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
            </div> */}
        </div>

        </div>
        </div>

        <button></button>
        <Button> <FaFacebook /></Button>
        <Button > <FaTwitter /></Button>
        <Button > <FaLinkedin /></Button>

        </>
    
    )
}