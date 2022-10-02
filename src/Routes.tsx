import { ReactNode, useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import ConfirmEmailPage from './pages/ConfirmEmail'
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import SignUpPage from "./pages/SignUp"

export default function AppRoutes() {
  // const { isAuth } = useContext(AuthContext)
  const isAuth = false;
  const user = {
    id: 1,
    name: 'pedro'
  }

  return (
    <Routes>
      <Route path='/' element={isAuth ? <HomePage user={user}/> : <LoginPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-up/confirm-sign-up' element={< ConfirmEmailPage/>}/>
    </Routes>
  )
}
