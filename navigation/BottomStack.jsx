import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Settings, StyleSheet } from 'react-native'
import { Main } from '../component/Main/Main'
import { SettingsPage } from '../component/Settings/SettingsPage'
import { Statistic } from '../component/Statistic/Statistic'
import { Community } from '../component/Community/Community'
const Tab = createBottomTabNavigator()
const BottomStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    borderTopColor: '#3c3f44',
                    backgroundColor: '#EEEDED',
                    height: 80,
                    borderTopWidth: 0.2,
                    paddingTop: 10,
                },
                headerShown: true,
                headerTransparent: true,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#71778d',
            })}
        >
            <Tab.Screen
                name="Home"
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={styles.tabIcon}
                            source={
                                focused
                                    ? require('../assets/image/home.png')
                                    : require('../assets/image/homeNotFocus.png')
                            }
                        />
                    ),
                }}
                component={Main}
            ></Tab.Screen>
            <Tab.Screen
                name="Statistic"
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={styles.tabIcon}
                            source={
                                focused
                                    ? require('../assets/image/statistic.png')
                                    : require('../assets/image/statisticNotFocus.png')
                            }
                        />
                    ),
                }}
                component={Statistic}
            ></Tab.Screen>
            <Tab.Screen
                name="Community"
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={styles.tabIcon}
                            source={
                                focused
                                    ? require('../assets/image/community.png')
                                    : require('../assets/image/communityNotFocus.png')
                            }
                        />
                    ),
                }}
                component={Community}
            ></Tab.Screen>
            <Tab.Screen
                name="SettingsPage"
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={styles.tabIcon}
                            source={
                                focused
                                    ? require('../assets/image/settings.png')
                                    : require('../assets/image/settingsNotFocus.png')
                            }
                        />
                    ),
                }}
                component={SettingsPage}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabIcon: {
        width: 25,
        height: 25,
    },
})
export default BottomStack
