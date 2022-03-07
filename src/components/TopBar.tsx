import React from 'react';
import { useAuthContext } from '../providers/AuthProvider';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const TopBar = () => {
    const { Singout } = useAuthContext();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{bgcolor: 'background.default'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Web Energia Calculator
                    </Typography>
                    <Button color="inherit" variant='outlined' onClick={Singout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar