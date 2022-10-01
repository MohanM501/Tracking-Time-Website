import {createContext,useState} from 'react';

export const AuthContext=createContext();
function AuthContextProvider({children}){
      const [isAuth,setAuth]=useState(false);
      const [token,setToken]=useState("");
      const ToggleAuth=()=>{
          setAuth(!isAuth);
      }

      return <AuthContext.Provider value={{isAuth,setAuth,ToggleAuth,token,setToken}}>{children}</AuthContext.Provider>
}
export default AuthContextProvider;

// Day-4