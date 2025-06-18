import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    constainerHome: {
        backgroundColor: "rgba(248, 248, 249, 1)",
        height: 140,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9,
        gap: 15,
        padding: 10
    },
    titleHome: {
        fontWeight: "500",
        fontSize: 14
    },
    containerList: {
        backgroundColor: "#F4F5F8",
        borderColor: "#fff0bf",
        borderWidth: 1,
        width: "95%",
        borderRadius: 8,
        flexDirection: "row",
        gap: 10,
        padding: 15,
        marginBottom: 15,
    },
    innerContainerList: {
        justifyContent: "space-between",
        // width: "100%",
        flexDirection: "row",
        width: "95%"
    },
    titleList: {
        fontSize: 16,
        fontWeight: "700"
    },
    textListContainer: {
        flexDirection: "row",
        gap: 5,
    },
    textList: {
        color: "rgba(2, 1, 0, 0.5)",
        fontSize: 12,
        fontWeight: "500"
    },
    textListDate: {
        color: "rgba(2, 1, 0, 0.5)",
        fontSize: 10,
        fontWeight: "500"
    },
    containerCardDetails: {
        width: 358,
        padding: 10,
    },
    inner: {
        backgroundColor: "#fff",
        // height: 340,
        padding: 10,
        borderRadius: 16,
        gap: 5
    },
    img: {
        width: "100%",
        height: 180,
        borderRadius: 10
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    detailsText: {
        
    },
    detailsin: {
        flexDirection: "column",
        gap: 5
    },
    textthin: {
        fontWeight: "400",
        fontSize: 11,
    },
    textbold: {
        fontWeight: "500",
        fontSize: 12,
    },
    linebar: {
        width: "100%",
        height: 1,
        backgroundColor: "rgba(217, 217, 217, 0.6)"
    },
    profileimg: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    profile: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profiledetails: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    profiledetailimage: {},
    profiledetailstext: {},

    radioStepContainer: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    radioStepFather: {
        alignItems: "center",
        width: 100,
    },
    radioStep: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
    },
    radioStepAtive: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#FFDF66",
        backgroundColor: "#FFDF66",
        alignItems: "center",
        justifyContent: "center",
    },
    radioStepTextInactive: {
        color: "#ccc"
    },
    // #422006
    radioStepTextDiscribe: {
        color: "#020100",
        fontSize: 9.5
    },
    radioStepChecked: {},

    radioStepTextActive: {
        color: "#422006"
    },
    radioStepLineInactive: {
        backgroundColor: "#ccc",
        height: 1,
        width: 80,
        marginHorizontal: -32,
        marginTop: -10
    },
    radioStepLineActive: {
        backgroundColor: "#FFDF66",
        height: 1,
        width: 80,
        marginHorizontal: -32,
        marginTop: -10
    },
    radioStepLineInactive2: {
        backgroundColor: "#ccc",
        height: 1,
        width: 80,
        marginHorizontal: -32,
        marginTop: -10
    },
    radioStepLineActive2: {
        backgroundColor: "#FFDF66",
        height: 1,
        width: 80,
        marginHorizontal: -32,
        marginTop: -10
    },

    unicardContainer: {
        backgroundColor: "#F8F8F9",
        width: "100%",
        height: 130,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 24
    },
    uniCard: {
        width: "50%"
    },
    uniCardr: {
        borderWidth: 1,
        borderStyle: "dashed",
        height: 70,
        borderColor: "#ccc"
    },
    ptext: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    },
    pnumber: {
        fontWeight: "700",
        fontSize: 28,
        textAlign: "center"
    },

    cardleft: {
        backgroundColor: "#F8F8F9",
        flexDirection: "column",
        width: 160,
        borderRadius: 24,
        padding: 10,
        gap: 5
    },
    ptextLeft: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgba(2, 1, 0, 0.6)"
    },
    pnumberLeft: {
        fontWeight: "700",
        fontSize: 28,
    },


})