import {UtilTypes} from '../types';

const setConstants = (constants) => {
    return {
        type: UtilTypes.SET_CONSTANTS,
        payload: {
            CONSTANTS: constants
        }
    };
};

const setColors = (colors) => {
    return {
        type: UtilTypes.SET_COLORS,
        payload: {
            COLORS: colors
        }
    };
}

export {setConstants , setColors};
