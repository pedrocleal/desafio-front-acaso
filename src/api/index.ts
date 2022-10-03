import axios from "axios";
import { toast } from 'react-hot-toast';
import ConfirmEmail from "../pages/ConfirmEmail";

const API_URL = `https://api.staging.aca.so`

export async function signUp(data: object) {
  const response = await axios.post(`${API_URL}/auth/sign-up`, data);
  toast.success('Confirme seu e-mail para prosseguir!')
  return response
}

export async function sendCodeAgain(email: string) {
  const response = await axios.post(`${API_URL}/auth/resend-confirmation-code`, { email: email})
  toast.success('O código foi enviado novamente para o email solicitado!')
  return response
}

export async function confirmSignUp(userEmail: string, code: string) {
  const response = await axios.post(`${API_URL}/auth/confirm-sign-up`, { email: userEmail, confirmation_code: code })
  toast.success('Sucesso na confirmação, efetue o login na plataforma!')
  return response
}
