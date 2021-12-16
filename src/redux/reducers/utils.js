import {UtilTypes} from '../types';

const initialState = {
    CONSTANTS: {},
    COLORS: {}
}

const Utils = (state = initialState, {type, payload}) => {
    switch (type) {
        case UtilTypes.SET_CONSTANTS: {
            return {...state, ...payload};
        }
        case UtilTypes.SET_COLORS: {
            return {...state, ...payload};
        }
        default: {
            return state;
        }
    }
};

export {Utils};
