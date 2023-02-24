import axios from '../config/axios';

export const getBrand = () => axios.get('/brand/getBrand');
