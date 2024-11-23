import { useLocation, Navigate } from 'react-router-dom';
import { useAuthState } from '../';
import { AuthObserverProps } from '../model/types';

export const RequireAuth: React.FC<AuthObserverProps> = ({ children }) => {
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

