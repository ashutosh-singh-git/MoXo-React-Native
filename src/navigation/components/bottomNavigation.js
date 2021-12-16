import React from 'react';
import {Text} from 'react-native';
import {Dimensions} from '../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Activity, Blog, Journey} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    const {colors} = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: '#fff',
                tabBarActiveBackgroundColor: '#fff',
                tabBarInactiveBackgroundColor: colors.primary,
                tabBarItemStyle: {
                    paddingLeft: 10,
                    margin: 6,
                    borderRadius: 5,
                },
                tabBarStyle: {
                    position: 'absolute',
                    width: Dimensions.windowWidth - 30,
                    bottom: 5,
                    right: 15,
                    left: 15,
                    backgroundColor: colors.primary,
                    borderRadius: 10,
                    elevation: 5,
                },
                tabBarLabelPosition: 'beside-icon',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontFamily: 'Rubik-Medium',
                    fontSize: 25,
                },
            }}
        >
            <Tab.Screen
                name="Blog"
                component={Blog}
                options={{
                    tabBarLabel: ({focused, color}) => {
                        return focused ? <Text style={{
                            paddingLeft: 20,
                            color: color,
                            fontFamily: 'Rubik-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                            Blog
                        </Text> : null;
                    },
                    tabBarIcon: ({focused, color}) => (
                        <MaterialCommunityIcons
                            style={{
                                width: 30,
                                marginBottom: focused ? 3 : 0,
                            }}
                            name="blogger"
                            color={color}
                            size={30}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarLabel: ({focused, color}) => {
                        return focused ? <Text style={{
                            paddingLeft: 20,
                            color: color,
                            fontFamily: 'Rubik-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                            Activity
                        </Text> : null;
                    },
                    tabBarIcon: ({focused, color}) => (
                        <MaterialCommunityIcons
                            style={{
                                width: 30,
                                marginBottom: focused ? 3 : 0,
                            }}
                            name="contacts-outline"
                            color={color}
                            size={30}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Journey"
                component={Journey}
                options={{
                    tabBarLabel: ({focused, color}) => {
                        return focused ? <Text style={{
                            paddingLeft: 20,
                            color: color,
                            fontFamily: 'Rubik-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                            Journey
                        </Text> : null;
                    },
                    tabBarIcon: ({focused, color}) => (
                        <MaterialCommunityIcons
                            style={{
                                width: 30,
                                marginBottom: focused ? 3 : 0,
                            }}
                            name="motorbike"
                            color={color}
                            size={30}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// const styles = StyleSheet.create({
//     main: {
//         flexDirection: "row",
//         width: Dimensions.windowWidth - 10,
//         borderRadius: 10,
//         paddingHorizontal: 20,
//         paddingVertical: 5,
//         alignSelf: 'center',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 5,
//     },
//     title: {
//         fontFamily: "Rubik-Regular",
//         textAlign: 'center'
//     },
// });

export default BottomNavigation;
