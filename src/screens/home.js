import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Second');
        }}>
        <Text style={{fontFamily:'Rubik-Bold'}}>Second</Text>
      </TouchableOpacity>
      <Text style={{fontFamily:'Rubik-Light'}}>Home Screen</Text>
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
        <Text style={{fontFamily:'Rubik-Bold'}}>Home</Text>
      </TouchableOpacity>
      <Text style={{fontFamily:'Rubik-Light'}}>Second Screen</Text>
    </View>
  );
}

export {Home, Second};
