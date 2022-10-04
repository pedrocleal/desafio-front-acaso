import React, { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, LoginFormContainer } from './styles';

import { Eye } from 'phosphor-react';

import logo from '../../assets/logo-acaso.svg';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useErrors from '../../hooks/useErrors';
import { createUser, login } from '../../api';
import { toast } from 'react-hot-toast'
import { AuthContext } from '../../contexts/AuthContext';
import delay from '../../utils/delay';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  function handleShowPasswordClick() {
    setShowPassword(prevState => !prevState);
  }

  const { setError, getErrorMessage, removeError} = useErrors();

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);

    if (!e.target.value) {
      setError({ field: 'email', message: 'E-mail é obrigatório'});
    } else {
      removeError('email');
    }
  }

  async function handleLoginButtonClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await login(email, password);
      localStorage.setItem('access_token', JSON.stringify(data.token.access_token));
      localStorage.setItem('refresh_token', JSON.stringify(data.token.refresh_token));
      localStorage.setItem('id_token', JSON.stringify(data.token.id_token));
      localStorage.setItem('logged_user', JSON.stringify(data.user));
      setUser(data.user);
      await delay(1000);
      // a requisição é concluida com sucesso porém quando eu tento logar normalmente me retorna um erro dizendo que "User is already created"
      // const createUserResponse = await createUser({}, data.token.id_token);
      navigate('/');
    } catch (error: any) {
      toast.error('Ocorreu um erro ao tentar entrar em aca.so, verifique os campos e tente novamente!');
    } finally {
      setIsLoading(false);
    }
  }

  function handleCreateAccountButtonClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate('/sign-up');
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
          disabled={!email || !password}
          isLoading={isLoading}
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
