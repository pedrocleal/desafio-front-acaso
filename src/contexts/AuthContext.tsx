import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface IAuthContext {
  user: object | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string,
  name: string,
  last_name: string,
  email: string,
}

export const AuthContext = createContext({} as IAuthContext);

export default function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
