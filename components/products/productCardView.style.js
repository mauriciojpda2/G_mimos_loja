import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd: 10,
        borderRadius: 16,
        backgroundColor: COLORS.verde,
        marginLeft: 8,
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: 6,
        marginTop: 6,
        borderRadius: 12,
        overflow: "hidden",
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        padding: 12,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    supplier: {
        fontWeight: "regular",
        fontSize: 12,
    },
    price: {
        fontWeight: "bold",
        fontSize: 15,
    },
    addBtn: {
        position: "absolute",
        bottom: 8,
        right: 8,
    }
})

export default styles;