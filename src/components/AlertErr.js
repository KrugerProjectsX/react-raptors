import {Alert, Fade, IconButton} from "@mui/material";
import React, {useEffect, useState} from "react";
export default function AlertErr({msg}){

    const msge = msg.toString();
    return(
        <>
            <div className={'m-1 absolute top-0 right-0 flex justify-center items-center'}>
                <Alert variant="filled" severity="error" sx={{ backgroundColor: '#c74563', color: '#fff' }}>
                    {msge}
                </Alert>
            </div>
        </>
    );
}
