import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Rubik-Light'}}>Activity Screen</Text>
            </View>
        );
    }
}

export default Activity;
