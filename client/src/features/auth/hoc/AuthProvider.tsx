import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
    user: any;
    signin: (newUser: any, cb: any) => void;
    signout: (cb: any) => void;
  }
  
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);

    const signin = (newUser: any, cb: any) => {
        setUser(newUser);
        cb();
    };

    const signout = (cb: any) => {
        setUser(null);
        cb();
    };

    const value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};




