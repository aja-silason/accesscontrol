import { Colors } from "@/app/view/styles/color";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 8
    },
    container2: {
        borderColor: Colors.orange[100],
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.orange[100],
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 12,
        width: "100%"
    },
    textaarea: {
        borderWidth: 1,
        borderColor: Colors.orange[100],
        paddingHorizontal: 10,
        borderRadius: 12,
        width: "100%"
    },
    area: {
        height: 200,
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: 0
    },
    searchView: {
        width: "100%",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: "rgba(208, 213, 221, 1)"
    },
    searchInput: {
        height: 44,
    },
    childText: {
        fontSize: 15,
        color: Colors.black[300],
        fontWeight: "600"
    },
    
    oneDigiteInput: {
        paddingHorizontal: 10,
        borderWidth: 1,
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: "#F5F6F8",
        borderColor: "#F5F6F8",
        fontSize: 20,
        fontWeight: "700",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }

}) 