import { CardList } from "@/app/view/components/cards/Cards";
import { mockCars } from "@/app/viewmodel/utils/mocks/mock";
import { router } from "expo-router";
import { Button, FlatList, Text, View } from "react-native"
import { Style } from "./Styles";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/viewmodel/context/AuthContext";

export default function Distribuitor(){
    
    const {user} = useAuth();
    const {data} = useGetDatas("user");

    console.log("fora: aa a ", data);
    
    return (

        <View >
            <Text>Informações sobre operações, registro de entrada e saída na plataforma.</Text>
            <View style={Style.viewlist}>
                    <FlatList
                        data={data}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => (
                            <CardList brandOfCar="Volvao" date="10 de Ago. às 09:50" distribuitor="Pumangol" matricula="LD-41-23-XI" portOfCar="Tanque" typeOfCar="Caminhão"/>
                        )
                    } disableScrollViewPanResponder/>
                </View>
        </View>
    )
}