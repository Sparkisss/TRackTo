import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAppDispatch } from "./useReduxType";
import { removeUser } from "../../../entities/user/model/userSlice";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }, [dispatch, navigate]);

  return handleLogout;
};