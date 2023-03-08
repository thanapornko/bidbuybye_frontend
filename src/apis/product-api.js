import axios from '../config/axios';

export const getProduct = () => axios.get('/product/getProduct');
export const getProductMinbit = () => axios.get('/product/getProductMinbit');
export const getProductDetail = (id) => axios.get(`/product/${id}`);
export const getPriceAsk = (id) => axios.get(`/product/priceAsk/${id}`);
export const getPriceBid = (id) => axios.get(`/product/priceBid/${id}`);
export const getAllSize = () => axios.get('/size');
export const getAllBid = () => axios.get('/product/getAllBid');
