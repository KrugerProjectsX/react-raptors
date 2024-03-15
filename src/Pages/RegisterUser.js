import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection, query, where, addDoc } from 'firebase/firestore';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MySVG from '../img/logo-no-background.png';
import { Alert, AlertTitle, Button, Fade, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { teal } from '@mui/material/colors';
import AlertOk from "../components/AlertOk";
import AlertErr from "../components/AlertErr";

function RegisterUser() {
    const colorAlertOk = teal[400];
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordR, setShowPasswordR] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleShowPasswordR = () => setShowPasswordR(!showPasswordR);

    const navigate = useNavigate();
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const birthRef = useRef('');
    const passwordRef = useRef('');
    const ref = collection(db, "users");
    const [open, setOpen] = useState(false);
    const [openErr, setOpenErr] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            birth: birthRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            await addDoc(ref, userData);
            setOpen(true);
            setTimeout(() => {
                navigate('/', { replace: false });
            }, 2500);

        } catch (error) {
            console.error("Error al insertar datos:", error);
            setOpenErr(true);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setOpenErr(false), 1800);
        return () => clearTimeout(timer);
    }, [openErr]);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(false), 1800);
        return () => clearTimeout(timer);
    }, [open]);

    return (
        <div className="container m-auto">
            <Fade in={openErr} timeout={2}>
                <div>
                    <AlertErr msg="Failed to register user"/>
                    <AlertOk msg="User registered, please login"/>
                </div>
            </Fade>

            <Fade in={open} timeout={2}>
                <div>
                    <AlertOk msg="User registered, please login"/>
                </div>
            </Fade>

            <div className="p-8 bg-white">
                <div className="flex justify-center items-center">
                    <img className="w-44" src={MySVG} alt="logo"/>
                </div>

                <form onSubmit={handleSubmit} className="lg:px-48 mx-auto w-full justify-center items-center">
                    <Typography variant="h6" className="mt-6 text-sm lg:text-2xl font-bold mb-6">Create an Account</Typography>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">First Name</label>
                            <TextField id="firstName" type="text" name="firstName" variant="outlined" placeholder="" inputRef={firstNameRef} fullWidth required/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">Last Name</label>
                            <TextField id="lastName" type="text" name="lastName" variant="outlined" placeholder="" inputRef={lastNameRef} fullWidth required/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="passwordInput">Password</label>
                            <TextField
                                name="password"
                                className="w-full mb-4"
                                variant="outlined"
                                type={showPassword ? "text" : "password"}
                                inputRef={passwordRef}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPassword} edge="end">
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                required
                            />
                            <p className="mb-4 text-gray-600 text-xs italic">Make sure that the password contains more than 8 characters, including normal, numeric and special characters (a,b,c,d,A,B,C,D,1,2,4,5,#,$,%,&; etc. ..)</p>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password_repeat">Repeat Password</label>
                            <TextField
                                className="w-full mb-4"
                                variant="outlined"
                                type={showPasswordR ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPasswordR} edge="end">
                                                {showPasswordR ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                required
                            />
                            <p className="text-gray-600 text-xs italic">Repeat the password you wrote.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">E-mail</label>
                            <TextField id="email" type="email" name="email" variant="outlined" inputRef={emailRef} placeholder="useremail@example.com" fullWidth required/>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="birth">Birth</label>
                            <TextField id="birth" type="date" name="birth" variant="outlined" inputRef={birthRef} fullWidth required/>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center text-center">
                        <Button type="submit" className="rounded-xl w-1/2 text-white bg-primary hover:bg-primaryHover">Register <PersonAddAltIcon/></Button>
                    </div>

                    <div className="mt-8 flex items-center justify-center text-center">
                        <Link to="/" className="hover:underline text-secondary hover:text-secondaryHover flex items-center">
                            <span>Go back</span> <ReplyAllIcon/>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterUser;
