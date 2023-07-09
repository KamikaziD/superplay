import React from 'react'

import { ClubsScreen } from './src/features/clubs/screens/clubs.screen'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

// const isAndroid = Platform.OS === 'android'

export default function App() {
    return (
        <>
            <ClubsScreen />
            <ExpoStatusBar style="auto" />
        </>
    )
}
