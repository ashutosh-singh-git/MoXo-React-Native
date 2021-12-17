import React, {Component} from 'react';
import {Text, View} from 'react-native';

class WebView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Rubik-Light'}}>Webview Screen</Text>
            </View>
        );
    }
}

export default WebView;
