import { ScrollView, Switch, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "@/app/screens/container";
import { HeaderIn } from "@/components/header";
import { Button } from "@/components/button";
import { InputContainer, SelectContainer, Textarea } from "@/components/input/input";
import { useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { Style } from "./style";


export default function Supplie() {
    const [value, setValue] = useState('first');
    
    const options = [
        { id: 1, label: 'Banana', value: 'banana' },
        { id: 2, label: 'Maçã', value: 'maçã' },
        { id: 3, label: 'Laranja', value: 'laranja' },
      ];

      console.log(options)
    

  return (
    <ScrollView style={{height: "100%", backgroundColor: "#fff"}}>
        
        <HeaderIn title="Abastecimento" back="yes"/>

        <ContainerLessMenuLessGradiente>
            {/* <Text style={Style.txtInput}>Alterar dados da conta.</Text> */}
            <View style={Style.container}>
                <InputContainer>
                    <InputContainer.Field>Plataforma</InputContainer.Field>
                    <InputContainer.Input place="seu@email.com" value={value} onChangeText={(value: any) => setValue(value)}/>
                </InputContainer>

                <SelectContainer.Field>Distribuidora</SelectContainer.Field>
                <SelectContainer style={Style.bores}>
                    <RNPickerSelect
                        onValueChange={(value: any) => setValue(value)}
                        items={options}
                        value={value}
                        placeholder={{ label: 'Selecione a Distribuidora', value: null }}
                    />
                </SelectContainer>

                <SelectContainer.Field>Produto</SelectContainer.Field>
                <SelectContainer style={Style.bores}>
                    <RNPickerSelect
                        onValueChange={(value: any) => setValue(value)}
                        items={options}
                        value={value}
                        placeholder={{ label: 'Selecione a Distribuidora', value: null }}
                    />
                </SelectContainer>

                <InputContainer>
                    <InputContainer.Field>Litros</InputContainer.Field>
                    <InputContainer.Input place="20 m"/>
                </InputContainer>
                

               

                <Button text="Enviar" styling="mb-[40px]" onClick={() => console.log("sending")}/>

            </View>

        </ContainerLessMenuLessGradiente>
    </ScrollView>
  );
}
