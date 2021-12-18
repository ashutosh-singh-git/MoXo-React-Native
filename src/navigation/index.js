import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {StatusBar, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import BottomTabNavigation from './components/bottomTabNavigation';
import {useSelector} from 'react-redux';
import {Theme} from '../utils';

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
    const {CONSTANTS} = useSelector((state) => state)['utils'];
    const linking = {
        prefixes: ['https://app.moxo.com', 'moxo-app://'],
    };
    return (
        <NavigationContainer
            onReady={() => RNBootSplash.hide({fade: true})}
            ref={navigationRef}
            linking={linking}
            fallback={<Text>Loading...</Text>}
            theme={CONSTANTS.scheme ? Theme.dark : Theme.default}
        >
            <StatusBar
                backgroundColor={
                    CONSTANTS.scheme ?
                        Theme.dark.colors.primary :
                        Theme.default.colors.primary
                } barStyle={'light-content'}/>
            <BottomTabNavigation/>
            {/*<BlogStackNavigator/>*/}
        </NavigationContainer>
    );
}

export default RootNavigation;
