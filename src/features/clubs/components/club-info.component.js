import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, View, Animated, Button } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

import { StyledButton, StyledCover, StyledText } from './styled.components'
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ClubCard = styled(Card)`
    background-color: #fff;
    border-radius: 10px;
    margin: 5px;
    padding-left: 5px;
    padding-right: 5px;
    shadow-color: '#000';
    shadow-offset: 5px 5px;
    shadow-opacity: 0.15;
    shadow-radius: 3px;
    elevation: 5;
`

const LeftContent = (props) => {
    return (
        <Avatar.Icon
            {...props}
            style={{
                backgroundColor: 'none',
                borderWidth: 2,
                borderColor: '#1982c4',
                borderBottomRightRadius: 1,
                borderStyle: 'solid',
            }}
            color="#1982c4"
            icon="tennis"
        />
    )
}

export const ClubInfo = ({ club }) => {
    const data = club.club
    const {
        name,
        icon,
        photos,
        address,
        description,
        openingHours,
        rating,
        isClosedTmp,
    } = club

    const fadeAnim = useRef(new Animated.Value(1)).current
    const [pressed, setPressed] = useState(false)

    useEffect(() => {
        console.log(pressed)
    }, [pressed])

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 2 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start()
        setPressed(!pressed)
    }

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 2 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        }).start()
        setPressed(!pressed)
    }
    return (
        <>
            <ClubCard>
                <Card.Title
                    title={name}
                    subtitle={address}
                    left={LeftContent}
                />
                <Animated.View style={[{ opacity: fadeAnim }]}>
                    <StyledCover
                        source={{ uri: `https://picsum.photos/${photos}` }}
                    />
                </Animated.View>
                <Card.Content styles={styles.content}>
                    <Text variant="bodyLarge">{name}</Text>
                    <View style={styles.row}>
                        <Text variant="bodySmall">{description}</Text>
                        <TouchableOpacity
                            icon="camera"
                            activeOpacity={0.2}
                            disabled={false}
                            style={styles.button}
                            onPress={pressed ? fadeIn : fadeOut}
                        >
                            <Text style={styles.text}>Check</Text>
                            <Text style={styles.text}>Availability</Text>
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </ClubCard>
        </>
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 35,
        width: 'auto',
        padding: 5,
        backgroundColor: '#1982c4',
        color: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.35,
        shadowRadius: 2,
        elevation: 5,
    },
    text: { color: '#fff', fontSize: 10, fontWeight: 'light' },
})
