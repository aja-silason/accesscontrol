import { Colors } from "@/styles/color";
// import { DMSans_700Bold } from "@expo-google-fonts/dm-sans";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        height: "100%",
    },
    loginData: {
        marginVertical: "10%",
        // paddingHorizontal: "5%",
        gap: 10
    },
    texth1: {
        fontSize: 26,
        fontWeight: "500",
        color: Colors.black[200]
    },
    textp: {
        color: Colors.black[300],
        fontSize: 12
    },

    containerInput: {
        gap: 15
    }

})