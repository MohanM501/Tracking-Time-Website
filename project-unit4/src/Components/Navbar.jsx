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
} from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex py="1rem" my={1}>
            <Box mx={20} boxSize="sm">
                <Image  height="40px" weight="40px" src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' alt='Dan Abramov' />
            </Box>
            <Spacer />
            <Button mx={2}>INTEGRATION</Button>
            <Button mx={2}>BLOG</Button>
            <Box mx={2}>
                <Menu isOpen={isOpen}>
                    <MenuButton as={Button} onMouseEnter={onOpen}
                        onMouseLeave={onClose} rightIcon={<ChevronDownIcon />}>
                        FEATURESE
                    </MenuButton>
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <MenuItem>Time Tracker</MenuItem>
                        <MenuItem>Project Management</MenuItem>
                        <MenuItem>Online TimeSheet</MenuItem>
                        <MenuItem>Time Cards</MenuItem>
                        <MenuItem>Attendance Tracking</MenuItem>
                        <MenuItem>Time Reporting</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Button mx={2}>TRY IT FREE</Button>
            <Button px={6} mx={2}>LOG IN</Button>
            <Box mx={8}></Box>
        </Flex>
    )

}

export default Navbar;