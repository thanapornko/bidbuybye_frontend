import axios from '../config/axios';

export const getPriceAsk = (productId, sizeId) =>
  axios.get(`/bid/priceBySize/${productId}/${sizeId}`);

export const postBid = (body) => axios.post('/bid', body);

export const getPriceBid = (productId, sizeId) =>
  axios.get(`/bid/priceMaxBySize/${productId}/${sizeId}`);

export const getBids = () => axios.get('/bid/bidask');
