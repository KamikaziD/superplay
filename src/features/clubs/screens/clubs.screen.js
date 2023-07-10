import React, { useState } from 'react'
import { StatusBar, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { ClubInfo } from '../components/club-info.component'
import {
    ListView,
    Scroller,
    SearchView,
    SearchInput,
} from '../components/styled.components'

const testData = [
    {
        id: 1,
        name: 'Royal Paddle Club',
        address: 'Durban',
        photos: 500,
        description: 'Paddle Club fit for Kings',
        icon: '',
        openingHours: '',
        rating: 4,
        isClosedTmp: false,
    },
    {
        id: 2,
        name: 'Umhlanga Paddle Club',
        address: 'Umhlanga',
        photos: 300,
        description: 'Paddle Club that Rocks',
        icon: '',
        openingHours: '',
        rating: 4,
        isClosedTmp: false,
    },
    {
        id: 3,
        name: 'Pirates Paddle Club',
        address: 'Durban North',
        photos: 370,
        description: 'Aaarrrggh, Paddle me balls',
        icon: '',
        openingHours: '',
        rating: 4,
        isClosedTmp: false,
    },
    {
        id: 4,
        name: 'Hillcrest Outdoor Paddle Club',
        address: 'Hillcrest',
        photos: 371,
        description: 'Paddle Club in the hills',
        icon: '',
        openingHours: '',
        rating: 4,
        isClosedTmp: false,
    },
]

export const ClubsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const onChangeSearch = (e) => {
        console.log(e)
        return setSearchQuery(e)
    }
    testData.sort((a, b) => {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    })

    const filteredData = testData.filter((club) => {
        return (
            club.name
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase()) ||
            club.address
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
                <SearchView style={styles.search}>
                    <SearchInput
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        onClearIconPress={() => {
                            console.log('Cleared Search')
                            setSearchQuery('')
                        }}
                        showDivider={true}
                        value={searchQuery}
                    />
                </SearchView>
                <ListView>
                    <FlatList
                        data={filteredData}
                        renderItem={(club) => <ClubInfo club={club.item} />}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ padding: 10 }}
                    />
                </ListView>
            </SafeAreaView>
            <StatusBar style="auto" />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#5fa8d3',
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
        marginBottom: 20,
    },
})
