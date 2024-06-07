import { StyleSheet } from "react-native";
import COLORS from "../constants";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: 12,
        backgroundColor: COLORS.verde,
        borderRadius: 16,
        marginVertical: 16,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.cinza,
        marginTop: 12,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.verde,
        marginRight: 12,
        borderRadius: 12,
    },
    searchInput: {
        fontWeight: "bold",
        width: "100%",
        height: "100%",
        paddingHorizontal: 12,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.verde
    }
});

export default styles
