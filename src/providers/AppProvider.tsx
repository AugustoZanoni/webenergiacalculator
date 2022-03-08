import { createContext, useState, useContext, useEffect, FC, Children } from 'react';
import { GridRowsProp } from "@mui/x-data-grid";

interface IApp {
    devices: Array<{id?: string, name?:string, power?:string, time?:string, quantity?:string }>,
    addDevice: (device: object) => void
}

const AppContext = createContext<IApp>({ devices: [], addDevice:(device:object) => {} });
const useAppContext = () => useContext(AppContext);
const AppProvider: FC = ({ children }) => {
    const [devices, setDevices] = useState<object[]>([])
    const rowss: GridRowsProp = [
        { id: 1, name: "TV", power: 100, time: 5, quantity: 2 },
        { id: 2, name: "Rádio", power: 50, time: 2, quantity: 1 },
        { id: 3, name: "PC", power: 400, time: 10, quantity: 2 },
        { id: 4, name: "Aspirador de pó", power: 1200, time: 1, quantity: 1 },
    ];

    const addDevice = (device:object = {}) => {
        setDevices(list => {return [...list, device];})
    }

    return (
        <AppContext.Provider value={{ devices, addDevice }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext, useAppContext };