export function handleResponse(response) {
    if (response.results) {
        return response.results;
    }

    if (response.data) {
        return response.data;
    }

    return response;
}

export function handleError(error) {
    if (error.data) {
        console.log('ERROR:', error.data);
    } else if (error.response) {
        console.log('Status:', error.response.status);
        console.log('Data:', error.response.data);
        console.log('Headers:', error.response.headers);
    } else if (error.message) {
        console.log('ERROR:', error.message);
    } else {
        console.log('ERROR:', error);
    }

    return Promise.reject(error.data || error.response || error.message || error);
}
