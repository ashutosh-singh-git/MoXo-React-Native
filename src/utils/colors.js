import React from 'react';
import {useColorScheme} from 'react-native';

export const Colors = () => {
    const scheme = useColorScheme() === 'dark';
    const light = {
        bg: '#4A6362',
    };
    const dark = {
        bg: '#000',
    };
    return scheme ? dark : light;
};
