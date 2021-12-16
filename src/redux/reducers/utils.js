import {UtilTypes} from '../types';

const initialState = {
    CONSTANTS: {},
};

const Utils = (state = initialState, {type, payload}) => {
    switch (type) {
        case UtilTypes.SET_CONSTANTS: {
            return {...state, ...payload};
        }
        default: {
            return state;
        }
    }
};

export {Utils};
