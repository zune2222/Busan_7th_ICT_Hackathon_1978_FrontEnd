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
import * as Progress from 'react-native-progress'
export const Main = ({ navigation }) => {
    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        setHours(new Date().getHours())
        setMin(new Date().getMinutes())
    })
    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <View style={{ marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.mainText}>
                        {hours}:{min < 10 ? `0${min}` : min}
                    </Text>
                    <Text style={styles.mainText}>책상에서 코딩하기</Text>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity
                        onPress={() => {
                            setProgress(progress + 0.01)
                        }}
                        onLongPress={() => {
                            setProgress(0)
                        }}
                    >
                        <Progress.Circle
                            size={250}
                            progress={progress}
                            showsText={true}
                            thickness={4}
                        />
                    </TouchableOpacity>
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
