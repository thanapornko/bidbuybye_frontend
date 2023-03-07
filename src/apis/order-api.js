import axios from '../config/axios';

export const getAllOrder = () => axios.get('/checkout/getAllOrderProduct');
export const createOrder = (input) => axios.post('/checkout', input);
