import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-001.firebaseio.com/'
});

export default instance;