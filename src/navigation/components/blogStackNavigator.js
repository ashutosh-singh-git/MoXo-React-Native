import React from 'react';
import {Home, Second} from '../../screens/home';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function BlogStackNavigator() {
    const {COLORS} = useSelector((state) => state)['Utils'];
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
                name={'Home'}
                component={Home}
                options={{
                    title: 'Moxo',
                    headerStyle: {
                        backgroundColor: COLORS.bg,
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
                        backgroundColor: COLORS.bg,
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
