import { ReactNode, useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'

import ConfirmEmailPage from './pages/ConfirmEmail'
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import SignUpPage from "./pages/SignUp"

const PrivateRoute = () => {
  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    return <Navigate to='/login' />
  }

  return (
    <HomePage />
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-up/confirm-sign-up' element={< ConfirmEmailPage/>}/>
    </Routes>
  )
}
