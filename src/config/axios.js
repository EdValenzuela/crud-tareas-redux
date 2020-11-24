import axios from 'axios';

//cliente axios

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000/'
});

export default clienteAxios;