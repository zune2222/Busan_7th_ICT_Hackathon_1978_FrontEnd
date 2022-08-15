import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import TimeTableView, { genTimeBlock } from '../react-native-timetable'
import { Colors } from '../../Setting'
export const SetSchedule = ({ navigation }) => {
    const [eventsData, setEventsData] = useState([])
    useEffect(() => {
        setEventsData([
            {
                title: '코딩',
                startTime: new Date().setHours(5),
                endTime: new Date().setHours(7),
                location: '책상',
                extra_descriptions: ['대회 준비'],
            },
            {
                title: '논설실',
                startTime: new Date().setHours(9),
                endTime: new Date().setHours(12),
                location: '책상',
                extra_descriptions: ['살려줘'],
            },
        ])
    }, [])
    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <View
                    style={{
                        marginLeft: 20,
                        marginBottom: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={styles.mainText}>일정짜기</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('AddSchedule')
                        }}
                    >
                        <Image
                            style={[styles.cardImg, { marginRight: 10 }]}
                            source={require('../../assets/image/plus.png')}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <TimeTableView
                        formatDateHeader="dddd"
                        locale="ko"
                        nDays={7}
                        pivotTime={5}
                        pivotEndTime={29}
                        pivotDate={new Date()}
                        headerStyle={styles.headerStyle}
                        events={eventsData}
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
    headerStyle: {
        backgroundColor: Colors.buttonA2,
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
        width: 35,
        height: 35,
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
