import 'react-native-gesture-handler';
import React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer, StackActions} from '@react-navigation/native';
import {Home, Second} from '../screens/home';
import {StatusBar, Text, useColorScheme} from 'react-native';
import {Colors} from '../utils';
import RNBootSplash from 'react-native-bootsplash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Blog} from '../screens';

const Tab = createMaterialBottomTabNavigator();

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
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#dddec3"
                inactiveColor="#fff"
                barStyle={{backgroundColor: Colors().bg}}
            >
                <Tab.Screen
                    name="Blog"
                    component={Blog}
                    options={{
                        tabBarLabel: 'Blog',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="blogger" color={color} size={27}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Activity"
                    component={Second}
                    options={{
                        tabBarLabel: 'Activity',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="contacts-outline" color={color} size={27}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Journey"
                    component={Home}
                    options={{
                        tabBarLabel: 'Journey',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="motorbike" color={color} size={27}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;
