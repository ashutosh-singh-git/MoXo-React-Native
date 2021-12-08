import React from 'react';
import {Text, View} from 'react-native';

function Home() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Rubik-Light'}}>Home Screen</Text>
        </View>
    );
}

function Second() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Rubik-Light'}}>Second Screen</Text>
        </View>
    );
}

export {Home, Second};

