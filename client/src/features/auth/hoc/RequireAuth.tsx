import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../index'

export const RequireAuth = ({children}: any) => {
    const location = useLocation()
    const {user}: any = useAuth()

    if (!user) {
        return <Navigate to='/' state={{from: location}}/>
    }

    return children
}
