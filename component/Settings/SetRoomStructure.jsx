import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    ImageBackground,
} from 'react-native'
import * as Progress from 'react-native-progress'
export const SetRoomStructure = ({ navigation }) => {
    const [colorArray, setColorArray] = useState([])
    const [currentColor, setCurrentColor] = useState('black')
    const DATA = []
    for (let i = 1; i <= 19 * 19; i++) {
        DATA.push({ index: i })
    }
    useEffect(() => {
        for (let i = 1; i <= 19 * 19; i++) {
            colorArray[i] = ''
        }
        setColorArray(colorArray)
    }, [])
    const Item = ({ index }) => (
        <TouchableOpacity
            onPress={() => {
                colorArray[index] = currentColor
                setColorArray([...colorArray])
            }}
            style={{
                marginVertical: 0.5,
                marginHorizontal: 0.5,
                width: 18,
                height: 18,
                borderWidth: 0.2,
                borderColor: 'black',
                backgroundColor: colorArray[index],
            }}
        ></TouchableOpacity>
    )
    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <View style={{ marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.mainText}>방 구조 설정</Text>
                </View>
                <ImageBackground
                    style={styles.SetRoomStructureCard}
                    resizeMode="cover"
                    source={require('../../assets/image/testRoom.jpg')}
                >
                    <FlatList
                        scrollEnabled={false}
                        data={DATA}
                        numColumns={19}
                        renderItem={({ item }) => <Item index={item.index} />}
                        keyExtractor={(item, index) => index}
                    />
                </ImageBackground>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            setCurrentColor('black')
                        }}
                    >
                        <Text>침대</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            setCurrentColor('red')
                        }}
                    >
                        <Text>책상</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            setCurrentColor('pink')
                        }}
                    >
                        <Text>헬스장</Text>
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
    SetRoomStructureCard: {
        borderRadius: 10,
        shadowColor: '#3b4054',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        width: 361,
        height: 361,
    },
    cardText: {
        fontFamily: 'GothicLight',
        fontSize: 50,
        color: '#f2f1f7',
        marginTop: 20,
    },
    card: {
        borderRadius: 10,
        width: '25%',
        height: 30,
        backgroundColor: 'white',
        shadowColor: '#3b4054',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
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
