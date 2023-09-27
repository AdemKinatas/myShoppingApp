import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image_container: {
        backgroundColor: 'white',
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
    },
    body_container: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25,
    },
    description: {
        fontStyle: 'italic',
        color: 'black',
        marginVertical: 5,
    },
    price: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        textAlign: 'right',
    },
});