import { Colors } from "@/app/view/styles/color";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    txtInput: {
        fontWeight: "700",
        fontSize: 20,
        marginVertical: 10
    },
    container: {
        backgroundColor: "#fff",
        marginTop: 20,
        gap: 15
    },
    txtP: {
        fontSize: 10,
        fontWeight: "400"
    },
    bores: {
        borderWidth: 1,
        borderColor: Colors.orange[100],
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 12,
        width: "100%"
    }
})