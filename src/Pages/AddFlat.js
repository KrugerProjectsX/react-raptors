import { Box, Switch, TextField } from "@mui/material";
import { Form } from "react-router-dom";
import { Button } from "@mui/material"
import { useRef } from "react";
import { Label } from "@mui/icons-material";

export default function AddFlat() {

    const currentDate = new Date().toJSON().slice(0, 10);
    const  city = useRef ('')
    const  streetName = useRef ('')
    const  streetNumber = useRef (0)
    const  areaSize  = useRef (0)
    const  acAvailable = useRef (false)
    const  yearBuilt = useRef (0)
    const  rentPrice = useRef (0)
    const  dateAvailable = useRef (0)
    
    const handleSubmit = (e) => { 
        e.preventDefault();
    };
    
    return(
    <Box component={Form}  onSubmit= {handleSubmit}>
            Here goes the form

        <TextField label="City" inputRef={city} variant="outlined"/>
        <TextField label="Street-Name" inputRef={streetName} variant="outlined"/>
        <TextField label="Street-Number" inputRef={streetNumber} variant="outlined"/>
        <TextField label="Area Size" inputRef={areaSize} variant="outlined"/>
        <Box className>
            <Switch inputRef={acAvailable} variant="outlined"/>
            <Label >A/C Available</Label>
        </Box>
        {/* input props allows to set a min and max as shown on text field  */}
        <TextField label="Year Built" inputRef={yearBuilt} inputProps={{min: 1900, max: 2050}}variant="outlined"/>
        <TextField label="Rent Price" inputRef ={rentPrice}variant="outlined"/>
        <TextField label="Date Available" inputRef={dateAvailable}variant="outlined" defaultValue={currentDate}/>
        <Button type={"Submit"}>Add Flat</Button>
    </Box>
    );
};