import axios from '../config/axios';

export const getOrder = () => axios.get('/admin/adminOrder');

export const updateShipped = (input) =>
  axios.patch('/admin/statusUpdateShipped', input);

export const updateArrived = (input) =>
  axios.patch('/admin/statusUpdateArrived', input);

export const updateVerified = (input) =>
  axios.patch('/admin/statusUpdateVerified', input);

export const updateCancel = (input) =>
  axios.patch('/admin/statusUpdateCancel', input);
