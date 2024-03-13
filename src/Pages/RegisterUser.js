import React, {useState} from 'react';
import {db} from '../firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';
import {Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MySVG from '../img/logo-no-background.png';

function RegisterUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleRegister = async (collectionName, data) => {

        try {
            const docRef = await db.collection(collectionName).add(data);
            console.log("Documento agregado con ID: ", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Error al agregar documento: ", error);
            throw error; // Puedes manejar el error de acuerdo a tus necesidades
        }
    };

    return (
        <div className="container m-auto">
            <div className="container mx-auto p-8 bg-white rounded-xl shadow-xl">
                <div className="flex justify-end items-end text-2xl">
                    <Link to="/"
                          className="text-red-950 rounded-full p-2 hover:scale-110 cursor-pointer transition-transform">
                        <CloseIcon/>
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-80" src={MySVG} alt="My SVG"/>
                </div>

                {/* Profile Form */}
                <form id="registrationForm" className="lg:px-48 mx-auto w-full justify-center items-center">
                    <Typography variant="h6" className="mt-6 text-sm lg:text-2xl font-bold mb-6">Create an
                        Account</Typography>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="firstName">First Name</label>
                            <TextField id="firstName" type="text" name="name" variant="outlined" placeholder=""
                                       fullWidth required/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="lastName">Last Name</label>
                            <TextField id="lastName" type="text" name="lastname" variant="outlined" placeholder=""
                                       fullWidth required/>
                        </div>
                    </div>
                    {/* Passwords */}
                    <div className="flex flex-wrap -mx-3 mb-2">
                        {/* First Password */}
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="passwordInput">Password</label>
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
                                fullWidth
                                required
                            />
                            <p className="mb-4 text-gray-600 text-xs italic">Make sure that the password contains more
                                than 8 characters, including normal, numeric and special characters
                                (a,b,c,d,A,B,C,D,1,2,4,5,#,$,%,&; etc. ..)</p>
                        </div>
                        {/* End First Password */}

                        {/* Password Repeat */}
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="password_repeat">Repeat Password</label>
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
                                fullWidth
                                required
                            />
                            <p className="text-gray-600 text-xs italic">Repeat the password you wrote.</p>
                        </div>
                        {/* End Password Repeat */}
                    </div>
                    {/* End Passwords */}

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="email">E-mail</label>
                            <TextField id="email" type="email" name="email" variant="outlined"
                                       placeholder="useremail@example.com" fullWidth required/>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="birth">Birth</label>
                            <TextField id="birth" type="date" name="date" variant="outlined" fullWidth required/>
                        </div>
                    </div>

                    {/* Button Register */}
                    <div className="mt-8 flex items-center justify-center text-center">
                        <Button type="submit" id="btnRegister" variant="contained" color="error"
                                className="w-1/2 text-white bg-primary hover:bg-primary2">
                            Register <i className="fas fa-user-plus"></i>
                        </Button>
                    </div>
                    {/* End Button Register */}
                </form>
            </div>
        </div>
    );
}

export default RegisterUser;
