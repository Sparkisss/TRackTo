import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../features/auth/index"

export const Auth = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signin}: any = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target
        const user = form.username.value

        signin(user, () => navigate(fromPage, {replace: true}))
    }

    return (
        <div>
            <h1>Auth page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username"/>
                    <button type='submit'>Login</button>
                </label>
            </form>
            <Link to="/list">List</Link>
        </div>
    )
}


