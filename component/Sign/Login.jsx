import { Fragment, useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
} from 'react-native'
import { Colors, Family, TextSize } from '../../Setting'

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={styles.logo}
                />
                <Text style={styles.logoText}>godThink</Text>
            </View>

            <Text style={styles.mainText}>
                Welcome to
                {'\n'}
                godThink!
            </Text>
            <View style={{ marginTop: 50 }} />
            <TouchableOpacity
                style={styles.loginBlockBlue}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.blockTextWhite}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginBlockSkyBlue}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.blockTextSkyBlue}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingBottom: 50,
    },
    titleWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 50,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    logoText: {
        color: Colors.textA1,
        fontFamily: Family.bold,
        fontSize: TextSize.size0,
        marginLeft: 5,
    },
    mainText: {
        color: Colors.textA1,
        fontFamily: Family.bold,
        fontSize: TextSize.size5,
        marginLeft: 15,
        marginTop: 30,
    },
    loginBlock: {
        width: 300,
        height: 50,
        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            },
            android: {
                elevation: 10,
            },
        }),
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 50,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginBlockBlue: {
        width: 300,
        height: 50,
        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            },
            android: {
                elevation: 10,
            },
        }),
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: Colors.buttonA1,
        borderRadius: 15,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginBlockSkyBlue: {
        width: 300,
        height: 50,
        position: 'absolute',
        bottom: 15,
        left: '50%',
        marginLeft: -150,
        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            },
            android: {
                elevation: 10,
            },
        }),
        backgroundColor: Colors.buttonA2,
        borderRadius: 15,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    blockText: {
        fontFamily: Family.medium,
        color: Colors.textA1,
        fontSize: TextSize.size2,
    },
    blockTextSkyBlue: {
        fontFamily: Family.medium,
        color: Colors.textA2,
        fontSize: TextSize.size2,
    },
    blockTextWhite: {
        fontFamily: Family.medium,
        color: 'white',
        fontSize: TextSize.size2,
    },
    logoImg: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
})
export default Login
