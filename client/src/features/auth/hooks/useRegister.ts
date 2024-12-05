import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "./useReduxType"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { setUser } from "@/entities/user/model/userSlice"

export const useRegister = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || "/list"

  const register = async (email: string, password: string) => {
    const auth = getAuth()
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }))
      navigate(fromPage)
    } catch (error) {
      console.error(error)
    }
  }

  return { register }
}
