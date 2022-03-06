import React, { useEffect } from 'react';
import { Routes, Route, MemoryRouter, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from './providers/AuthProvider';
import App from './pages/App';
import Login from './pages/Login';

function PrivateRoute() {
  //Authenticated
  const { email } = React.useContext(AuthContext);
  return email ? <Outlet /> : <Navigate to="/login" />;
}

const routes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<App />} />
        </Route>
        <Route path="login" element={<Login/>} />
      </Routes>
    </MemoryRouter>
  )
}

export default routes