import axios from 'axios';



const a_b_u='https://fakestoreapi.com/';

axios.defaults.headers.common['Content-Type']='application/json';
axios.defaults.headers.common['Accept']='application/json';


export const AxiosInstance=axios.create({
    baseURL:a_b_u,
    timeout: 5000,
})