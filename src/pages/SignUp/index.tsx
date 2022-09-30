import React, { useState } from 'react';
import { Container, SignUpFormContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import useErrors from '../../hooks/useErrors';

import { Eye } from 'phosphor-react';

import logo from '../../assets/logo-acaso.svg';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignUp() {
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate()

  const { errors, setError, getErrorMessage, removeError} = useErrors();

  function handleBackToLoginButtonClick() {
    navigate('/login')
  }

  function handleShowPasswordButtonClick() {
    setShowPassword(prevState => !prevState)
  }

  function handleFormInputChange(field: string, e: React.FormEvent<HTMLInputElement>) {
    switch (field) {
      case 'firstName':
        setFirstName(e.currentTarget.value)

        if (!e.currentTarget.value) {
          return setError({ field: 'firstName', message: 'Campo obrigatório'})
        } else {
          removeError('firstName')
        }
        break;
      case 'lastName':
        setLastName(e.currentTarget.value)

        if (!e.currentTarget.value) {
          return setError({ field: 'lastName', message: 'Campo obrigatório'})
        } else {
          removeError('lastName')
        }
        break;
      case 'email':
        setEmail(e.currentTarget.value)

        if (!e.currentTarget.value) {
          return setError({ field: 'email', message: 'Campo obrigatório'})
        } else {
          removeError('email')
        }
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <img src={logo} alt='Logo Acaso'/>
      <h3>Cadastro</h3>

      <SignUpFormContainer>
        <div className='flex-group'>
          <FormGroup errorMsg={getErrorMessage('firstName')}>
            <label>Primeiro nome*</label>
            <Input
              value={firstName}
              placeholder='Primeiro nome'
              type='text'
              onChange={(event) => handleFormInputChange('firstName', event)}
              error={getErrorMessage('firstName')}
            />
          </FormGroup>

          <FormGroup errorMsg={getErrorMessage('lastName')}>
            <label>Último nome*</label>
            <Input
              value={lastName}
              placeholder='Último nome'
              type='text'
              onChange={(event) => handleFormInputChange('lastName', event)}
              error={getErrorMessage('lastName')}
            />
          </FormGroup>
        </div>

        <FormGroup errorMsg={getErrorMessage('email')}>
          <label>E-mail*</label>
          <Input
            value={email}
            placeholder='Seu@email.com'
            type='text'
            onChange={(event) => handleFormInputChange('email', event)}
            error={getErrorMessage('email')}
          />
        </FormGroup>

        <FormGroup>
          <label>Senha*</label>
          <Input
            value={password}
            placeholder='*****'
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Eye className='show-password' size={16} color='#fff' onClick={handleShowPasswordButtonClick} />

        </FormGroup>

        <FormGroup>
          <label>Confirme a senha*</label>
          <Input
            value={confirmPassword}
            placeholder='*****'
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Eye className='show-password' size={16} color='#fff' onClick={handleShowPasswordButtonClick} />
        </FormGroup>

        <div className='actions'>
          <Button
            bgColor='#fff'
            color='#000000'
            onClick={() => ''}
            text='Criar conta em aca.so'
          />

          <Button
            bgColor='#FFFFFF1A'
            color='#fff'
            text='Voltar ao login'
            onClick={handleBackToLoginButtonClick}
          />
        </div>
      </SignUpFormContainer>
    </Container>
  )
}
