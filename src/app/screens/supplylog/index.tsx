import { router } from "expo-router";
import { Button, Text, View } from "react-native"

export default function Home(){
    const handleClick = () => {
        console.log("Opahh");
        router.navigate("./");
    }
    return (
        <View >
            <Text>Supply Log</Text>
        </View>
    )
}