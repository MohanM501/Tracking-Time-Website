import { Flex, Select, Spacer, Button, Image, Box } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    useDisclosure,
    useControllableState,
    Link,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronDownIcon,HamburgerIcon,Icon} from "@chakra-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../AuthContext/AuthContext";



function Navbar() {
    const { ToggleAuth } = React.useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useControllableState({ defaultValue: "outline" })
    const [val, setVal] = useControllableState({ defaultValue: "solid" });
    const [del,setDel]=React.useState(false);

    

    const text=useBreakpointValue({
        base:"BASE",
        sm:"SMALL",
        md:"MEDIUM",
        lg:"LARGE",
        xl:{
            size:"XTRA LARGE"
        }
    })
    

    return (
        <Box style={{width:"100%",height:"70px",top:"0px",position:"sticky",backgroundColor:"lightgray"}}>
            <Flex  direction={{base:"column", md:"row",lg:"row"}} minWidth="2" height="10" py="1rem"  my={1} border="red">
            <Box  display={{sm:"block",base:"none"}} mx={20}  boxSize="sm">
                    <NavLink to="/"><Image height="30px" my={2} weight="30px" src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' alt='Dan Abramov' /></NavLink>
                    
                </Box>
                <Box mx={0} display={{sm:"none",base:"block"}} style={{display:"flex", alignItems:"center",justifyContent:"space-around",margin:"auto"}}  boxSize="sm">
                    <NavLink to="/"><Image mx={0} display={{base:"block",sm:"none"}} height="20px" weight="20px" src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' alt='Dan Abramov' /></NavLink>
                    <Box display={{sm:"none",base:"block"}}>
                    <Menu display={{sm:"none",base:"block"}} isOpen={isOpen}>
                        <MenuButton as={Button} onMouseEnter={onOpen}
                            onMouseLeave={onClose} rightIcon={<HamburgerIcon/>}>
                        </MenuButton>
                        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} >
                            <NavLink to="features/time-tracker"><MenuItem>Time Tracker</MenuItem></NavLink>
                            <NavLink to="features/project-management"><MenuItem>Project Management</MenuItem></NavLink>
                            <NavLink to="features/online-timesheet"><MenuItem>Online TimeSheet</MenuItem></NavLink>
                            <MenuItem>Time Cards</MenuItem>
                            <MenuItem>Attendance Tracking</MenuItem>
                            <MenuItem>Time Reporting</MenuItem>
                            <Button  fontSize={{base:"15px", md:"15px",lg:"15px"}} mx={2} px={{base:"4", md:"8",lg:"6"}}  colorScheme="red" variant={value} onMouseEnter={() => setValue("solid")} onMouseLeave={() => setValue("outline")} >TRY IT FREE</Button>
                            <NavLink to="login"><Button px={6} mx={2} colorScheme="red" variant={val} onMouseEnter={() => setVal("outline")} onMouseLeave={() => setVal("solid")} >LOG IN</Button></NavLink>
                        </MenuList>
                    </Menu>
                    </Box>
                </Box>
                <Spacer />
                <Button display={{sm:"block",base:"none"}} mx={{base:"8",md:"2",lg:"2"}} fontSize={{base:"15px", md:"15px",lg:"15px"}}pr={{sm:"60px"}}>INTEGRATION</Button>
                <Button display={{sm:"block",base:"none"}} mx={2} pr={{sm:"40px"}}>BLOG</Button>
                <Box display={{sm:"block",base:"none"}} mx={2}>
                    <Menu isOpen={isOpen}>
                        <MenuButton as={Button} onMouseEnter={onOpen}
                            onMouseLeave={onClose} rightIcon={<ChevronDownIcon />}>
                            FEATURES
                        </MenuButton>
                        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} >
                            <NavLink to="features/time-tracker"><MenuItem>Time Tracker</MenuItem></NavLink>
                            <NavLink to="features/project-management"><MenuItem>Project Management</MenuItem></NavLink>
                            <NavLink to="features/online-timesheet"><MenuItem>Online TimeSheet</MenuItem></NavLink>
                            <MenuItem>Time Cards</MenuItem>
                            <MenuItem>Attendance Tracking</MenuItem>
                            <MenuItem>Time Reporting</MenuItem>
                            
                        </MenuList>
                    </Menu>
                </Box>
                <Button display={{sm:"block",base:"none"}} fontSize={{base:"15px", md:"15px",lg:"15px"}} mx={2} pr={{base:"20px", md:"40px",lg:"55px"}}  colorScheme="red" variant={value} onMouseEnter={() => setValue("solid")} onMouseLeave={() => setValue("outline")} >TRY IT FREE</Button>
                <NavLink to="login"><Button display={{sm:"block",base:"none"}} px={6} mx={6} colorScheme="red" variant={val} onMouseEnter={() => setVal("outline")} onMouseLeave={() => setVal("solid")} >LOG IN</Button></NavLink>
                <Box mx={6}></Box>
                {/* <NavLink to="/login"><Button>HiLogin</Button></NavLink> */}
                {/* <Button onClick={()=>window.open("/login")}>check</Button> // for css link use Navlink Link won't work*/}
            </Flex>

        </Box>
    )

}

export default Navbar;

