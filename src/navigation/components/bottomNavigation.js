import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from '../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Activity, Blog, Journey} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
                    tabBarLabel: ({focused, color}) =>
                        tabLabel("Blog", {focused, color}),
                    tabBarIcon: ({focused, color}) =>
                        tabIcon("blogger", {focused, color}),
                    headerRight: headerRight,
                }}
            />
            <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarLabel: ({focused, color}) =>
                        tabLabel("Activity", {focused, color}),
                    tabBarIcon: ({focused, color}) =>
                        tabIcon("contacts-outline", {focused, color})
                }}
            />
            <Tab.Screen
                name="Journey"
                component={Journey}
                options={{
                    tabBarLabel: ({focused, color}) =>
                        tabLabel("Journey", {focused, color}),
                    tabBarIcon: ({focused, color}) =>
                        tabIcon("motorbike", {focused, color})
                }}
            />
        </Tab.Navigator>
    );
}

const tabIcon = (name, {focused, color}) => (
    <MaterialCommunityIcons
        style={{
            width: 30,
            marginBottom: focused ? 3 : 0,
        }}
        name={name}
        color={color}
        size={30}/>
);

const tabLabel = (name, {focused, color}) => {
    return focused ? <Text style={{
        paddingLeft: 20,
        color: color,
        fontFamily: 'Rubik-Medium',
        fontSize: 14,
        textTransform: 'uppercase',
    }}>
        {name}
    </Text> : null;
};

const headerRight = () => (
    <View
        style={{
            display: 'flex',
            flexDirection: 'row',
            height: "100%",
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: 90
        }}
    >
        <TouchableOpacity>
            <FontAwesome5 name={"search"} color={"#fff"} size={20}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialCommunityIcons name={"sort"} color={"#fff"} size={28}/>
        </TouchableOpacity>
    </View>
);

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
