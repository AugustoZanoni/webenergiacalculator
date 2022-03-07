import React from 'react'; 
import { Grid, Box } from '@mui/material';
import TopBar from '../components/TopBar';
import { Outlet } from 'react-router-dom';
import Devices from './Devices';
import Results from './Results';

function App() {
    return (
        <div className="App">
            <TopBar />
            <Box sx={{ bgcolor: 'background.default', height: 'calc(100vh - 64px)' }}>
                <Outlet />
            </Box>
        </div>
    );
}

export default App;
