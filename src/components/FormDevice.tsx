import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const FormDevice = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Equipamento"
            />
            <TextField
                label="Quantidade"
            />
            <TextField
                label="Tempo"
            />
            <TextField
                label="Potência"
            />
            <Button variant='contained'>Adicionar</Button>
        </Box>
    )
}

export default FormDevice