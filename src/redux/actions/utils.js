import {UtilTypes} from '../types';

const setConstants = (payload) => {
    return {
        type: UtilTypes.SET_CONSTANTS,
        payload: {
            CONSTANTS: payload,
        },
    };
};

const setIsOnline = (payload) => {
    return {
        type: UtilTypes.SET_IS_ONLINE,
        payload: {
            isOnline: payload,
        },
    };
};

export {setConstants, setIsOnline};
