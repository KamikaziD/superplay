import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, View, Animated, Button } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

import { StyledButton, StyledCover, StyledText } from './styled.components'

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
    return <Avatar.Icon {...props} icon="tennis" />
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

                        <Button
                            style={{
                                color: `${(props) =>
                                    props.theme.colors.ui.primary}`,
                            }}
                            title="Book Now"
                            onPress={pressed ? fadeIn : fadeOut}
                        />
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
        backgroundColor: '#aa005530',
        color: '#fff',
    },
})
