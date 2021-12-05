import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Second} from '../screens/home';
import {StatusBar} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

function RootNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.black} />
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{title: 'Moxo'}}
        />
        <Stack.Screen
          name={'Second'}
          component={Second}
          options={{title: 'Second'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
