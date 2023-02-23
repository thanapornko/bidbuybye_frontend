import axios from '../config/axios';

export const getProductDetail = (id) => axios.get(`/product/${id}`);
export const getPrice = (id) => axios.get(`/product/price/${id}`);
export const getAllSize = () => axios.get('/size');
