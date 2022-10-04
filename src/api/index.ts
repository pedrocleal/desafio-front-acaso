import axios from "axios";
import { toast } from 'react-hot-toast';

const API_URL = `https://api.staging.aca.so`;

export async function signUp(data: object) {
  const response = await axios.post(`${API_URL}/auth/sign-up`, data);
  toast.success('Confirme seu e-mail para prosseguir!');
  return response;
}

export async function sendCodeAgain(email: string) {
  const response = await axios.post(`${API_URL}/auth/resend-confirmation-code`, { email: email});
  toast.success('O código foi enviado novamente para o email solicitado!');
  return response;
}

export async function confirmSignUp(userEmail: string, code: string) {
  const response = await axios.post(`${API_URL}/auth/confirm-sign-up`, { email: userEmail, confirmation_code: code });
  toast.success('Sucesso na confirmação, efetue o login na plataforma!');
  return response;
}

export async function login(userEmail: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/login`, { email: userEmail, password: password });
  return response;
}

// Retorna um erro de autorização ERR.1.0021
export async function getUserById(id: string, token: string) {
  const response = await axios.get(`${API_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response;
}

export async function createUser(data: object, token: string) {
  const response = await axios.post(`${API_URL}/user`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response;
}
