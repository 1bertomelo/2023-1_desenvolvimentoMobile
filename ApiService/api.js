import axios from 'axios';

const api = axios.create({
    baseURL: 'https://servidorvercel-3oid.vercel.app'
});

export default api;