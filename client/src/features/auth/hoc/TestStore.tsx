import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../../features/auth/model/reducer';

export const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const user = form.username.value;

        dispatch(signin(user));
        navigate(fromPage, { replace: true });
    };

    return (
        <div>
            <h1>Auth page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                    <button type="submit">Login</button>
                </label>
            </form>
            <Link to="/list">List</Link>
        </div>
    );
};
