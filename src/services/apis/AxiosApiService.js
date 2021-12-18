import axios from 'axios';
import {handleError, handleResponse} from './Response';

const BASE_URL = 'https://pixabay.com';

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
});

const request = function (options) {
    return client(options)
        .then(handleResponse)
        .catch(handleError);
};

export default request;
