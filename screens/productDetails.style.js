import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 44,
        width: '100%',
        zIndex: 999
        
    }
})

export default styles;