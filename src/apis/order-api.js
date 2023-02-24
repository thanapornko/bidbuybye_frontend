import axios from '../config/axios';

export const getAllOrder = () => axios.get('/order/getAllFoodProduct');
