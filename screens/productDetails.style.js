import { StyleSheet } from "react-native"
import COLORS from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.branco

    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 44,
        width: 350,
        zIndex: 999
    },
    image: {
        aspectRatio: 1,
        resizeMode: "cover"
    },
    details: {
        marginTop: -10,
        backgroundColor: COLORS.branco,
        width: 395,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 370,
        top: 20
    },
    title:{
    fontWeight: "bold",
    fontSize: 18,
    },
    priceWrapper: {
        backgroundColor: COLORS.verde,
        bordeRadius: 16
    },
    price:{
        paddingHorizontal: 10,
        fontWeight: "bold",
        fontSize: 18,
    },
    
})

export default styles;