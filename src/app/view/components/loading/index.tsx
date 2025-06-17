import { ActivityIndicator } from "react-native";
import { Style } from "./style";
import { Colors } from "../../styles/color";

export function Loading() {
    return <ActivityIndicator style={Style.indicator} color="#020000"/>
}

export function LoadingCode() {
    return <ActivityIndicator style={Style.indicator} color={Colors.orange[300]} size={80}/>
}
