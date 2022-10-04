import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

interface IAuthContext {
  user: IUser | null,
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isAuthenticated: boolean,
  isLoading: boolean,
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string,
  name: string,
  first_name: string,
  last_name: string,
  email: string,
}

export const AuthContext = createContext({} as IAuthContext);

export default function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isAuthenticated = !!user;
  const token = localStorage.getItem('access_token');
  const loggedUser = JSON.parse(localStorage.getItem('logged_user') || '{}');

  console.log({user, isAuthenticated});

  useEffect(() => {
    (() => {
      if (token) {
        setUser(loggedUser);
      }

      setIsLoading(false);
    })();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
