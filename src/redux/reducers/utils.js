import {UtilTypes} from '../types';

const initialState = {
    CONSTANTS: {},
    isOnline: false
};

const Utils = (state = initialState, {type, payload}) => {
    switch (type) {
        case UtilTypes.SET_CONSTANTS: {
            return {...state, ...payload};
        }
        case UtilTypes.SET_IS_ONLINE: {
            return {...state, ...payload};
        }
        default: {
            return state;
        }
    }
};

export {Utils};
