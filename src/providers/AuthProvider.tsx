import { createContext, useState, useContext, FC } from 'react';
interface IAuthContext {
    email: string;
    Singin: (email: string) => void;
    Singout: () => void;
}

const AuthContext = createContext<IAuthContext>({ email: '', Singin: (email: string) => { }, Singout: () => { } });
const useAuthContext = () => useContext(AuthContext);
const AuthProvider: FC = ({ children }) => {
    const [userEmail, setUserEmail] = useState('');
    const Singin = (email: string) => {
        setUserEmail(email);        
    }
    const Singout = () => {
        setUserEmail('');
    }

    return (
        <AuthContext.Provider value={{ email: userEmail, Singin, Singout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext, useAuthContext };