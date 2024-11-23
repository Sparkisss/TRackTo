import { Button } from "antd"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useLogout } from "../../features/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";


export const PickInfo = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)    
    const handleLogout = useLogout();
    const email = useSelector((state: RootState) => state.user.email)


    return (
    <ul>
        <li><Link to='control'>Control</Link></li>
        <li><Link to='equipment'>Equipment</Link></li>
        <li><Link to='statistics'>Statistics</Link></li>
        <li><Link to='task'>Task</Link></li>        
        <Button onClick={goBack}>back</Button>
        <Button onClick={handleLogout}>Log out fromss {email}</Button>
        <Outlet />
    </ul>)
}