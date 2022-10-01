import { AuthContext } from "../AuthContext/AuthContext";
import React from "react";
import { Container, Button, Box, ButtonGroup, Input,Checkbox } from "@chakra-ui/react";
import { FaGoogle, FaMicrosoft, FaApple } from "react-icons/fa";
import {Link,NavLink,Navigate} from "react-router-dom";
import "./Login.Module.css";
import axios from "axios";
import { Form } from "react-router-dom";
import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'


const getResponse=(data={})=>{
  return axios.post(`https://reqres.in/api/login`,{
    email:data.email,
    password:data.password
  });
}


function Login() {
  const { isAuth,setAuth, ToggleAuth,token,setToken } = React.useContext(AuthContext)
  const [change,setChange]=React.useState(false);
  const [isLoading,setLoading]=React.useState(true);
  const [form,setForm]=React.useState({
    email:"",
    password:""
  })
  // loading purpose
  const id=setTimeout(()=>{
    setLoading(false);
  },2000)
  if(isLoading){
    return (<h1>Loading...
      <Container> <img width="200px" height="200px" src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg" alt="logo" /></Container>
    </h1>)
  }
  //console.log(isLoading,"isLoading in login");
  // onChange
  const handleChange=(e)=>{
      console.log(e.target.value,"target");
      const {name,value}=e.target;
      setForm({...form,[name]:value})

  }
  console.log(token,"token")
  console.log(isAuth,"isAuth_before") 
  //Post
  const handleSubmit=()=>{
    console.log(form,"form")
       getResponse(form).then((res)=>{console.log(res.data,"res")
          let {token}=res.data;
          if(token!==undefined){
            setToken(token)
            setAuth(true)
            console.log(isAuth,"isAuth_after")
            
          }
      })
       .catch((error)=>{console.log(error,"error");alert("Wrong Details")
      })
  }
  if(isAuth){
     return (<Navigate to="/todo"></Navigate>);
  }

  return (

    <div style={{ display: "flex", height:"625px",width:"100%" }}>
 
     <img width="50%" src="https://agenciaefe.es/wp-content/uploads/2022/03/Logo_EFE-escuela.jpg" alt="Image" />
      
      <Container className="log" >
        
        <Box ml="150px" mt="40px">
          <img width="200px" height="200px" src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg" alt="logo" />
        </Box>
        <Box ><Button leftIcon={<FaGoogle color="green" />} colorScheme="gray" size="lg">Sign in with Google</Button></Box>
        <Box ><Button leftIcon={<FaMicrosoft color="green" />} colorScheme="gray" size="lg">Sign in with Google</Button></Box>
        <Box ><Button leftIcon={<FaApple color="green" />} colorScheme="gray" size="lg">Sign in with Google</Button></Box>
        <h4>Sign in with your Email</h4>
        <Box><Input name="email" value={form.email} onChange={handleChange} size="lg" width="250px" type="email" placeholder="Email" /></Box>
        <Box><Input name="password" value={form.password} onChange={handleChange} size="lg" width="250px" type="password" placeholder="Password" /></Box>
        {change===false?<Box fontSize="12px"> Forgot Your Password?Retrieve</Box>:<Box><Checkbox>I agree to terms {"&"} Conditions</Checkbox></Box>}
        
         {change===false?<Button onClick={handleSubmit}width="250px"colorScheme="purple" size="lg">Log In</Button>:<Button width="250px"colorScheme="purple" size="lg">SignUp</Button>}
         <Box margin="10px">
           {change===false?<Box onClick={()=>{setChange(true)}}>Don't  have Account? <u>SignUp</u> </Box>:<Box onClick={()=>{setChange(false)}}>Already have Account? <u>LogIn</u> </Box>}
         </Box>
        <Box><u>Terms of service</u>/<u>Privacy Policy</u></Box>
       
      </Container>

    </div>
  )

}
export default Login;