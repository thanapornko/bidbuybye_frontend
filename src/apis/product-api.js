import axios from '../config/axios';

export const getProduct = () => axios.get('/product/getProduct');
export const getProductDetail = (id) => axios.get(`/product/${id}`);
export const getPrice = (id) => axios.get(`/product/price/${id}`);
export const getAllSize = () => axios.get('/size');
