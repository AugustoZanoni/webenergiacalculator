import { createContext, useState, useContext, useEffect, FC } from 'react';
import jwtDecode from 'jwt-decode';
interface IAuthContext {
    email: string;
    Singin: (email: string) => void;
    Singout: () => void;
}

interface IJwt {
    email:string,
    sub:string,
    iat: number,
    exp: number
}

const AuthContext = createContext<IAuthContext>({ email: '', Singin: (email: string) => { }, Singout: () => { } });
const useAuthContext = () => useContext(AuthContext);
const AuthProvider: FC = ({ children }) => {

    const [userEmail, setUserEmail] = useState('');
    const [jwt, setJwt] = useState('');

    useEffect(() => {        
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const JWT: string = token ? token : '';
        let decoded = (JWT)? jwtDecode<IJwt>(JWT): {email:''};
        setJwt(JWT);
        setUserEmail(decoded.email);        
        window.history.replaceState(null, 'Web Energia Calculator', '/');    
    }, [])
    

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