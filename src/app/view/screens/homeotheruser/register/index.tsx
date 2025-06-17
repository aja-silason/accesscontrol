import { Switch, Text, View } from "react-native";
import { HeaderIn } from "@/app/view/components/header";
import { Button, ButtonWithIcon } from "@/app/view/components/button";
import { Style } from "./style";
import { InputContainer } from "@/app/view/components/input/input";
import { useState } from "react";
import FuelSVG from "@/app/view/components/svg/Fuel";
import CautionSvg from "@/app/view/components/svg/CautionSvg";
import { routing } from "@/app/viewmodel/services/Navegation";
import { ContainerLessMenuLessGradiente } from "../../container";


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
