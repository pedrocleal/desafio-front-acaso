import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, LoginFormContainer } from './styles';

import { Eye } from 'phosphor-react';

import logo from '../../assets/logo-acaso.svg';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useErrors from '../../hooks/useErrors';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleShowPasswordClick() {
    setShowPassword(prevState => !prevState)
  }

  const { errors, setError, getErrorMessage, removeError} = useErrors();

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)

    if (!e.target.value) {
      setError({ field: 'email', message: 'E-mail é obrigatório'})
    } else {
      removeError('email')
    }
  }

  function handleLoginButtonClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Login Request')
  }

  function handleCreateAccountButtonClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Redirect to /sign-up')
    navigate('/sign-up')
  }

  return (
    <Container>
      <img src={logo} alt='Logo acaso' />
      <h3>Login</h3>
      <LoginFormContainer>
        <FormGroup errorMsg={getErrorMessage('email')}>
          <label>E-mail</label>
          <Input
            value={email}
            onChange={handleEmailChange}
            placeholder='seu@e-mail.com'
            type='text'
            error={getErrorMessage('email')}
          />
        </FormGroup>

        <FormGroup errorMsg={getErrorMessage('password')}>
          <label>Senha</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='*****'
            type={showPassword ? 'text' : 'password'}
            error={getErrorMessage('password')}
          />
          <Eye className='show-password' size={16} color='#fff' onClick={handleShowPasswordClick} />
        </FormGroup>

        <Button
          text='Entrar'
          bgColor='#fff'
          color='#000004'
          onClick={handleLoginButtonClick}
        />

        <div className='create-new-account-box'>
          <span>Não possui uma conta?</span>
          <Button
            text='Criar minha conta em aca.so'
            bgColor='#FFFFFF1A'
            color='#fff'
            onClick={handleCreateAccountButtonClick}
          />
        </div>|
      </LoginFormContainer>|
    </Container>
  )
}
