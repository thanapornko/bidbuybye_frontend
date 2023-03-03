import axios from '../config/axios';

export const updateProfilePicture = (formData) => {
  // console.log(formData);
  return axios.patch('/user', formData);
};

export const updateUserInfo = (input) => {
  // console.log('input----', input);
  return axios.patch('/user/info', input);
};

export const userHistory = () => {
  return axios.get('/user/history');
};
