import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {setColors} from '../redux/actions';
import {COLORS} from './colors';
import {useDispatch} from 'react-redux';

const CONSTANTS = () => {
    const dispatch = useDispatch();
    const scheme = useColorScheme() === 'dark';

    useEffect(() => {
        dispatch(setColors(scheme ? COLORS.dark : COLORS.light));
    }, [])

    return {
        scheme,
    };
}

export {CONSTANTS};
