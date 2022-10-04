import { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getUserById } from '../../api'
import { AuthContext } from '../../contexts/AuthContext'

interface IUser {
  email: string,
  first_name: string,
  last_name: string,
  groups: Array<string>,
  id: string,
}

export default function Home() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  }

  return (
    <>
      <h1>Home</h1>
      <p>{user?.first_name}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
