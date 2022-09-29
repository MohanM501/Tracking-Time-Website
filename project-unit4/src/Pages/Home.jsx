import Navbar from "../Components/Navbar";
import AllRoutes from "./AllRoutes";
import {Link,Navigate} from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import React, { useEffect } from "react";
import {bgGradient,Box,bgColor} from "@chakra-ui/react";
function Home(){
    const {isAuth}=React.useContext(AuthContext);
  console.log(isAuth,"isAuth in Home")
 
    return (
        <div>
         <Navbar/>
      
        </div>  
    )
}
export default Home;