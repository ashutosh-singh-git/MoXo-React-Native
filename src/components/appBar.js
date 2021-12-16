import React from 'react';
import {Appbar} from 'react-native-paper';
import {useSelector} from 'react-redux';

function AppBar({title}) {
    const {COLORS} = useSelector((state) => state)['Utils'];
    return (
        <Appbar.Header style={{backgroundColor: COLORS.bg}}>
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
