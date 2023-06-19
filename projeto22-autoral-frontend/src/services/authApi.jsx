import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/users/login', { email, password });
  return response.data;
}
//
