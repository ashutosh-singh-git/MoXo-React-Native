import {UtilTypes} from '../types';

const setConstants = (constants) => {
    return {
        type: UtilTypes.SET_CONSTANTS,
        payload: {
            CONSTANTS: constants,
        },
    };
};

export {setConstants};
