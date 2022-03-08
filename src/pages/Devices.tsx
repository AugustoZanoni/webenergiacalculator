import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import FormDevice from '../components/FormDevice';
import GridDevices from '../components/GridDevices';

const Devices = () => {
    let navigate = useNavigate();
    return (
        <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
                <FormDevice />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ bgcolor: 'white', height: 500, width: "100%" }}>
                    <GridDevices />
                </Box>
            </Grid>
            <Grid item xs={12} textAlign='center'><Button
                onClick={() => navigate('/result')}
                variant='contained' sx={{ paddingLeft: 5, paddingRight: 5 }}>Resultado</Button>
            </Grid>
        </Grid>
    )
}

export default Devices