import React, {Component} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {BlogCard} from '../components';
import Apis from '../services/apis/Apis';


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
        return <BlogCard item={item}/>;
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
            </SafeAreaView>
        );
    }

}

export default Blog;
