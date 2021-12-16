import axios from 'axios';
import {handleResponse, handleError} from './Response';

const BASE_URL = 'https://pixabay.com';

const client = axios.create({
    baseURL: BASE_URL
});

const request = function(options) {
    return client(options)
        .then(handleResponse)
        .catch(handleError);
}

export default request;
