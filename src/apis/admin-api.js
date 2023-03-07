import axios from '../config/axios';

export const getOrder = () => axios.get('/admin/adminOrder');

export const updateConfirm = (input) =>
  axios.patch('/admin/statusUpdateConfirmed', input);

export const updateArrived = (input) =>
  axios.patch('/admin/statusUpdateArrived', input);

export const updateVerified = (input) =>
  axios.patch('/admin/statusUpdateVerified', input);

export const updateCompleted = (input) =>
  axios.patch('/admin/statusUpdateCompleted', input);
