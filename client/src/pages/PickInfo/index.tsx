import { Link, Outlet, useNavigate } from "react-router-dom"
import { useLogout } from "../../features/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { Button } from "antd";

const PickInfo = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)    
    const handleLogout = useLogout();
    const email = useSelector((state: RootState) => state.user.email)


    return (
        <div>
            <Link to='control'>Control</Link>
            <Link to='equipment'>Equipment</Link>
            <Link to='statistics'>Statistics</Link>
            <Link to='task'>Task</Link>        
            <Button onClick={goBack}>back</Button>
            <Button onClick={handleLogout}>Log out fromss {email}</Button>
            <Outlet />
        </div>)
}

export default PickInfo