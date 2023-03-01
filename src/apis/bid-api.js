import axios from '../config/axios';

export const getPriceBid = (productId, sizeId) =>
  axios.get(`/bid/priceBySize/${productId}/${sizeId}`);
