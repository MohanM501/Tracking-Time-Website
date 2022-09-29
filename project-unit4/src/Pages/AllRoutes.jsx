import {Routes,Route,Link} from "react-router-dom";
import React from "react";

import Home from "./Home";
import Login from "./Login";
import Features from "./Features";

function AllRoutes(){

   return (
      <Routes>
           <Route path="/" element={<Home/>}></Route>    
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/features/:id" element={<Features/>}></Route>
          
      </Routes>
   )

};
export default AllRoutes;