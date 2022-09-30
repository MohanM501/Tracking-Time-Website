import {createContext,useState} from 'react';

export const AuthContext=createContext();
function AuthContextProvider({children}){
      const [isAuth,setAuth]=useState(true);
      const ToggleAuth=()=>{
          setAuth(!isAuth);
      }

      return <AuthContext.Provider value={{isAuth,ToggleAuth}}>{children}</AuthContext.Provider>
}
export default AuthContextProvider;

// Day-4