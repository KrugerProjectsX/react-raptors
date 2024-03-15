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
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <img className="w-40" src={MySVG} alt="My SVG"/>

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    </Typography>
                    <Button className={'text-secondary'}>Home</Button>
                    <Button className={'text-secondary'}>My Flats</Button>
                    <Button className={'text-secondary'}>Favourites</Button>
                    <UserInfoDropdown/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
