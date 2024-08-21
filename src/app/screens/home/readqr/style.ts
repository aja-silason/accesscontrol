import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        alignItems: "center",
        width: "100%",
    },
    image: {
        marginVertical: 50,
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
    },
    cam: {
        width: "80%",
        height: "60%",
    },
    textInfo: {
        marginVertical: 20,
        fontWeight: "500",
        fontSize: 14,
        color: "rgba(2, 1, 0, 0.7)",

    }
})
