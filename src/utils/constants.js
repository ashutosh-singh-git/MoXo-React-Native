import React from 'react';
import {useColorScheme} from 'react-native';

const CONSTANTS = () => {
    const scheme = useColorScheme() === 'dark';

    return {
        scheme,
    };
};

export {CONSTANTS};
