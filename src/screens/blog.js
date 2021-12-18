import React, {Component} from 'react';
import {FlatList, Modal, SafeAreaView, View} from 'react-native';
import {BlogCard} from '../components';
import Apis from '../services/apis/Apis';
import {connect} from 'react-redux';
import {WebView} from 'react-native-webview';
import {setWebview} from '../redux/actions';


class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        Apis
            .getFeed('india', 2)
            .then(res => {
                // console.log(res['hits']);
                this.setState({data: res['hits']});
            });
    }

    renderItem = ({item}) => {
        return <BlogCard item={item} navigation={this.props.navigation}/>;
    };

    render() {
        const {data} = this.state;
        return (
            <SafeAreaView>
                <FlatList
                    style={{paddingVertical: 5}}
                    data={data}
                    keyExtractor={(item) => {
                        return item.id.toString();
                    }}
                    renderItem={this.renderItem}
                    ListFooterComponent={
                        <View style={{
                            height: 70,
                        }}/>
                    }/>
                <Modal
                    onRequestClose={() => this.props.setWebview({modal:false})}
                    visible={this.props.webView.modal}
                    style={{flex:1}}
                >
                    <WebView
                        source={{ uri: this.props.webView.url }}
                        javaScriptEnabled={true}
                    />
                </Modal>
            </SafeAreaView>
        );
    }

}

const mapStateToProps = (state) => {
    const {webView} = state.blog;
    return{
        webView
    }
};

const mapDispatchToProps = {
    setWebview
};


export default connect(mapStateToProps,mapDispatchToProps)(Blog);
