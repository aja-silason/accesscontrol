import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({

    containerHeader: {
        // flex-col h-[119px] items-center justify-center w-full
        flexDirection: "column",
        height: 119,
        alignItems: "center",
        justifyContent: "center", 
        width: "100%",
        // paddingHorizontal: 10,
    },
    containerHeaderLessBackground: {
        // flex-col h-[119px] items-center justify-center w-full
        flexDirection: "column",
        height: 119,
        alignItems: "center",
        justifyContent: "center", 
        width: "100%",
        backgroundColor: "#C98B05"
    },
    fixedColor: {
        // flex h-full items-center justify-center w-full absolute
        // display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute"
    },
    headSVG: {
        // absolute top-0 right-0 left-0 bottom-0
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    logo: {
        width: 132,
        height: 40,
    },
    containerHead: {
        // flex-row w-full px-[10px] items-center justify-between
        marginTop: 30,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,

    },
    btnModalClose: {
        backgroundColor: "#000",
        height: 5,
        width: 80,
        borderRadius: 50,
        marginVertical: 20
    },
    modaStyle: {
        // gap-4 justify-center items-center
        gap: 4,
        justifyContent: "center",
        alignItems: "center"   
    },
    titleHeader: {
        // font-semibold text-[20px]
        fontWeight: "600",
        fontSize: 20,
    },
    titleHeaderBack: {
        fontWeight: "600",
        fontSize: 20,
        marginLeft: 10
    },
    centerTextInHeader: {
        // w-full items-center
        width: "100%",
        alignItems: "center"
    },
    centerTextAlign: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center"
    },
    backButton: {
        marginRight: 70
    }

})