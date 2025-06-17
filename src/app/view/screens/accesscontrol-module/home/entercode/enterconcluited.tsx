import { Header, HeaderIn } from "@/app/view/components/header";
import { Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../../../components/container";
import { style } from "./style";
import { RadioCards } from "@/app/view/components/cards/Cards";
import { OneDigiteInput } from "@/app/view/components/input/input";
import { useRef, useState } from "react";
import CheckedIconSvg from "@/app/view/components/svg/CheckedSvg";
import { Button } from "@/app/view/components/button";
import { routing } from "@/app/viewmodel/services/Navegation";
import { useNavigation } from "@react-navigation/native";

export default function EnterCodeConcluited() {

    const navigate: any = useNavigation();

    function finnaly(){
        navigate.navigate("accessControll");
    }

    return (
        <View>
        <HeaderIn title="Introduzir Código" back="yes"/>
        <ContainerLessMenuLessGradiente>
        <View style={style.container}>
                <View>
                    <RadioCards step={3}/>
                </View>
                <View style={style.concluitedContainer}>

                  <CheckedIconSvg/>

                  <View style={style.textCenter}>
                    <Text style={style.textBold}>Verificação</Text>
                    <Text style={style.textMedium}>A verificação foi feita com sucesso o motorista está autoridade para entrar na central.</Text>
                  </View>

                  <View style={style.border}></View>

                  <View style={style.containerList}>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Distribuidora</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Veiculo</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Modelo do carro</Text>
                            <Text style={style.textBold}>Cinza</Text>
                        </View>
                    </View>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Distribuidora</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Veiculo</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Modelo do carro</Text>
                            <Text style={style.textBold}>Cinza</Text>
                        </View>
                    </View>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Distribuidora</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Veiculo</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Modelo do carro</Text>
                            <Text style={style.textBold}>Cinza</Text>
                        </View>
                    </View>
                  </View>

                </View>
                  <Button onClick={finnaly} styling="" text="Finalizar"/>
            </View>
        </ContainerLessMenuLessGradiente>
        </View>
    )
}