import axios from '../config/axios';

export const updateProfilePicture = (formData) => {
  // console.log(formData);
  return axios.patch('/user', formData);
};
