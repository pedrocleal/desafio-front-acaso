import axios from "axios";
import { toast } from 'react-hot-toast';

const API_URL = `https://api.staging.aca.so`

export async function signUp(data: object) {
  const response = await axios.post(`${API_URL}/auth/sign-up`, data);
  toast.success(response.data)
}
