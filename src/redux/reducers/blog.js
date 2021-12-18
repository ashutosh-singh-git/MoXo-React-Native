import {BlogTypes} from '../types';

const initialState = {
    webView: {
        url: null,
        modal: false
    },
};

export const Blog = (state = initialState, {type, payload}) => {
    switch (type) {
        case BlogTypes.SET_WEBVIEW: {
            return {...state,
                ...payload
            };
        }
        default: {
            return state;
        }
    }
};

