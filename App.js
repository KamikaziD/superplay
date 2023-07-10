import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { theme } from './src/infrastructure/theme'
import { ClubsScreen } from './src/features/clubs/screens/clubs.screen'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

// const isAndroid = Platform.OS === 'android'

function HomeScreen() {
    return <ClubsScreen />
}

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Settings!</Text>
        </View>
    )
}
const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <>
            <PaperProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName

                                if (route.name === 'Home') {
                                    iconName = focused
                                        ? 'ios-list'
                                        : 'ios-list-outline'
                                } else if (route.name === 'Settings') {
                                    iconName = focused
                                        ? 'ios-cog'
                                        : 'ios-cog-outline'
                                }

                                // You can return any component that you like here!
                                return (
                                    <Ionicons
                                        name={iconName}
                                        size={size}
                                        color={color}
                                    />
                                )
                            },
                            tabBarActiveTintColor: '#5fa8d3',
                            tabBarInactiveTintColor: 'gray',
                        })}
                    >
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen
                            name="Settings"
                            component={SettingsScreen}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
                <ExpoStatusBar style="auto" />
            </PaperProvider>
        </>
    )
}
