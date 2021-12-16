import request from './AxiosApiService';

const getFeed = (q, p) => {
    return request({
        url: '/api/',
        method: 'GET',
        params: {key: '24052040-0b669836e061e56c28c501665', q: q, page: p},
    });
};

const postFeed = () => {
    // return request({
    //     url: '/feed/post',
    //     method: 'POST'
    // });
};

const Apis = {
    getFeed, postFeed,
};

export default Apis;

/**
 * Base URL already defined in AxiosApiService
 *
 * request calling
 return request({
        url: '/feed/',
        method: 'GET'
        params: {page: 1, sortBy: 'name'},
        headers: { }
    });
 *
 * Calling Apis
 Apis
 .getFeed()
 .then((response) => {
            console.log(response);
          });
 */

