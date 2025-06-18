import { Switch, Text, View } from "react-native";
import { HeaderIn } from "@/app/view/components/header";
import { Button, ButtonWithIcon } from "@/app/view/components/button";
import { Style } from "./style";
import { InputContainer } from "@/app/view/components/input/input";
import { useState } from "react";
import FuelSVG from "@/app/view/components/svg/Fuel";
import CautionSvg from "@/app/view/components/svg/CautionSvg";
import { routing } from "@/app/viewmodel/services/Navegation";
import { ContainerLessMenuLessGradiente } from "../../../../components/container";
import { useNavigation } from "@react-navigation/native";


export default function Ocorrency() {
    const [value, setValue] = useState('first');

    const navigate: any = useNavigation();

  return (
    <View>
        
        <HeaderIn title="Meu Trabalho" back="yes"/>

        <ContainerLessMenuLessGradiente>
            <Text style={Style.txtInput}>O que deseja fazer</Text>
            <View style={Style.container}>
                <ButtonWithIcon onClick={() => navigate.navigate("entersupplie")} text="Registar de Abastecimento">
                    <FuelSVG/>
                </ButtonWithIcon>

                <ButtonWithIcon onClick={() => navigate.navigate("enteroccorrency")} text="Registrar Ocorrências">
                    <CautionSvg/>
                </ButtonWithIcon>

            </View>

        </ContainerLessMenuLessGradiente>
    </View>
  );
}
