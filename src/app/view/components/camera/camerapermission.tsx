import { Text, View } from "react-native";
import ScanQRSVF from "../svg/ScanQRSVG";

export function CameraPermission () {
    return (
        <View>
            <ScanQRSVF/>
            <Text>Permissão na camera</Text>
        </View>
    )
}