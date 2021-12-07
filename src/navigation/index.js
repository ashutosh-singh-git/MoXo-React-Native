import 'react-native-gesture-handler';
import React from 'react';
import {
    NavigationContainer,
    StackActions,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {Home, Second} from '../screens/home';
import {StatusBar, Text, useColorScheme} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import RNBootSplash from 'react-native-bootsplash';
import Tabs from './components/Tabs';

const Stack = createStackNavigator();

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
            <StatusBar backgroundColor={scheme === 'dark' ? Colors.black : Colors.bg} barStyle={'light-content'}/>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        title: 'Moxo',
                        headerStyle: {
                            backgroundColor: scheme === 'dark' ? Colors.black : Colors.bg,
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }}
                />
                <Stack.Screen
                    name={'Second'}
                    component={Second}
                    options={{
                        title: 'Second',
                        headerStyle: {
                            backgroundColor: scheme === 'dark' ? Colors.black : Colors.bg,
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerLeft:false,
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;
