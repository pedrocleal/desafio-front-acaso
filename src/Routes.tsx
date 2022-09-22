import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import SignUpPage from "./pages/SignUp"

export default function AppRoutes() {

  // const { isAuth } = useContext(AuthContext)
  const isAuth = true;

  return (
    <Routes>
      <Route path='/' element={isAuth ? <HomePage /> : <LoginPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/sign-up' element={<SignUpPage />}/>
    </Routes>
  )
}
