import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../../../entities/model/user/userSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface AuthObserverProps {
  children: React.ReactNode;
}

export const AuthObserver: React.FC<AuthObserverProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return children;
};

