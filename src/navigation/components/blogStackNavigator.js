import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import {Blog, WebView} from '../../screens';

const Stack = createStackNavigator();

function BlogStackNavigator() {
    const {colors} = useTheme();
    return (
        <Stack.Navigator initialRouteName={'Blog'}>
            <Stack.Screen
                name={'Blog'}
                component={Blog}
                options={{
                    headerShown: false,
                    title: 'Moxo',
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        color: '#fff',
                        fontFamily: 'Rubik-Medium',
                        fontSize: 25,
                    },
                    // headerLeft: () => HamburgerNavigation(navigation),
                    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                }}
            />
            <Stack.Screen
                name={'WebView'}
                component={WebView}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                }}
            />
        </Stack.Navigator>
    );
}

export default BlogStackNavigator;
