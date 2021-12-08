import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import AppBar from '../components/appBar';
import {BlogCard} from '../components';

function Blog() {
    const data = [1, 2, 3, 4];
    return (
        <SafeAreaView style={{paddingBottom: 56}}>
            <AppBar title={'Blog'}/>
            <FlatList style={{paddingVertical: 5}} data={data} renderItem={BlogCard}/>
        </SafeAreaView>
    );
}

export default Blog;
