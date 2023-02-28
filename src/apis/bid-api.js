import axios from '../config/axios';

export const getPriceBid = (productId, sizeId) =>
  axios.get(`/bid/priceBySize/${productId}/${sizeId}`);

export const postBid = (body) => axios.post('/bid', body);
