import 'react-native-gesture-handler';
import React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer, StackActions} from '@react-navigation/native';
import {Home, Second} from '../screens/home';
import {StatusBar, Text, useColorScheme} from 'react-native';
import {Colors} from '../utils';
import RNBootSplash from 'react-native-bootsplash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Blog} from '../screens';
import BottomNavigation from './components/bottomNavigation';

const Tab = createBottomTabNavigator();

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
    const scheme = useColorScheme();
    const linking = {
        prefixes: ['https://app.moxo.com', 'moxo-app://'],
    };
    return (
        <NavigationContainer
            onReady={() => RNBootSplash.hide({fade: true})}
            ref={navigationRef}
            linking={linking}
            fallback={<Text>Loading...</Text>}
            theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <StatusBar backgroundColor={Colors().bg} barStyle={'light-content'}/>
            <BottomNavigation/>
            {/*<BlogStackNavigator/>*/}
        </NavigationContainer>
    );
}

export default RootNavigation;
