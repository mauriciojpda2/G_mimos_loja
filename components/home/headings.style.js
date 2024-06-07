import { StyleSheet } from "react-native"
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginTop: 16,
        marginHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 22,
    }
})

export default styles;