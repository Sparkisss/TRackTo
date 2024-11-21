import { useLocation, Navigate } from 'react-router-dom';
import { useAuthState } from '../hooks/useAuthState';

export const RequireAuth = ({ children }: any) => {
    const location = useLocation();
    const { isAuth, loading } = useAuthState();

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!isAuth) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

