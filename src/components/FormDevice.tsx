import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppContext } from '../providers/AppProvider';

const FormDevice = () => {
    const { addDevice } = useAppContext();
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
            <Button variant='contained' sx={{height: 56}} onClick={(ev) => addDevice({ id: 1, name: "TV", power: 100, time: 5, quantity: 2 })}>Adicionar</Button>
        </Box>
    )
}

export default FormDevice