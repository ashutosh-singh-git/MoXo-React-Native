import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import {Modal} from 'react-native';

class WebViewComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal>
                <WebView
                    source={{ uri: this.props.url }}
                    javaScriptEnabled={true}
                />
            </Modal>
        );
    }
}

export default WebViewComponent;
