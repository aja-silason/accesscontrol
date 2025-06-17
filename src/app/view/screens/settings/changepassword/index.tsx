import { Switch, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../container";
import { HeaderIn } from "@/app/view/components/header";
import { Button } from "@/app/view/components/button";
import { Style } from "./style";
import { InputContainer } from "@/app/view/components/input/input";
import { useState } from "react";


export default function ChangePassword() {
    const [value, setValue] = useState('first');

  return (
    <View>
        
        <HeaderIn title="Alterar Senha" back="yes"/>

        <ContainerLessMenuLessGradiente>
            {/* <Text style={Style.txtInput}>Alterar dados da conta.</Text> */}
            <View style={Style.container}>
                <InputContainer>
                    <InputContainer.Field>Senha actual</InputContainer.Field>
                    <InputContainer.Input place="seu@email.com"/>
                </InputContainer>

                <InputContainer>
                    <InputContainer.Field>Nova senha</InputContainer.Field>
                    <InputContainer.Input place="seu@email.com"/>
                </InputContainer>

                <InputContainer>
                    <InputContainer.Field>Digite Novamente</InputContainer.Field>
                    <InputContainer.Input place="seu@email.com"/>
                </InputContainer>

                <Button text="Salvar" styling="mb-[40px]" onClick={() => console.log("sending")}/>

            </View>

        </ContainerLessMenuLessGradiente>
    </View>
  );
}
