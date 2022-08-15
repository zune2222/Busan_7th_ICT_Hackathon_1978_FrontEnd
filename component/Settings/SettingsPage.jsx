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
import * as Progress from 'react-native-progress'
export const SettingsPage = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <View style={{ marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.mainText}>설정</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate('SetRoomStructure')
                        }}
                    >
                        <Image
                            source={require('../../assets/image/room.png')}
                            style={styles.cardImg}
                        />
                        <Text style={styles.mainText}>방 구조 설명하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate('SetSchedule')
                        }}
                    >
                        <Image
                            source={require('../../assets/image/schedule.png')}
                            style={styles.cardImg}
                        />
                        <Text style={styles.mainText}>일정 짜기</Text>
                    </TouchableOpacity>
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
        backgroundColor: 'white',
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
})
