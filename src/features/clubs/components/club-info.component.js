import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="tennis" />

export const ClubInfo = (props) => {
    const data = props.data
    return (
        <>
            <Card style={styles.container}>
                <Card.Title
                    title={data.club}
                    subtitle={data.location}
                    left={LeftContent}
                />
                <Card.Cover
                    style={styles.cover}
                    source={{ uri: `https://picsum.photos/${data.img}` }}
                />
                <Card.Content styles={styles.content}>
                    <Text variant="bodyMedium">{data.club}</Text>
                    <View style={styles.row}>
                        <Text variant="bodyMedium">{data.description}</Text>

                        {/* <Text variant="bodySmall">location</Text> */}
                        <Button style={styles.button}>Book Now</Button>
                    </View>
                </Card.Content>

                {/* <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions> */}
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
    },
    content: {},
    cover: {
        marginBottom: 2,
        marginTop: 2,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    button: {
        backgroundColor: '#aa005530',
        color: '#fff',
    },
})
