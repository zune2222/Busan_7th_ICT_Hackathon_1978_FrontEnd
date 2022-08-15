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
    ActivityIndicator,
} from 'react-native'
import { Colors, Family, TextSize } from '../../Setting'

function SignIn({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    return (
        <>
            {loading ? (
                <View style={styles.loadingBackground}>
                    <ActivityIndicator size="large" color="#000000" />
                </View>
            ) : (
                <></>
            )}
            <View style={styles.container}>
                <View style={styles.titleWrap} />
                <Text style={styles.mainText}>
                    Welcome
                    {'\n'}
                    Back!
                </Text>
                <View style={styles.contentWrap}>
                    <Text style={styles.smallText}>Email</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="example@example.com"
                            autoCapitalize="none"
                        />
                    </View>
                    <Text style={styles.smallText}>Password</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password Here"
                        autoCapitalize="none"
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginBlockSkyBlue}
                    onPress={() => {
                        // setLoading(true);
                        navigation.reset({ routes: [{ name: 'Main' }] })
                    }}
                >
                    <Text style={styles.blockTextSkyBlue}>Continue</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    loadingBackground: {
        zIndex: 99,
        backgroundColor: 'grey',
        opacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingBottom: 50,
    },
    contentWrap: {
        flex: 1,
        padding: 30,
    },
    titleWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 50,
    },
    inputStyle: {
        borderRadius: 10,
        width: '100%',
        height: 50,
        borderWidth: 1,
        paddingLeft: 15,
        borderColor: Colors.textA1,
        marginBottom: 15,
        fontFamily: Family.medium,
    },
    mainText: {
        color: Colors.textA1,
        fontFamily: Family.bold,
        fontSize: TextSize.size5,
        marginLeft: 15,
        marginTop: 5,
    },
    contentText: {
        color: Colors.textA1,
        fontFamily: Family.bold,
        fontSize: TextSize.size0,
        marginLeft: 15,
        marginTop: 30,
    },
    smallText: {
        color: Colors.textA1,
        fontFamily: Family.bold,
        fontSize: TextSize.size0,
        marginBottom: 10,
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
export default SignIn
