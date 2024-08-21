import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        gap: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 10
    },
    textCont: {
        gap: 5,
        marginTop: 15
    },
    title: {
        fontSize: 20,
        color: "#020100",
        fontWeight: "700"
    },
    p: {
        fontSize: 12,
        color: "rgba(2, 1, 0, 0.7)",
    },
    viewcard: {
        width: "100%",

        // flexDirection: "row",
        // justifyContent: "space-between"
        // marginBottom: 10
    },
    viewlist: {
        backgroundColor: "#fff",
        width: "110%",
        left: -10,
        right: 0,
        height: "100%",
        borderTopLeftRadius: 47,
        borderTopRightRadius: 47,
        borderWidth: 1,
        borderColor: "rgba(248,248,248, 1)",
        paddingTop: 10,
        paddingHorizontal: 20,
        gap: 20
    },
    viewListCards: {
        gap: 10,
        height: "40%",
    },
    searchInputContainer: {
        marginVertical: 5,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2
        // justifyContent: "center"
    },
    cardsDetails: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})