import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './component/Sign/Login'

import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import BottomStack from './navigation/BottomStack'
import { Image, StyleSheet } from 'react-native'
import SignUp from './component/Sign/SignUp'
import SignIn from './component/Sign/SignIn'
import { CalanderDetail } from './component/Statistic/CalanderDetail'
import { SetRoomStructure } from './component/Settings/SetRoomStructure'
import { SetSchedule } from './component/Settings/SetSchedule'
import { AddSchedule } from './component/Settings/AddSchedule'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
    const [loaded] = useFonts({
        GothicBold: require('./assets/fonts/GothicA1-Bold.ttf'),
        GothicLight: require('./assets/fonts/GothicA1-Light.ttf'),
        GothicMedium: require('./assets/fonts/GothicA1-Medium.ttf'),
        GothicThin: require('./assets/fonts/GothicA1-Thin.ttf'),
        UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
        UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf'),
        UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
        UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
    })
    if (!loaded) return null
    if (loaded) {
        return (
            <NavigationContainer>
                <StatusBar style="auto" />
                <Stack.Navigator
                    screenOptions={() => ({
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                    })}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="Main" component={BottomStack} />
                    <Stack.Screen
                        name="CalanderDetail"
                        component={CalanderDetail}
                    />
                    <Stack.Screen
                        name="SetRoomStructure"
                        component={SetRoomStructure}
                    />

                    <Stack.Screen name="SetSchedule" component={SetSchedule} />
                    <Stack.Screen name="AddSchedule" component={AddSchedule} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 25,
        height: 25,
    },
})
