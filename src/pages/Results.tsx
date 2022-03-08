import React, { EventHandler, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Box, Button, TextField, Typography } from '@mui/material';
import GridResults from '../components/GridResults';

const Results = () => {
    let navigate = useNavigate();
    const [tarifa, setTarifa] = useState(0.0);

    return (
        <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Tarifa"
                        type='number'
                        onChange={(ev)=> setTarifa( parseFloat( ev.target.value ))}
                    />
                    {/* <Button variant='contained' sx={{height: 56}} onClick={() => handleDefineTarifa()}>Definir</Button> */}
                </Box>
            </Grid>
            <Grid item xs={12}><Typography variant='h4' textAlign='center' p={2}>Total Estimado</Typography></Grid>
            <Grid container xs={12} p={2}>                
                <Grid item xs={2}>Consumo</Grid>
                <Grid item xs={2}>Custo</Grid>
                <Grid item xs={2}>Tarifa</Grid>
            </Grid>
            <Grid container xs={12} px={2}>                
                <Grid item xs={2}><Typography variant='h6' color='primary'>30.00 kWh</Typography></Grid>
                <Grid item xs={2}><Typography variant='h6' color='primary'>R$ 25.69</Typography></Grid>
                <Grid item xs={2}><Typography variant='h6' color='primary'>R$ {tarifa}</Typography></Grid>
            </Grid>
            <Grid item xs={12}>                
                <Box sx={{ bgcolor: 'white', height: 300, width: "100%" }}>
                    <GridResults/>
                </Box>
            </Grid>
            <Grid item xs={12} textAlign='center'><Button
              onClick={() => navigate('/')}
              variant='contained' sx={{ paddingLeft: 5, paddingRight: 5 }}>Voltar</Button>
          </Grid>
        </Grid>
    )
}

export default Results