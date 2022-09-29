import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, LoginFormContainer } from './styles';

import { Eye } from 'phosphor-react';

import logo from '../../assets/logo-acaso.svg';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPasswordClick() {
    setShowPassword(prevState => !prevState)
  }

  return (
    <Container>
      <img src={logo} alt='Logo acaso' />
      <h3>Login</h3>
      <LoginFormContainer>
        <FormGroup>
          <label>E-mail</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='seu@e-mail.com'
            type='text'
          />
        </FormGroup>

        <FormGroup>
          <label>Senha</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='*****'
            type={showPassword ? 'text' : 'password'}
          />
          <Eye className='show-password' size={16} color='#fff' onClick={handleShowPasswordClick} />
        </FormGroup>

        <Button
          text='Entrar'
          bgColor='#fff'
          color='#000004'
          onClick={() => console.log('OI')}
        />

        <div className='create-new-account-box'>
          <span>Não possui uma conta?</span>
          <Button
            text='Criar minha conta em aca.so'
            bgColor='#FFFFFF1A'
            color='#fff'
            onClick={() => 'oi'}
          />
        </div>
      </LoginFormContainer>
    </Container>
  )
}
