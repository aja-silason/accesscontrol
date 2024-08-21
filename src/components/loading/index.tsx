import { ActivityIndicator } from "react-native";
import { Style } from "./style";

export function Loading() {
    return <ActivityIndicator style={Style.indicator}/>
}

