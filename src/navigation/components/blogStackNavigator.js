import React from 'react';
import {Home, Second} from '../../screens/home';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../../utils';

const Stack = createStackNavigator();

function BlogStackNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
                name={'Home'}
                component={Home}
                options={{
                    title: 'Moxo',
                    headerStyle: {
                        backgroundColor: Colors().bg,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // headerLeft: () => HamburgerNavigation(navigation),
                    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                }}
            />
            <Stack.Screen
                name={'Second'}
                component={Second}
                options={{
                    title: 'Second',
                    headerStyle: {
                        backgroundColor: Colors().bg,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerLeft: false,
                    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                }}
            />
        </Stack.Navigator>
    );
}

export default BlogStackNavigator;
