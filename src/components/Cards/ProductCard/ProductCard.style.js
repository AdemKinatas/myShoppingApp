import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#bdbdbd",
        backgroundColor: "#FCF7F7",
        margin: 10,
        flexDirection: "row",
        borderRadius: 5,
    },
    image: {
        width:100,
        minHeight: 100,
        resizeMode: "contain",
        backgroundColor: "white",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    body_container: {   
        padding: 5, 
        flex: 1,
        justifyContent: "space-between",
    },
    title: {
        color:"black",
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        color:"black",
        textAlign: "right",
    },
});