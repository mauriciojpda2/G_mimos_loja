import { StyleSheet } from "react-native";
import COLORS from "../../constants/index"

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeTxt: (color, top)=> ({
        fontWeight: "bold",
        fontSize: 33,
        marginTop: top,
        color: color,
        marginHorizontal: 12
    }),
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
})

export default styles