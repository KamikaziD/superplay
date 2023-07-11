import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { theme } from './src/infrastructure/theme'
import { ClubsScreen } from './src/features/clubs/screens/clubs.screen'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

// const isAndroid = Platform.OS === 'android'

function MapScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Map Screen</Text>
        </View>
    )
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

function SignIn() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>SignIn!</Text>
        </View>
    )
}

function SignUp() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>SignUp!</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator()

function MyTabs() {
    return isSignedIn ? (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Clubs') {
                        iconName = focused
                            ? 'ios-bookmarks'
                            : 'ios-bookmarks-outline'
                    } else if (route.name === 'Settings') {
                        iconName = focused
                            ? 'ios-settings'
                            : 'ios-settings-outline'
                    } else if (route.name === 'Map') {
                        iconName = focused ? 'ios-earth' : 'ios-earth-outline'
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    )
                },
                headerShown: false,
                tabBarActiveTintColor: '#5fa8d3',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Clubs" component={ClubsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    ) : (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'SignIn') {
                        iconName = focused ? 'log-in' : 'log-in-outline'
                    } else if (route.name === 'SignUp') {
                        iconName = focused ? 'pencil' : 'pencil-outline'
                    } else if (route.name === 'Map') {
                        iconName = focused ? 'ios-earth' : 'ios-earth-outline'
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    )
                },
                headerShown: false,
                tabBarActiveTintColor: '#5fa8d3',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="SignIn" component={SignIn} />
            <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
    )
}
const isSignedIn = true
export default function App() {
    return (
        <>
            <PaperProvider>
                <NavigationContainer>
                    <MyTabs />
                </NavigationContainer>
                <ExpoStatusBar style="auto" />
            </PaperProvider>
            <ExpoStatusBar />
        </>
    )
}
