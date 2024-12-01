import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../../../entities/user/model/userSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthObserverProps } from '../model/types';

import { useLocation, Navigate } from 'react-router-dom';

export const AuthObserver: React.FC<AuthObserverProps> = ({ children }) => {
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState<Boolean>(true)

  const location = useLocation();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
        setIsAuth(true)
      } else {
        dispatch(removeUser());
        setIsAuth(false)
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
}

  return children;
};

