import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        width: 358,
    },
    mergeThing: {
        backgroundColor: "#C98B05",
    },
    mergeThingCard: {
        backgroundColor: "#C98B05",
        marginTop: -20
    },
    historicAccess: {
        marginTop: 10,
        backgroundColor: "#fff",
        height: "100%",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        paddingHorizontal: 20
    },
    innerHistoricAcess: {},
    innerHistoricAcessBold: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 10,
        marginVertical: 5
    },
    innerHistoricAcessBtn: {
        flexDirection: "row",
        gap: 5,
        marginVertical: 10
    }
})