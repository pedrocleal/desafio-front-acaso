import axios from "axios";
import { toast } from 'react-hot-toast';

const API_URL = `https://api.staging.aca.so`

export async function signUp(data: object) {
  const response = await axios.post(`${API_URL}/auth/sign-up`, data);
  toast.success(response.data)
  return response
}

export async function sendCodeAgain(email: string) {
  const response = await axios.post(`${API_URL}/auth/resend-confirmation-code`, { email: email})
  toast.success('O código foi enviado novamente para o email solicitado')
  return response
}
