import React from 'react';
import { Paper, Typography, Button, TextField, InputAdornment, Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/Mail';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { Singin } = React.useContext(AuthContext);
    const [ email, setEmail ] = React.useState<string>('');
    return (
        <Grid container sx={{ bgcolor: 'background.default', height: '100vh'}}>
            <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Grid p={2} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' variant='h5' color='primary'>Web Energia Calculator</Typography>
                    </Grid>
                    <Grid item xs={12} mb={5} mt={5}>
                        <TextField                        
                            placeholder='Digite seu endereço de email'
                            sx={{flexGrow: 1, display: 'flex'}}
                            onChange={(ev)=> setEmail(ev.target.value)}
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
                        <Button sx={{width: '100%'}} variant='contained' onClick={()=> {Singin(email)}}>Entrar</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login