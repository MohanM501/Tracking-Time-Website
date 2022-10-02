import {Routes,Route,Link} from "react-router-dom";
import React from "react";

import Home from "./Home";
import Login from "./Login";
import Features from "./Features";
import Todo from "./Todo";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes(){

   return (
      <Routes>
           <Route path="/" element={<Home/>}></Route>    
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/features/:id" element={<Features/>}></Route>
           <Route path="/todo" element={<PrivateRoute><Todo/></PrivateRoute>}></Route>
      </Routes>
   )

};
export default AllRoutes;