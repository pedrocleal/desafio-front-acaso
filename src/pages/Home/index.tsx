import { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getUserById } from '../../api'
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/AuthContext'
import { Container, Wrapper } from './styles';

import acasoUser from '../../assets/acaso-user.png';

export default function Home() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  }

  return (
    <Wrapper>
      <Container>
        <div className='user-info'>
          <h1 className='bold'>{user?.first_name}</h1>
          <h1>{user?.last_name}</h1>
          <Button
            bgColor='#fff'
            color='#000000'
            onClick={handleLogout}
            text='Sair de aca.so'
          />
        </div>

        <img src={acasoUser} alt='Homem sorrindo'/>
      </Container>
    </Wrapper>
  )
}
