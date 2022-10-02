
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import {bgGradient,Box,bg} from "@chakra-ui/react";

import Home from './Pages/Home';


function App() {
  return (
    <div className="App"  >
     
      <Box>
          {<AllRoutes/>}
      </Box>
      
    </div>
  );
}

export default App;
