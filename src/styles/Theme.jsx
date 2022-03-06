import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        background: {
            default: orange[50]
        }
    },
});

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}