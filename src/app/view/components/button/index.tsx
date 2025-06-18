import { TouchableOpacity, View, Text } from "react-native"
import { Styles } from "./Styles"
import { ArrowRight } from "../svg/ArrowIconSvg";
import CautionSvg from "../svg/CautionSvg";
import { ElementType } from "react";

type buttonProp = {
    text: string | any,
    styling?: any,
    onClick: () => void,
    link?: string,
    disabled?: boolean
}

export const Button = ({text, onClick, link = "", disabled}: buttonProp) => {
    return (
        <View style={Styles.styilg}>
            <TouchableOpacity activeOpacity={.8} onPress={onClick} 
            style={[Styles.btn, disabled && Styles.inactive]} disabled={disabled}>
                <Text style={Styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

type modalButtonIcon = {
    children: any,
    text: string,
    onClick: () => void
}

export const ButtonWithIcon = ({text, onClick, children}: modalButtonIcon) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={.8} onPress={onClick} 
            style={Styles.btnIcon}>
                {children}
                <Text style={Styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

type ButtonInProps = {
    text: string,
    onClick: () => void,
}

export const ButtonIn = ({text, onClick}: ButtonInProps) => {
    return (
        <View>
            <TouchableOpacity style={Styles.btnIn} activeOpacity={0.7} onPress={onClick}>
                <Text>{text}</Text>
                <ArrowRight/>
            </TouchableOpacity>
        </View>
    )
}

type tabButtonProps = {
    text: string,
    active: boolean,
    onClick: () => void
}

export const TabButton = ({text, active, onClick}:tabButtonProps) => {

    return (
            active == true ? (
                <View>
                    <TouchableOpacity style={Styles.tabButtonActive} activeOpacity={0.8} onPress={onClick}>
                        <Text style={Styles.tabButtonText}>{text}</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <TouchableOpacity style={Styles.tabButton} activeOpacity={0.8} onPress={onClick}>
                        <Text style={Styles.tabButtonText}>{text}</Text>
                    </TouchableOpacity>
                </View>
            )
    )
}