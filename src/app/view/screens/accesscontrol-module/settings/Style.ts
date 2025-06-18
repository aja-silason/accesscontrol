import { Colors } from "@/app/view/styles/color";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    profileimage: {
        width: 90,
        height: 90,
        borderRadius: 100,
    },
    containerImgBorder: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "rgba(233, 179, 9, 1)",
        padding: 2
    },
    containerImgBorderInner: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "rgba(233, 179, 9, 1)",
        padding: 1
    },
    title: {
        fontWeight: "700",
        fontSize: 20,
        color: "#020100"
    },
    subtitle: {
        color: "rgba(2, 1, 0, 0.7)",
        fontWeight: "400",
        fontSize: 12
    },
    container: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    innerBtn: {
        gap: 10
    },
    paddingThing: {
        paddingHorizontal: 10,
        gap: 20,
        height: "100%",
        backgroundColor: Colors.white[200]
    }
})