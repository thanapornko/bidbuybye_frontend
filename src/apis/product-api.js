import axios from '../config/axios';

export const getProductDetail = (id) => axios.get(`/product/${id}`);
