import React, { useState } from 'react'
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import { Searchbar } from 'react-native-paper'
import { ClubInfo } from '../components/club-info.component'

const testData = [
    {
        id: 1,
        club: 'Royal Paddle Club',
        location: 'Durban',
        img: 500,
        description: 'Paddle Club fit for Kings',
    },
    {
        id: 2,
        club: 'Umhlanga Paddle Club',
        location: 'Umhlanga',
        img: 300,
        description: 'Paddle Club that Rocks',
    },
    {
        id: 3,
        club: 'Pirates Paddle Club',
        location: 'Durban North',
        img: 370,
        description: 'Aaarrrggh, Paddle me balls',
    },
]

export const ClubsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const onChangeSearch = (e) => {
        console.log(e)
        return setSearchQuery(e)
    }
    const filteredData = testData.filter((club) => {
        return (
            club.club
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase()) ||
            club.location
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase()) ||
            club.description
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
        )
    })
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.search}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        onClearIconPress={() => {
                            console.log('Cleared Search')
                            setSearchQuery('')
                        }}
                        showDivider={true}
                        value={searchQuery}
                    />
                </View>
                <View style={styles.list}>
                    <ScrollView style={styles.scroll}>
                        {filteredData.map((club) => {
                            return <ClubInfo key={club.id} data={club} />
                        })}
                    </ScrollView>

                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
            <StatusBar style="auto" />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 16,
        backgroundColor: '#ffffff',
    },
    list: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        padding: 5,
    },
})
