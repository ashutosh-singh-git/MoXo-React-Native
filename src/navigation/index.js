import 'react-native-gesture-handler';
import React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer, StackActions} from '@react-navigation/native';
import {StatusBar, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import BottomNavigation from './components/bottomNavigation';
import {useSelector} from 'react-redux';

export const navigationRef = React.createRef();

export function navigate(name, params = {}) {
    navigationRef.current?.navigate(name, params);
}

export function replace(name, params = {}) {
    navigationRef.current.dispatch(StackActions.replace(name, params));
}

export function goBack() {
    navigationRef.current?.goBack();
}

function RootNavigation() {
    const {CONSTANTS, COLORS} = useSelector((state) => state)['Utils'];
    const linking = {
        prefixes: ['https://app.moxo.com', 'moxo-app://'],
    };
    return (
        <NavigationContainer
            onReady={() => RNBootSplash.hide({fade: true})}
            ref={navigationRef}
            linking={linking}
            fallback={<Text>Loading...</Text>}
            theme={CONSTANTS.scheme ? DarkTheme : DefaultTheme}
        >
            <StatusBar backgroundColor={COLORS.bg} barStyle={'light-content'}/>
            <BottomNavigation/>
            {/*<BlogStackNavigator/>*/}
        </NavigationContainer>
    );
}

export default RootNavigation;
