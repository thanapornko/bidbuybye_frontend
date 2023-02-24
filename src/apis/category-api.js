import axios from '../config/axios';

export const getCategory = () => axios.get('/category/getCategory');
