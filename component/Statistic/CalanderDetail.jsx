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
export const CalanderDetail = ({ navigation, route }) => {
    const [eventsData, setEventsData] = useState([])
    useEffect(() => {
        setEventsData([
            {
                title: '코딩',
                startTime: genTimeBlock('MON', 9),
                endTime: genTimeBlock('MON', 10, 50),
                location: '책상',
                extra_descriptions: ['대회 준비'],
            },
        ])
    }, [])
    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <View style={{ marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.mainText}>
                        {route.params.data.dateString}
                    </Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <TimeTableView
                        formatDateHeader="dddd"
                        locale="ko"
                        nDays={7}
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
