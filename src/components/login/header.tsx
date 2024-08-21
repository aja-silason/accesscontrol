import { Image, Text, View } from "react-native"
import { Style } from "./style"
import SonangolSVG from "../svg/sonangolsvg"

export const Header = () => {
    return (
        <View style={Style.container}>
            <SonangolSVG/>
        </View>
    )
} 