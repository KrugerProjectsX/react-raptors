import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MySVG from "../img/logo-no-background.png";
import UserInfoDropdown from "./UserInfo";

function Navbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={'bg-white'}>
                    <div className={'flex items-center m-4'}>
                        <img className="pointer-events-none my-auto w-24 lg:w-40 md:w-32" src={MySVG} alt="My SVG"/>

                    </div>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    </Typography>
                    <div className={'flex items-center justify-center mr-2'}>
                        <Button className={'text-secondary'}>Home</Button>
                        <Button className={'text-secondary'}>My Flats</Button>
                        <Button className={'text-secondary'}>Favourites</Button>
                    </div>
                    <UserInfoDropdown/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
