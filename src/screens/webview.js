import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class WebViewComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <WebView source={{ uri: this.props.url }} />;
    }
}

export default WebViewComponent;
