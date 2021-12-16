import React from 'react';
import {Card, Chip, Paragraph, Title} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function BlogCard({item}) {
    return (
        <Card style={styles.card}>
            <Card.Cover source={{uri: item.webformatURL}}/>
            <Chip style={styles.cardCoverText}
                  icon={({size, color}) => (
                      <MaterialIcons name={'person'} color={color} size={size}/>
                  )}>{item.user}</Chip>
            <Card.Content>
                <Title style={styles.cardTitle}>{item.tags}</Title>
                <Paragraph style={styles.cardContent}>{item.pageURL}</Paragraph>
            </Card.Content>
            <View style={styles.cardFooter}>
                <Text style={styles.footerText}>Hello</Text>
                <Text style={styles.footerText}>World</Text>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    cardCoverText: {
        position: 'absolute',
        backgroundColor: '#fff',
        right: 0,
        bottom: 100,
        marginHorizontal: 20,
    },
    cardTitle: {
        fontFamily: 'Rubik-Medium',
    },
    cardContent: {
        fontFamily: 'Rubik-Regular',
    },
    cardFooter: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerText: {
        color: '#000',
        fontFamily: 'Rubik-Medium',
    },
});

export default BlogCard;
