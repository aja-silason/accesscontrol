import GradientBackground from "@/app/view/components/gradiente";
import { Header, HeaderIn } from "@/app/view/components/header";
import Menu from "@/app/view/components/menu/Menu";
import { HeaderContext } from "@/app/viewmodel/context/headerContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    containerLessMenu: {
        height: "100%",
        backgroundColor: "#fff"
    },
    containerLessMenuLessGradiente: {
        height: "100%",
        paddingHorizontal: 10,
        backgroundColor: "#fff"
    },
})

export default function Container({ children }: any) {
    return (
        <View style={Styles.container}>
            <Header />
            {children}
        </View>
    )
}

export function ContainerLessMenuLessGradiente({ children }: any) {
    return (
        <View>
            <View style={Styles.containerLessMenuLessGradiente}>
                {children}
            </View>
        </View>
    )
}

export function ContainerLessMenu({ children }: any) {
    return (
        <View>
            <View style={Styles.containerLessMenu}>
                {children}
                <GradientBackground colors={['#E9B309', '#C98B05']}>
                </GradientBackground>
            </View>

        </View>
    )
}
