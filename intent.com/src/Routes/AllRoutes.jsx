import Home from "../Routes/Home";
import Contact from "../Routes/contact";
import Internship from "./Internship";
import Online from "./online"
import Offline from "./offline";
import { Routes,Route } from "react-router-dom"
import Jobs from "./Jobs";
import RegisterStudent from "./RegisterStudent";
import RegisterCompany from "./RegisterCompany";
import LoginStudent from "./LoginStudent"
import LoginCompany from "./LoginCompany";
import Cart from "./Cart"
import Checkout from "./Checkout"



export default function AllRoutes(){
    return(
 <Routes>
    <Route path="/" element={<Home/>} />
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/internship" element={<Internship/>}/>
    <Route path="/jobs" element={<Jobs/>}/>
    <Route  path="/online" element={<Online/>}/>
    <Route path="/offline" element={<Offline/>} />
    <Route  path="/registerstudent" element={<RegisterStudent/>}/>
    <Route  path="/registercompany" element={<RegisterCompany/>}/>
    <Route  path="/logincompany" element={<LoginCompany/>}/>
    <Route  path="/loginstudent" element={<LoginStudent/>}/>
    
    <Route  path="/Cart" element={<Cart/>}/>
    <Route  path="/checkout" element={<Checkout/>}/>
 </Routes>
    )
}

