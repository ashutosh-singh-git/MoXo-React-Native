import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Journey extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Rubik-Light'}}>Journey Screen</Text>
            </View>
        );
    }
}

export default Journey;
