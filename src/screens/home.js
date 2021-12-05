import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Second');
        }}>
        <Text>Second</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
    </View>
  );
}

function Second({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
      <Text>Second Screen</Text>
    </View>
  );
}

export {Home, Second};
