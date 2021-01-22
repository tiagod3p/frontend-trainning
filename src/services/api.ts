import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-ultron.linkapi.solutions/v3',
});

export default api;
