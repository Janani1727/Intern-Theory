import Home from "../Routes/Home";
import Contact from "../Routes/contact";
import Internship from "./Internship";
import { Routes,Route } from "react-router-dom"

export default function AllRoutes(){
    return(
<Routes>
    <Route path="/" element={<Home/>} />
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/internship" element={<Internship/>}/>
</Routes>
    )
}

