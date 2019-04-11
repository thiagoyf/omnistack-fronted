import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backend-thiagoyf.herokuapp.com'
});

export default api;
