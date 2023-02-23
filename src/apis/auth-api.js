import axios from 'axios';
// import axios from '../config/axios';

// export const register = (input) => axios.post('/auth/register', input);
// export const login = (input) => axios.post('/auth/login', input);
export const getMe = () => axios.get('/auth/me');

const register = async (data) => {
  const url = 'http://localhost:8080/auth/register';
  const response = await axios.post(url, data);
  return response.data;
};

const login = async (data) => {
  const url = 'http://localhost:8080/auth/login';
  const response = await axios.post(url, data);
  return response.data;
};

export { register, login };
