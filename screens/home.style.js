import { StyleSheet } from "react-native";
import COLORS from "../constants/index.jsx";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal:22,
        marginTop: 12
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    location: {
        fontWeight: "bold",
        fontSize: 16,
        color: COLORS.cinza
    },
    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        zIndex: 999,
    },
    cartNumber: {
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.branco
    }


})

export default styles