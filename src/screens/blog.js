import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {BlogCard} from '../components';

function Blog() {
    const data = [1, 2, 3, 4];
    return (
        <SafeAreaView>
            <FlatList style={{paddingVertical: 5}} data={data}
                      ListFooterComponent={
                          <View style={{
                              height: 25,
                          }}/>
                      } renderItem={BlogCard}/>
        </SafeAreaView>
    );
}

export default Blog;
