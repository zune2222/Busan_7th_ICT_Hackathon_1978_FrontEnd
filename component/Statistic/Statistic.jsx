import React from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { Calendar } from 'react-native-calendars'
import * as Progress from 'react-native-progress'
export const Statistic = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <View style={{ marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.mainText}>통계</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Calendar
                        style={styles.calanderStyle}
                        markedDates={{
                            '2022-08-15': {
                                selected: true,
                                selectedColor: '#8fceed',
                            },
                            '2022-08-14': {
                                selected: true,
                                selectedColor: '#d2e4fc',
                            },
                            '2022-08-16': {
                                selected: true,
                                selectedColor: '#03acf6',
                            },
                        }}
                        onDayPress={(day) => {
                            navigation.navigate('CalanderDetail', { data: day })
                        }}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    mainText: {
        fontFamily: 'GothicThin',
        fontSize: 40,
        color: 'black',
    },
    cardText: {
        fontFamily: 'GothicLight',
        fontSize: 50,
        color: '#f2f1f7',
        marginTop: 20,
    },
    card: {
        borderRadius: 10,
        width: '80%',
        height: 300,
        backgroundColor: '#f2f5f9',
        shadowColor: '#3b4054',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImg: {
        width: 150,
        height: 150,
    },
    calanderStyle: {
        borderRadius: 10,
        width: '80%',
        shadowColor: '#3b4054',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        paddingBottom: 10,
    },
})
