import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import Spinner from '../components/Spinner';
import { AuthContext } from '../contexts/AuthContext';
import ConfirmEmailPage from '../pages/ConfirmEmail'
import HomePage from "../pages/Home"
import LoginPage from "../pages/Login"
import SignUpPage from "../pages/SignUp";

export default function AppRoutes() {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Spinner size={52}/>
  }

  return (
    <Routes>
      <Route path='/' element={isAuthenticated ? <HomePage /> : <LoginPage />} />
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-up/confirm-sign-up' element={< ConfirmEmailPage/>}/>
    </Routes>
  )
}
