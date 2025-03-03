import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const IfAuthenticated = () => {
  const location = useLocation();

  const isAuthenticated = !!localStorage.getItem('dummyToken');

  if (isAuthenticated && (location.pathname === '/login' || location.pathname === '/signup')) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default IfAuthenticated;
