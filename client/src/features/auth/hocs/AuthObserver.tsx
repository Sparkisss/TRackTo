import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../../../entities/user/model/userSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthObserverProps } from '../model/types';

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

