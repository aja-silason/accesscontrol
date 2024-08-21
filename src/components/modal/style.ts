import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        // height: 270,
        borderBottomEndRadius: 47,
        borderBottomStartRadius: 47,
    },
    modal1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 50,
        marginBottom: -20
    },
    modal2: {
        flexDirection: "row",
        gap: 5
    },
    books1: {
        gap: 2
    },
    books2: {
        flexDirection: "row",
        gap: 2
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ImageProfile: {
        width: 45,
        height: 45,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#000"
    },
    modalSize: {
        height: "100%",
        backgroundColor: "#000"
    },
    size: {
        width: 10,
        height: 10
    },
    underline: {
        textDecorationLine: "none",
        fontWeight: "500",
        color: "#000",
        fontSize: 12
    },
    underlineBook: {
        textDecorationLine: "underline",
        fontWeight: "500",
        color: "rgba(2, 1, 0, 0.7)",
        fontSize: 12
    },
    btnLogOut: {
        backgroundColor: "rgba(231, 43, 43, 1)",
        height: 44,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
    textWhite: {
        color: "#fff"
    },
    thinText: {
        fontSize: 12,
        fontWeight: "500",
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "400",
        color: "rgba(2, 1, 0, 0.7)",
    }, 


    viewcontainer: {
        alignContent: "center",
        justifyContent: "center"
    },
    viewAlertModal: {
        backgroundColor: "rgba(10, 189, 73, 0.7)",
        alignItems: "center",
        justifyContent: "center",
        width: 320,
        height: 230,
        borderRadius: 8
    },
    textModal: {
        fontWeight: "700",
        fontSize: 20,
        textAlign: "center",
        color: "#fff"
    },
    viewAlertModalDanied: {
        backgroundColor: "rgba(207, 34, 46, 0.5)",
        alignItems: "center",
        justifyContent: "space-around",
        width: 320,
        height: 230,
        borderRadius: 8,
        padding: 5
    },
    viewAlertModalDanied2: {
        backgroundColor: "rgba(207, 34, 46, 0.5)",
        alignItems: "center",
        justifyContent: "center",
        width: 320,
        height: 230,
        borderRadius: 8,
        padding: 5
    },
    textDniedCntainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    txtDanied: {
        color: "#fff",
        fontSize: 12,
        textDecorationLine: "underline"
    }
});