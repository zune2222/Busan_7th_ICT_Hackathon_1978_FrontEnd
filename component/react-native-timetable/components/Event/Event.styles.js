import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        // alignItems: 'center',
        position: 'absolute',
        paddingVertical: 2,
        paddingHorizontal: 2,
        flex: 1,
    },
    title: {
        color: '#322425',
        textAlign: 'left',
        fontSize: 13,
        fontFamily: 'GothicLight',
    },
    description: {
        color: '#777',
        textAlign: 'left',
        fontSize: 9,

        fontFamily: 'GothicLight',
    },
    location: {
        color: '#777',
        textAlign: 'left',
        paddingTop: 4,
        paddingBottom: 2,
        fontSize: 11,
        fontFamily: 'GothicLight',
    },
})

export default styles
