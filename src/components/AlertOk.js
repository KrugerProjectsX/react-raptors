import {Alert, Fade, IconButton} from "@mui/material";
import React, {useEffect, useState} from "react";
export default function AlertOk({msg}){

    const msge = msg.toString();
    return(
        <>
            <div className={'m-1 absolute top-0 right-0 flex justify-center items-center'}>
                <Alert variant="filled" severity="success" sx={{ backgroundColor: '#aaffae', color: '#1d501d' }}>
                    {msge}
                </Alert>
            </div>
        </>
    );
}
