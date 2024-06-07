import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 200,
        marginEnd: 10,
        borderRadius: 16,
        backgroundColor: COLORS.verde
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: 6,
        marginTop: 6,
        borderRadius: 12,
        overflow: "hidden",
    }
})

export default styles;