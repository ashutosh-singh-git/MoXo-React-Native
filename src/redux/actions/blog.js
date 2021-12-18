import {BlogTypes} from '../types';

const setWebview = (payload) => {
    return {
        type: BlogTypes.SET_WEBVIEW,
        payload: {
            webView: payload,
        },
    };
};

export {setWebview};
