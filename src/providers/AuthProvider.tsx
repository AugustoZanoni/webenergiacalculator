import React, { createContext, useState, FC } from 'react';
interface IAuthContext {
    email: string;
    Singin: (email: string) => void;
}

const AuthContext = createContext<IAuthContext>({ email: '', Singin: (email: string) => { } });
const AuthProvider: FC = ({ children }) => {
    const [email, setEmail] = useState('');
    const Singin = (email: string) => {
        setEmail(email);
    }

    return (
        <AuthContext.Provider value={{ email, Singin }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext };