import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Second} from '../../screens/home';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
    const scheme = useColorScheme();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#dddec3"
            inactiveColor="#fff"
            barStyle={{ backgroundColor:  scheme === 'dark' ? Colors.darker : Colors.bg }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={27} />
                    ),
                }}
            />
            <Tab.Screen
                name="Activity"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={27} />
                    ),
                }}
            />
            <Tab.Screen
                name="Journey"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Journey',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="delete" color={color} size={27} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={27} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
