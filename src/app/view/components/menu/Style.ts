import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "9%",
        // backgroundColor: "#020100",

    },
    menu: {
        backgroundColor: "#020100",
        flex: 1,
        flexDirection: "row",
        gap: 10,
        borderRadius: 32,
        justifyContent: "space-between",
        textAlign: "center",
        padding: 12,
    },
    text: {
        color: "#020100",
        textAlign: "center",
        fontWeight: "700"
    },
    textH: {
        flexDirection: "row",
        gap: 2,
        alignItems: "center"
    },
    btnMenuActive: {
        backgroundColor: "#F8C400",
        borderColor: "#F8C400",
        borderWidth: 1,
        color: "#020100",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 30,
        flexDirection: "row",
        gap: 5
    },
    btnMenu: {
        color: "#020100",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 37,
        borderRadius: 30,
        flexDirection: "row",
        gap: 5
    },
})