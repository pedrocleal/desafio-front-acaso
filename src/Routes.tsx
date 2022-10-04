import { ReactNode, useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'

import ConfirmEmailPage from './pages/ConfirmEmail'
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import SignUpPage from "./pages/SignUp"

export default function AppRoutes() {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<HomePage user={user}/>}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-up/confirm-sign-up' element={< ConfirmEmailPage/>}/>
    </Routes>
  )
}
