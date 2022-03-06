import React from 'react';
import { Container, Paper, Typography, Button, TextField, InputAdornment, Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/Mail';

const Login = () => {
    return (
        <Container fixed sx={{ height: '100vh' }}>
            <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Grid p={2} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' variant='h5' color='primary'>Web Energia Calculator</Typography>
                    </Grid>
                    <Grid item xs={12} mb={5} mt={5}>
                        <TextField
                            placeholder='Digite seu endereço de email'
                            sx={{flexGrow: 1, display: 'flex'}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle color='primary' />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button sx={{width: '100%'}} variant='contained'>Entrar</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Login