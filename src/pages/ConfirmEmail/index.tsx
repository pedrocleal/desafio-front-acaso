import React, { useEffect, useState } from "react";
import Button from "../../components/Button"
import { Container, ConfirmEmailFormContainer } from './styles'
import FormGroup from "../../components/FormGroup"
import Input from "../../components/Input"
import logo from '../../assets/logo-acaso.svg';
import useErrors from "../../hooks/useErrors";
import delay from "../../utils/delay";
import { sendCodeAgain } from "../../api";
import { toast } from 'react-hot-toast'

const TIMEOUT = 120000

export default function ConfirmEmail() {
  const [code, setCode] = useState<string>('');
  const [isSendAgainRequested, setIsSendAgainRequested] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(TIMEOUT);

  const { setError, removeError, getErrorMessage } = useErrors();
  const userEmail = JSON.parse(localStorage.getItem('user-info') || '{}')?.email;

  function formatMiliseconds(ms: number) {
    const minutes = (ms / 60000) % 60;
    const seconds = (ms / 1000) % 60;

    return `${Math.floor(minutes)}:${Math.floor(seconds)}`
  }

  useEffect(() => {
    if (isSendAgainRequested) {
      const timer:any = countdown > 0 && setInterval(() => setCountdown((prevState) => prevState - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [countdown, isSendAgainRequested])

  async function handleSendCodeAgainButtonClick(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();

    try {
      const response = await sendCodeAgain(userEmail);
      console.log(response)
    } catch (error: any) {
      console.log(error.response.data.detail)
      // toast.error(error?.response?.data.detail || null)
    }

    setIsSendAgainRequested(true)
    await delay(5000)
    setIsSendAgainRequested(false)
  }

  async function handleConfirmEmailButtonClick(event: React.FormEvent<HTMLInputElement>) {

  }

  return (
    <Container>
    <img src={logo} alt='Logo Acaso'/>
    <h3>Cadastro</h3>

    <ConfirmEmailFormContainer>
      <FormGroup errorMsg={getErrorMessage('firstName')}>
        <label>Código*</label>
        <Input
          value={code}
          placeholder='Insira aqui o código'
          type='text'
          onChange={(event) => setCode(event.currentTarget.value)}
          error={getErrorMessage('firstName')}
          disabled={isSendAgainRequested}
        />
      </FormGroup>
      <div className='actions'>
        <Button
          bgColor='#fff'
          color='#000000'
          text='Confirmar e-mail'
          onClick={() => ''}
          disabled={!code || isSendAgainRequested}
        />

        <p>Não recebeu o código?</p>

        <Button
          bgColor='#FFFFFF1A'
          color='#fff'
          text={isSendAgainRequested ? `Aguarde ${formatMiliseconds(countdown)} para enviar` : `Reenviar código`}
          onClick={handleSendCodeAgainButtonClick}
          disabled={isSendAgainRequested}
        />
      </div>
    </ConfirmEmailFormContainer>
  </Container>
  )
}
