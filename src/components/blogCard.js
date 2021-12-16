import React from 'react';
import {Card, Chip, Paragraph, Title} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

function BlogCard({item}) {
    const {COLORS} = useSelector((state) => state)['Utils'];
    return (
        <Card style={styles.card}>
            <Card.Cover source={{uri: item.webformatURL}}/>
            <Chip style={{
                    ...styles.cardCoverText,
                    backgroundColor: COLORS.textBg,
                    color: COLORS.textColor
                }}
                  icon={({size, color}) => (
                      <MaterialIcons name={'person'} color={color} size={size}/>
                  )}>
                {item.user}
            </Chip>
            <Card.Content>
                <Title style={styles.cardTitle}>{item.tags}</Title>
                <Paragraph style={styles.cardContent}>{item.pageURL}</Paragraph>
            </Card.Content>
            <View style={styles.cardFooter}>
                <Text style={{
                        ...styles.footerText,
                        color: COLORS.textColor
                    }}
                >
                    Hello
                </Text>
                <Text
                    style={{
                        ...styles.footerText,
                        color: COLORS.textColor
                    }}
                >
                    World
                </Text>
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
        right: 0,
        bottom: 110,
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
        fontFamily: 'Rubik-Medium',
    },
});

export default BlogCard;
