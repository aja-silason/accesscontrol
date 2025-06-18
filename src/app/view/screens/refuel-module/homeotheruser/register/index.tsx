import { Text, View } from "react-native";
import { HeaderIn } from "@/app/view/components/header";
import { ButtonWithIcon } from "@/app/view/components/button";
import { Style } from "./style";
import FuelSVG from "@/app/view/components/svg/Fuel";
import CautionSvg from "@/app/view/components/svg/CautionSvg";
import { ContainerLessMenuLessGradiente } from "../../../../components/container";
import { useNavigation } from "@react-navigation/native";


export default function Ocorrency() {

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
