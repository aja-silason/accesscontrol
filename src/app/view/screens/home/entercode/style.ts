import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        alignItems: "center",
    },
    inputContainer: {
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 50
    },
    text: {
        color: "rgba(2, 1, 0, 0.7)",
        fontWeight: "500"
    },
    concluitedContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    border: {
        height: 2,
        width: 100,
        backgroundColor: "#333",
        marginVertical: 20
    },
    containerList: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        width: "100%"
    },
    groupList: {
        flexDirection: "column",
    },
    textThin: {
        fontWeight: "400",
        fontSize: 12,
        color: "#020100"
    },
    textBold: {
        fontWeight: "500",
        fontSize: 18,
        color: "#020100"
    },
    textMedium: {
        fontWeight: "500",
        fontSize: 14,
        color: "#020100",
        textAlign: "center"
    },
    textCenter: {
        alignItems: "center"
    }
})