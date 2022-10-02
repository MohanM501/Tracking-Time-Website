import React from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

function PrivateRoute({children}){
   const {isAuth}=React.useContext(AuthContext);
   if(isAuth===false){
      return <Navigate to="/"/>
   }
   return children;
}

export default PrivateRoute;