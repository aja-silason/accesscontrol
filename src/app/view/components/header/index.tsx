import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderSvg from "../svg/headersvg";
import SonangolHeaderSVG from "../svg/sonangolHeadersvg";
import { useState } from "react";
import BackIconSvg from "../svg/BackIconSvg";
import { Modal } from "../modal";
// import { Styles } from "../modal/style";
import { router } from "expo-router";
import { Style } from "./styles";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../styles/color";
import { Ionicons } from "@expo/vector-icons";

enum MODAL {
    NONE = 0,
    HEADE = 1
}

export function Header() {

    const [showModal, setShowModal] = useState(MODAL.NONE);
    const {logout} = useAuth()
    const log = () => {
        logout()
        setShowModal(MODAL.NONE)
    }

    const {user} = useAuth()


    return (
        <View style={[Style.containerHeader, {backgroundColor: Colors.orange[300]}]}>
            <View style={Style.fixedColor}>
                <HeaderSvg style={Style.headSVG}/>
            </View>
            <View style={Style.containerHead}>
                <SonangolHeaderSVG style={Style.logo} width={200}/>
                <TouchableOpacity activeOpacity={0.9} onPress={() => setShowModal(MODAL.HEADE)}>
                    {/*<Image source={require("@/assets/profileimage/profile.png")} alt="picture" style={Style.profilePicture}/>*/}
                    <Ionicons name="menu" size={30}/>
                </TouchableOpacity>
            </View>

            <Modal usename={`${user?.login?.name} ${user?.login?.surname}`} role={user?.login?.role?.role} visible={showModal === MODAL.HEADE  } onClose={() => setShowModal(MODAL.NONE)} logOut={log}>
                <View style={Style.modaStyle}>
                    <TouchableOpacity onPress={() => setShowModal(MODAL.NONE)}>
                        <View style={Style.btnModalClose}></View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}


type headerInProp = {
    title: string,
    back?: string
}

export const HeaderIn = ({title, back}: headerInProp) => {

    const navigate = useNavigation();
    

    const handleBack = () => {
        navigate.goBack()
    }

    return (
        back === "yes" ? (
            <View style={[Style.containerHeader, {backgroundColor: Colors.orange[300]}]}>
                <View style={Style.fixedColor}>
                    <HeaderSvg style={Style.headSVG}/>
                </View>
                <View style={Style.containerHead}>
                    <TouchableOpacity onPress={handleBack} style={Style.backButton} activeOpacity={0.9}>
                        <BackIconSvg/>
                    </TouchableOpacity>
                    <View style={Style.centerTextAlign}>
                        <Text style={Style.titleHeaderBack}>{title}</Text>
                    </View>
                </View>
            </View>
        ) : (
            <View style={Style.containerHeader}>
                <View style={Style.fixedColor}>
                    <HeaderSvg style={Style.headSVG}/>
                </View>
                <View  style={Style.containerHead}>
                    <View style={Style.centerTextInHeader}>
                        <Text  style={Style.titleHeader}>{title}</Text>
                    </View>
                </View>
            </View>
        )
    )
}

type headerLessGradientProp = {
    title: string,
    back?: string
}
    

    const handleBack = () => {
        router.back();
    }

export const HeaderLessGradient = ({title, back}: headerLessGradientProp) => {
    return (
        <View style={Style.containerHeaderLessBackground}>
            {/* <View className="flex h-full items-center justify-center w-full absolute" style={Style.fixedColor}>
                <HeaderSvg className="absolute top-0 right-0 left-0 bottom-0" style={Style.headSVG}/>
            </View> */}
            <View style={Style.containerHead}>
                <TouchableOpacity onPress={handleBack} style={Style.backButton} activeOpacity={0.9}>
                    <BackIconSvg/>
                </TouchableOpacity>
                <View style={Style.centerTextAlign}>
                    <Text  style={Style.titleHeaderBack}>{title}</Text>
                </View>
            </View>
        </View>
    )
}