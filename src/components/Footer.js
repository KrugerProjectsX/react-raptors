import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <footer className={'bg-white shadow-2xl shadow-gray-950'} style={{padding: '2rem 0', marginTop: 'auto' }}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" component="p">
                Este es un pie de página de ejemplo utilizando Material-UI.
            </Typography>
            <Typography variant="body2" color="inherit" align="center">
                <Link color="inherit" href="#">
                    Link 1
                </Link>{' '}
                {' | '}
                <Link color="inherit" href="#">
                    Link 2
                </Link>{' '}
                {' | '}
                <Link color="inherit" href="#">
                    Link 3
                </Link>
            </Typography>
        </footer>
    );
}

export default Footer;
