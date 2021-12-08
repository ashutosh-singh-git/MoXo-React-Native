import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Colors} from '../utils';

function AppBar({title}) {
    return (
        <Appbar.Header style={{backgroundColor: Colors().bg}}>
            <Appbar.Content title={title} titleStyle={styles.title}/>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontFamily: 'Rubik-Medium',
        fontSize: 25,
    },
});

export default AppBar;
