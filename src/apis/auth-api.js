import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);

export const login = (input) => axios.post('/auth/login', input);

export const googleLogin = (input) => axios.post('/auth/googlelogin', input);

export const getMe = () => axios.get('/auth/me');

// const getMe = () => {
//   const url = 'http://localhost:8080/auth/me';
//   const response = axios.get(url);
//   return response;
// };

// const register = async (data) => {
//   const url = 'http://localhost:8080/auth/register';
//   const response = await axios.post(url, data);
//   return response.data;
// };

// const login = async (data) => {
//   const url = 'http://localhost:8080/auth/login';
//   const response = await axios.post(url, data);
//   return response.data;
// };

// const googleLogin = async (data) => {
//   const url = 'http://localhost:8080/auth/googlelogin';
//   const response = await axios.post(url, data);
//   return response.data;
// };

// export { register, login, googleLogin, getMe };
