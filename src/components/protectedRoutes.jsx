import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './authContext';

export default function ProtectedRoutes({children}) {
    const { user } = useUserAuth();
    if (user) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
}
