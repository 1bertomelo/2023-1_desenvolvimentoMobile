import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.107.198.83:3000'
});

export default api;