import React from 'react'; 
import { Grid, Box } from '@mui/material';
import TopBar from '../components/TopBar';
import FormDevice from '../components/FormDevice';

function App() {
    return (
        <div className="App">
            <TopBar />
            <Box sx={{ bgcolor: 'background.default', height: 'calc(100vh - 64px)' }}>
                <Grid container spacing={2} p={2}>
                    <Grid item xs={12}>
                        <FormDevice />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{bgcolor: 'white'}}>tesst</Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
