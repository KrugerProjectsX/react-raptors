import {Route, Routes, Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddFlat from "./Pages/AddFlat";
import RegisterUser from "./Pages/RegisterUser";
import Profile from "./Pages/Profile";
import ProfileUpdate from "./Pages/ProfileUpdate";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<RegisterUser/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/flat/new" element={<AddFlat/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile/edit" element={<ProfileUpdate/>}/>
            </Routes>

        </>
    );
};

export default App;