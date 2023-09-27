import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    logo: {
        width: deviceSize.width * 0.7,
        height: deviceSize.height * 0.3,
        marginBottom: 16,
    },
    body_container: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#479DE5'
    },
});