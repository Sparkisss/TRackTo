import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "./useReduxType"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { setUser } from "../../../entities/model/user/userSlice"

export const useLogin = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/list';

    const login = async (email: string, password: string) => {
        const auth = getAuth()
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken
            }))
            navigate(fromPage)
        } catch (error) {
            console.error(error);
        }
    }
    return { login }
}

