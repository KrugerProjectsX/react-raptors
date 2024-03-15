import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MySVG from "../img/logo-no-background.png";
import IconButton from "@mui/material/IconButton";

function Footer() {
    return (
        <footer className={'bg-white shadow-2xl shadow-gray-950'} style={{padding: '2rem 0', marginTop: 'auto' }}>
            <div className={'flex justify-center'}>
            <IconButton
                size="large"
                aria-label="menu"
                sx={{mr: 2}}
                disabled={true}
            >
                <img className="w-40" src={MySVG} alt="My SVG"/>
            </IconButton>
            </div>
             <Typography variant="subtitle1" align="center" component="p">
                © 2024 Kruger School X. All rights reserved.
            </Typography>
            <Typography variant="body2" color="inherit" align="center">
                <Link color="inherit" href="#">
                    Home
                </Link>{' '}
                {' | '}
                <Link color="inherit" href="#">
                    My Flats
                </Link>{' '}
                {' | '}
                <Link color="inherit" href="#">
                    Favourites
                </Link>
            </Typography>
        </footer>
    );
}

export default Footer;
