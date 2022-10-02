import Navbar from "../Components/Navbar";
import AllRoutes from "./AllRoutes";
import {Link,Navigate} from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import React, { useEffect } from "react";
import {bgGradient,Box,bgColor} from "@chakra-ui/react";
import MainPage from "./MainPage";
import Footer from "../Components/Footer";
function Home(){
  
 
    return (
        <div>
         <Navbar/>
         <MainPage/>
         <Footer/>
        </div>  
    )
}
export default Home;