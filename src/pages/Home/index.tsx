import { Link, Navigate } from 'react-router-dom'

interface IHomeProps {
  user: object | null
}

export default function Home({ user }: IHomeProps) {
  if (!user) {
    return <Navigate to={'/login'} replace/>
  }

  return (
    <>
      <h1>Home</h1>
      <Link to='/login'>Login</Link>
    </>
  )
}
