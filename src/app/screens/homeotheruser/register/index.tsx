import { Switch, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "@/app/screens/container";
import { HeaderIn } from "@/components/header";
import { Button, ButtonWithIcon } from "@/components/button";
import { Style } from "./style";
import { InputContainer } from "@/components/input/input";
import { useState } from "react";
import FuelSVG from "@/components/svg/Fuel";
import CautionSvg from "@/components/svg/CautionSvg";
import { routing } from "@/services/Navegation";


export default function Ocorrency() {
    const [value, setValue] = useState('first');

  return (
    <View>
        
        <HeaderIn title="Registros" back="yes"/>

        <ContainerLessMenuLessGradiente>
            <Text style={Style.txtInput}>O que deseja fazer</Text>
            <View style={Style.container}>
                <ButtonWithIcon onClick={() => routing.handleRouterSupplie()} text="Registar de Abastecimento">
                    <FuelSVG/>
                </ButtonWithIcon>

                <ButtonWithIcon onClick={() => routing.handleRouterOcorrency()} text="Registrar Ocorrências">
                    <CautionSvg/>
                </ButtonWithIcon>

            </View>

        </ContainerLessMenuLessGradiente>
    </View>
  );
}
