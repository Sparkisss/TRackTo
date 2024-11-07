import { Button } from "antd"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useAuth } from '../../features/auth/index'

export const PickInfo = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const {signout}: any = useAuth()

    return (
    <ul>
        <li><Link to='control'>Control</Link></li>
        <li><Link to='equipment'>Equipment</Link></li>
        <li><Link to='statistics'>Statistics</Link></li>
        <li><Link to='task'>Task</Link></li>
        <Button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</Button>
        <Button onClick={goBack}>back</Button>
        <Outlet />
    </ul>)
}