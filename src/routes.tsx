import React, { useEffect } from 'react';
import { Routes, Route, MemoryRouter, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from './providers/AuthProvider';
import App from './pages/App';
import Login from './pages/Login';
import Devices from './pages/Devices';
import Results from './pages/Results';

function PrivateRoute() {
  //Authenticated
  const { email } = useAuthContext();
  return email ? <Outlet /> : <Login />;
}

const routes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<App />} >
            <Route path="" element={<Devices />} />
            <Route path="result" element={<Results />} />
          </Route>
        </Route>
        <Route path="login" element={<Login/>} />
      </Routes>
    </MemoryRouter>
  )
}

export default routes