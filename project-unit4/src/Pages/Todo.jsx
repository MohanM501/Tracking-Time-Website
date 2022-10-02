import React from "react";
import { AuthContext } from "../AuthContext/AuthContext";
function Todo(){

   const [isLoading,setLoading]=React.useState(true);
   const {token}=React.useContext(AuthContext);
   React.useEffect(()=>{
       setTimeout(()=>{
        setLoading(false);
       },2000);
       
       
   },[])
   if(isLoading){
       return <h1>Loading...</h1>
   }

    return (
        <div>
              todo list
               <h1>Token:- {token}</h1>
            
        </div>
    )
}

export default Todo;