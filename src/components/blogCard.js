import React from 'react';
import {Card, Chip, Paragraph, Title} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

function BlogCard({item}) {
    const {colors} = useTheme();
    return (
        <Card style={styles.card}>
            <Card.Cover source={{uri: item.webformatURL}}/>
            <Chip style={{
                ...styles.cardCoverText,
                backgroundColor: colors.surface,
                color: colors.text,
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
                    color: colors.text,
                }}
                >
                    Hello
                </Text>
                <Text
                    style={{
                        ...styles.footerText,
                        color: colors.text,
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
