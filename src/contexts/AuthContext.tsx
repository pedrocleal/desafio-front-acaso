import { createContext, ReactNode, useState } from 'react'

interface IAuthContext {
  isAuth: boolean;
  setIsAuth: () => void;
}

const AuthContext = createContext({} as IAuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthContextProviderProps) {
  const [isAuth, setIsAuth] = useState()

  const contextValues = { isAuth, setIsAuth }

  return (
    <AuthContext.Provider value={ contextValues }
    >
      {children}
    </AuthContext.Provider>
  )
}
