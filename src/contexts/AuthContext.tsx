import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

interface IAuthContext {
  user: IUser | null,
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isAuth: boolean,
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
  const [isAuth, setIsAuth] = useState<boolean>(true)
  const token = localStorage.getItem('access_token');
  const loggedUser = JSON.parse(localStorage.getItem('logged_user') || '{}')

  console.log(user);

  useEffect(() => {
    (async () => {
      if (token) {
        setIsAuth(true)
        setUser(loggedUser);

        // Essa requisição me retorna um erro de autorização ERR.1.0021
        // try {
        //   const response = await getUserById(user.id, token);
        //   console.log(response)
        // } catch (error) {
        //   console.log(error)
        // }
      }
    })();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
