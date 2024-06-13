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
        paddingBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 360,
        top: 20
    },
    title:{
        fontWeight: "bold",
        fontSize: 18,
    },
    priceWrapper: {
        backgroundColor: COLORS.verde,
        borderRadius: 16,
        
    },
    price:{
        paddingHorizontal: 10,
        fontWeight: "bold",
        fontSize: 18,
    },
    ratingRow: {
        paddingBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        top: 5,
    },
    rating:{
        top: 16,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        marginHorizontal: 16,
    },
    descriptionWraper: {
        marginTop: 32,
        marginHorizontal: 16,
    },
    description: {
        fontWeight: "bold",
        fontSize: 17,
    },
    descText: {
        fontSize: 14,
        textAlign: "justify",
        marginBottom: 12
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.verde,
        padding: 6,
        borderRadius: 16,
        marginHorizontal: 10,
    },
    cartRow: {
        paddingBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width:300,
    },
    cartBtn: {
        width: 200,
        backgroundColor: COLORS.preto,
        marginTop: 20,
        padding: 12,
        borderRadius: 25,
        marginLeft: 12
    },
    cartText: {
       fontWeight: "bold",
       fontSize: 16,
       color: COLORS.branco
    }

})

export default styles;