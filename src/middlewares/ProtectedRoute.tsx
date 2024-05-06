import React, { useEffect } from 'react';
import { useAuth } from '../others/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const { isAuthenticated,user} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated && !user) {
            navigate('/login');
        }
    }, [isAuthenticated,user, navigate]);  

    return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;