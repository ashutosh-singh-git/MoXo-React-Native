import {DefaultTheme} from 'react-native-paper';

export const Theme = {
    default: {
        ...DefaultTheme,
        dark: false,
        roundness: 4,
        colors: {
            primary: '#4A6362',
            accent: '#4A6362',
            background: '#FFFFFF',
            surface: '#FFFFFF',
            error: '#B00020',
            text: '#000000',
            onSurface: '#000000',
            // disabled: color(black).alpha(0.26).rgb().string(),
            // placeholder: color(black).alpha(0.54).rgb().string(),
            // backdrop: color(black).alpha(0.5).rgb().string(),
            // notification: pinkA400,
        },
        animation: {
            scale: 1.0,
        },
    },
    dark: {
        ...DefaultTheme,
        dark: true,
        mode: 'adaptive',
        colors: {
            primary: '#000000',
            accent: '#000000',
            background: '#000000',
            surface: '#000000',
            error: '#CF6679',
            onSurface: '#FFFFFF',
            text: '#FFFFFF',
        },
    },
};
