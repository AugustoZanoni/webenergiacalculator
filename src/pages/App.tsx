import React from 'react'; 
import { Box } from '@mui/material';
import TopBar from '../components/TopBar';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <TopBar />
            <Box sx={{ bgcolor: 'background.default', height: 'calc(100vh - 50px)' }}>
                <Outlet />
            </Box>
        </div>
    );
}

export default App;
