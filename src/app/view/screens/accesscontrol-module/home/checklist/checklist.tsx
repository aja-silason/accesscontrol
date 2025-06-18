import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeaderIn } from "@/app/view/components/header";
import { ContainerLessMenuLessGradiente } from "@/app/view/components/container";
import { RadioCards } from "@/app/view/components/cards/Cards";
import CheckedIconSvg from "@/app/view/components/svg/CheckedSvg";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@/app/view/components/button";
import { style } from "./style";
import { InputContainer } from "@/app/view/components/input/input";

type entranceTypeProps = {
    source: string,
    messageSignature: string,
    message: string,
    resourceType: string,
    transport: string,
    credential_driver: string,
    fullCredencial: {
        distribuitor: string,
        driver: string,
        drivingLicenceNumber: string,
        brand: string,
        registration: string,
        model: string,
        color: string
    },
    text: {
        div: string,
        message: string,
        status: number,
        out: boolean,
        checked: boolean
    }
}

export default function CheckList() {

    const [dataEntrance, setDataEntrance] = useState<entranceTypeProps>();

    const navigate: any = useNavigation();

    useEffect(() => {
        const getEntrance = async () => {
            const entranceData = await AsyncStorage.getItem("entranceData");
            if (entranceData) {
                const parseData = JSON.parse(entranceData);
                setDataEntrance(parseData);
            }
        };

        getEntrance()
    }, [])

    const finnaly = async () => {
        await AsyncStorage.removeItem("entranceData");
        navigate.navigate("accessControll");
    }

    return (
        <View style={{ backgroundColor: "#C98B05", height: "110%" }}>
            <HeaderIn title="Introduzir Código" back="yes" />
            <ContainerLessMenuLessGradiente>
                <View style={style.container}>

                    <View style={{width: "100%"}}>

                        <InputContainer style={{ width: "100%" }}>
                            <InputContainer.Field>E-mail</InputContainer.Field>
                            <InputContainer.Input place="seu@email.com" onChangeText={(email: any) => { }} value={""} />
                        </InputContainer>

                        <InputContainer style={{ width: "100%" }}>
                            <InputContainer.Field>E-mail</InputContainer.Field>
                            <InputContainer.Input place="seu@email.com" onChangeText={(email: any) => { }} value={""} />
                        </InputContainer>

                        <InputContainer style={{ width: "100%" }}>
                            <InputContainer.Field>E-mail</InputContainer.Field>
                            <InputContainer.Input place="seu@email.com" onChangeText={(email: any) => { }} value={""} />
                        </InputContainer>

                        <InputContainer style={{ width: "100%" }}>
                            <InputContainer.Field>E-mail</InputContainer.Field>
                            <InputContainer.Input place="seu@email.com" onChangeText={(email: any) => { }} value={""} />
                        </InputContainer>

                        <InputContainer style={{ width: "100%" }}>
                            <InputContainer.Field>E-mail</InputContainer.Field>
                            <InputContainer.Input place="seu@email.com" onChangeText={(email: any) => { }} value={""} />
                        </InputContainer>

                    </View>

                    <Button onClick={finnaly} styling="" text="Finalizar" />
                </View>
            </ContainerLessMenuLessGradiente>
        </View>
    )
}