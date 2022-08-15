import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Platform,
} from 'react-native'
import TimeTableView, { genTimeBlock } from '../react-native-timetable'
import { Colors, Family } from '../../Setting'
import DateTimePicker from '@react-native-community/datetimepicker'
export const AddSchedule = ({ navigation }) => {
    const [eventsData, setEventsData] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [startShow, setStartShow] = useState(false)
    const [endShow, setEndShow] = useState(false)
    const [endDate, setEndDate] = useState(new Date())
    const [mode, setMode] = useState('time')
    const onChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate
        setStartShow(false)
        setStartDate(currentDate)
    }
    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate
        setEndShow(false)
        setEndDate(currentDate)
    }

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setStartShow(false)
            setEndShow(false)
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode)
    }

    const showTimepicker = () => {
        showMode('time')
    }

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
                    }}
                >
                    <Text style={styles.mainText}>장소</Text>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <TouchableOpacity style={styles.card}>
                            <Text>침대</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card}>
                            <Text>책상</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card}>
                            <Text>싸이클</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.mainText}>할 일</Text>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <TextInput
                            style={[
                                styles.card,
                                { width: '90%', height: 40, padding: 10 },
                            ]}
                        />
                    </View>
                    <Text style={styles.mainText}>시간</Text>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            paddingHorizontal: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: Family.thin,
                                    fontSize: 20,
                                }}
                            >
                                시작 :
                            </Text>
                            <DateTimePicker
                                value={startDate}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChangeStart}
                                style={{ width: 100, height: 40 }}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: Family.thin,
                                    fontSize: 20,
                                }}
                            >
                                종료 :
                            </Text>
                            <DateTimePicker
                                value={endDate}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChangeEnd}
                                style={{ width: 100, height: 40 }}
                            />
                        </View>
                    </View>
                </View>
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
        width: '20%',
        height: 30,
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
