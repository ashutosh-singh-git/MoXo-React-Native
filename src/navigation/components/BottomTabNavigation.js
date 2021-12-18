import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Activity, Blog, Journey} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
    const {colors} = useTheme();
    const tabs = [
        {
            name: 'Blog',
            iconName: 'blogger',
            component: Blog,
            headerRight: headerRight,
        },
        {
            name: 'Activity',
            iconName: 'contacts-outline',
            component: Activity,
        },
        {
            name: 'Journey',
            iconName: 'motorbike',
            component: Journey,
        },
    ];
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    ...styles.tabBarConatiner,
                    backgroundColor: colors.primary,
                },
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: styles.headerTitleStyle,
            }}
        >
            {tabs.map((item, idx) => (
                <Tab.Screen
                    key={idx}
                    name={item['name']}
                    component={item['component']}
                    options={{
                        headerRight: item['headerRight'],
                        tabBarButton: (props) =>
                            tabBarButton({...props, item, colors}),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}

const headerRight = () => (
    <View style={styles.headerRightContainer}>
        <TouchableOpacity>
            <FontAwesome5 name={'search'} color={'#fff'} size={20}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialCommunityIcons name={'sort'} color={'#fff'} size={28}/>
        </TouchableOpacity>
    </View>
);

const tabBarButton = (props) => {
    const {item, accessibilityState, onPress, colors} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate('bounceIn');
            // viewRef.current.animate({
            //     0: {
            //         scaleX: 0,
            //     },
            //     1: {
            //         scaleX: 1,
            //     },
            // });
        } else {
            viewRef.current.animate('rubberBand');
        }
    }, [focused]);

    return (
        <TouchableOpacity onPress={onPress} style={styles.tabButtonContainer}>
            <Animatable.View
                ref={viewRef}
                animation={'bounceIn'}
                duration={2000}
                style={[
                    styles.tabButton,
                    {backgroundColor: focused ? '#fff' : colors['primary']},
                ]}
            >
                <MaterialCommunityIcons
                    style={styles.tabButtonIcon}
                    name={item['iconName']}
                    color={focused ? colors['primary'] : '#fff'}
                    size={focused ? 30 : 35}/>
                {focused &&
                <Text
                    style={{
                        ...styles.tabButtonText,
                        color: focused ? colors['primary'] : '#fff',
                    }}
                >
                    {item.name}
                </Text>
                }
            </Animatable.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    headerTitleStyle: {
        color: '#fff',
        fontFamily: 'Rubik-Medium',
        fontSize: 25,
    },
    headerRightContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 90,
    },
    tabBarConatiner: {
        position: 'absolute',
        bottom: 5,
        right: 15,
        left: 15,
        borderRadius: 10,
        elevation: 5,
    },
    tabButtonContainer: {
        flexGrow: 1,
    },
    tabButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
        borderRadius: 5,
    },
    tabButtonText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 16,
        textTransform: 'uppercase',
        marginLeft: 2.5,
    },
    tabButtonIcon: {
        marginRight: 2.5,
    },
});

export default BottomTabNavigation;
