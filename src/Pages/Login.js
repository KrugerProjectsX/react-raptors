import React, {useRef, useState} from "react";
import {Box, Button, TextField, CircularProgress, IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {db} from '../firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import MySVG from "../img/logo-no-background.png";
import LoginIcon from '@mui/icons-material/Login';
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export default function Login() {
    const email = useRef("");
    const password = useRef("");
    const usersRef = collection(db, 'users');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const login = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const search = query(usersRef, where('email', '==', email.current.value));
            const result = await getDocs(search);

            if (result.docs.length > 0) {
                const user = result.docs[0].data();
                const user_id = result.docs[0].id;

                if (user.password === password.current.value) {
                    console.log('Login success');
                    console.log('Redirect');
                    localStorage.setItem('user_logged', JSON.stringify(user_id));
                    navigate('/home', {replace: true});
                } else {
                    setError('Email or Password incorrect');
                }
            } else {
                setError('Email or Password incorrect');
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            setError('An error occurred during login');
        }

        setIsLoading(false);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <div className={'flex justify-center'}>
                    <img className="w-80" src={MySVG} alt="My SVG"/>
                </div>
                <Box component='form' onSubmit={login} className="bg-white p-8 rounded shadow-md">
                    {error && <p className="text-error mt-2 mb-4">{error}</p>}
                    <TextField
                        label="Email"
                        inputRef={email}
                        className="w-full mb-4"
                        variant="outlined"
                        type="email"
                        required
                    />
                    <TextField
                        label="Password"
                        inputRef={password}
                        className="w-full mb-4"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword} edge="end">
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isLoading}
                        className="w-full text-white bg-primary hover:bg-primary2">
                        {isLoading ? <CircularProgress size={24} color="inherit"/> : 'Login'}
                        <LoginIcon/>
                    </Button>
                    <div className="mt-4 text-center">
                        <p>You don't have an account yet,
                        <Link to="/register" className="underline text-secondary hover:text-secondaryHover">
                            <span> register</span>
                        </Link> here.</p>
                    </div>
                </Box>
            </div>
        </div>

    );
}
