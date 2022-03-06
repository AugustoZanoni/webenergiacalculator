import React from 'react';
import { Routes, Route, BrowserRouter, MemoryRouter, Link, Navigate, Outlet } from "react-router-dom";
import App from './pages/App';
import Login from './pages/Login';

function PrivateRoute() {
  //Authenticated
  return true ? <Outlet /> : <Navigate to="/login" />;
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