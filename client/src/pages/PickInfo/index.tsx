import { Link, Outlet, useNavigate } from "react-router-dom"
import { useLogout } from "../../features/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { Button} from "antd";
import { CloseCircleOutlined, CaretLeftOutlined } from '@ant-design/icons';
import module from './PickInfo.module.scss'

const PickInfo = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)    
    const handleLogout = useLogout();
    const email = useSelector((state: RootState) => state.user.email)
    
    return (
        <>
            <header className={module.header}>
                <Link to='control'>Control</Link>
                <Link to='equipment'>Equipment</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='list/tasks'>Task</Link>
                <Button
                onClick={goBack}                
                type="primary"
                style={{ insetInlineEnd: 94 }}                
                icon={<CaretLeftOutlined />}
                >back</Button>  
                <Button
                onClick={handleLogout}                
                type="primary"
                style={{ insetInlineEnd: 94 }}
                icon={<CloseCircleOutlined />}
                >{email}</Button>                                      
            </header>
            <Outlet />
        </>
    )
}

export default PickInfo