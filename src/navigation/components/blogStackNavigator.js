import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import {Activity, Blog} from '../../screens';

const Stack = createStackNavigator();

function BlogStackNavigator() {
    const {colors} = useTheme();
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
                name={'Home'}
                component={Blog}
                options={{
                    title: 'Moxo',
                    headerStyle: {
                        backgroundColor: colors.primary,
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
                component={Activity}
                options={{
                    title: 'Second',
                    headerStyle: {
                        backgroundColor: colors.primary,
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
