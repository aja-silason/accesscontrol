import { Colors } from "@/app/view/styles/color";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.orange[100],
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 7,
        marginVertical: "1%",
        paddingHorizontal: 15
    },
    btnIcon: {
        backgroundColor: Colors.orange[200],
        height: 50,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 7,
        paddingHorizontal: 15
    },
    styilg: {
        // styling="mb-[40px]"
        marginBottom: 40,
        width: "100%"
    },

    btnIn: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
        borderRadius: 6,
        height: 52,
        backgroundColor: "rgba(237, 237, 238, 1)"
    },
    btnText: {
        fontWeight: "600",
    }
    ,
    btnInText: {
        color: "rgba(120, 120, 120, 1)",
    },
    tabButtonActive: {
        backgroundColor: "#F8C400",
        // height: 38,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 24
    },
    tabButton: {
        backgroundColor: "#F8F8F9",
        // height: 38,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 24
    },
    tabButtonText: {
        fontSize: 14,
        fontWeight: "500"
    }
})
