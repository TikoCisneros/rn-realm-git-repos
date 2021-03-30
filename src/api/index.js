import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.interceptors.request.use(
  async config => {
    console.log('[REQUEST SUCCESS]:', config, new Date());
    return config;
  },
  error => {
    console.log('[REQUEST ERROR]:', error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response = {}) => {
    console.log('[RESPONSE SUCCESS]:', response, new Date());
    return response;
  },
  error => {
    console.log('[RESPONSE ERROR]:', error);
    return Promise.reject(error);
  },
);

export default api;
