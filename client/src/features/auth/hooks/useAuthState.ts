import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';

export const useAuthState = () => {
    const isAuth = useSelector((state: RootState) => !!state.user.email)

    return { isAuth };
};
