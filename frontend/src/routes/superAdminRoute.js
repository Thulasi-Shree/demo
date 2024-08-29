/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../layout/Loader';

export default function SuperAdminRoute({ children, isAdmin, isSuperAdmin }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem('isloggedIn') === 'true';
      const userRole = JSON.parse(localStorage.getItem('user'))?.role;
      setIsAuthenticated(isAuthenticated);
      setUserRole(userRole);
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

//   if (userRole !== 'admin') {
//     return <Navigate to="/" />;
//   }

  if (userRole !== 'superAdmin') {
    return <Navigate to="/" />;
  }

  return children;
}
