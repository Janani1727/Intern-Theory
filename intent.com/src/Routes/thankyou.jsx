import {Image} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"
export default function Thank(){
    return(
        <RouterLink to="/">
        <div style={{width:"500px",height:"500px",margin:"auto"}}>
        <Image src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png"/>
        </div>
        </RouterLink>
    )
}