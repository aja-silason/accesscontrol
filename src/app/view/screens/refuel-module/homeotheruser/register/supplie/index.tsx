import { Alert, ScrollView, Switch, Text, View } from "react-native";
import { HeaderIn } from "@/app/view/components/header";
import { Button } from "@/app/view/components/button";
import { InputContainer, SelectContainer, Textarea } from "@/app/view/components/input/input";
import { useEffect, useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { Style } from "./style";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { Loading } from "@/app/view/components/loading";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import axios from "axios";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import { ContainerLessMenuLessGradiente } from "../../../../../components/container";
import { useCreateSupplie } from "@/app/viewmodel/hooks/creational/useCreateSupplie";


export default function Supplie() {
    
    const { datas, handleSubmit, product, distribuitor, setProduct, setDistribuitor, distribuitorData, productData, handleChange, isLoading }: any = useCreateSupplie();

  return (

    <View>
      <ScrollView style={{height: "100%", backgroundColor: "#fff"}} showsVerticalScrollIndicator={false}>
      <HeaderIn title="Abastecimento" back="yes"/>

        <ContainerLessMenuLessGradiente>
            <View style={Style.container}>

                {/* <InputContainer>
                    <InputContainer.Field>Plataforma</InputContainer.Field>
                    <InputContainer.Input place="seu@email.com" value={plataform} onChangeText={(value: any) => setPlataform(value)}/>
                </InputContainer> */}

                <SelectContainer.Field>Distribuidora</SelectContainer.Field>
                <SelectContainer style={Style.bores}>
                    <RNPickerSelect
                        onValueChange={(value: any) => setDistribuitor(value)}
                        key={distribuitorData?.id}
                        items={distribuitorData}
                        value={distribuitor}
                        placeholder={{ label: 'Selecione a Distribuidora', value: null }}
                    />
                </SelectContainer>

                <InputContainer>
                    <InputContainer.Field>Código do Motorista</InputContainer.Field>
                    <InputContainer.Input place="" value={datas?.driverId} onChangeText={(driverfield: any)=> handleChange("driverId", driverfield)}/>
                </InputContainer>

                <InputContainer>
                    <InputContainer.Field>Código do Veículo</InputContainer.Field>
                    <InputContainer.Input place="" value={datas?.vehicleId} onChangeText={(vehiclefield: any)=> handleChange("vehicleId", vehiclefield)}/>
                </InputContainer>

                <SelectContainer.Field>Produto</SelectContainer.Field>
                <SelectContainer style={Style.bores}>
                    <RNPickerSelect
                        onValueChange={(value: any) => setProduct(value)}
                        items={productData}
                        value={product}
                        placeholder={{ label: 'Selecione o Produto', value: null }}
                    />
                </SelectContainer>

                <InputContainer>
                    <InputContainer.Field>Litros</InputContainer.Field>
                    <InputContainer.Input place="Em 1000 litros" value={datas?.quantity} onChangeText={(quantity: any)=> handleChange("quantity", quantity)}/>
                </InputContainer>

                <InputContainer>
                    <InputContainer.Field>Observação</InputContainer.Field>
                    <InputContainer.Input place="" value={datas?.observations} onChangeText={(observation: any)=> handleChange("observations", observation)}/>
                </InputContainer>

                {
                isLoading == true ? <Button text={<Loading/>} onClick={() => {}} disabled={isLoading}/> : <Button text="Enviar" onClick={handleSubmit} disabled={isLoading}/>
                }

            </View>

        </ContainerLessMenuLessGradiente>
    </ScrollView>
    </View>
  );
}
