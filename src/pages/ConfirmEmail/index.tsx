import Button from "../../components/Button"
import FormGroup from "../../components/FormGroup"
import Input from "../../components/Input"

import logo from '../../assets/logo-acaso.svg';

import { Container, ConfirmEmailFormContainer } from './styles'
import useErrors from "../../hooks/useErrors";
import { useState } from "react";

export default function ConfirmEmail() {
  const [ code, setCode ] = useState<string>('')
  const { setError, removeError, getErrorMessage } = useErrors()

  return (
    <Container>
    <img src={logo} alt='Logo Acaso'/>
    <h3>Cadastro</h3>

    <ConfirmEmailFormContainer>
      <FormGroup errorMsg={getErrorMessage('firstName')}>
        <label>Código*</label>
        <Input
          value={code}
          placeholder='Primeiro nome'
          type='text'
          onChange={(event) => setCode(event.currentTarget.value)}
          error={getErrorMessage('firstName')}
        />
      </FormGroup>
      <div className='actions'>
        <Button
          bgColor='#fff'
          color='#000000'
          text='Confirmar e-mail'
          onClick={() => ''}
          disabled={!code}
        />

        <p>Não recebeu o código?</p>

        <Button
          bgColor='#FFFFFF1A'
          color='#fff'
          text='Reenviar código'
          onClick={() => ''}
        />
      </div>
    </ConfirmEmailFormContainer>
  </Container>
  )
}
