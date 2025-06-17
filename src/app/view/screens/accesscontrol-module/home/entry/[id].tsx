import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { ContainerLessMenu } from "../../../../components/container";
import { HeaderLessGradient } from "@/app/view/components/header";
import { CardDetails, CardList } from "@/app/view/components/cards/Cards";
import { Styles } from "./style";
import { mockCars } from "@/app/viewmodel/utils/mocks/mock";
import { TabButton } from "@/app/view/components/button";


export default function Page() {

  const { id } = useLocalSearchParams();
  const [isDriver, setIsDriver] = useState(true);
  const [isTransport, setIsTransport] = useState(false);

  const handleIsDriver = () => {
    setIsDriver(!isDriver); 
    setIsTransport(false);
    console.log(`isDriver esta ${isDriver} e o transport esta ${isTransport}`);
  }
  const handleIsTransport = () => {
    setIsTransport(!isTransport);
    setIsDriver(false) 
  }

  return (
    <View>
        
        <HeaderLessGradient title={`${id}`} back="gradiente"/>
        <ContainerLessMenu>
            <View style={Styles.mergeThingCard}>
                <CardDetails/>
            </View>

            <View style={Styles.mergeThing}>
                <View style={Styles.historicAccess}>
                    <Text style={Styles.innerHistoricAcessBold}>Historico de acesso</Text>
                    
                    <View style={Styles.innerHistoricAcessBtn}>
                        <TabButton text="Motorista" active={isDriver} onClick={handleIsDriver}/>
                        <TabButton text="Transporte" active={isTransport} onClick={handleIsTransport}/>
                    </View>

                    <View>

                        {
                            isDriver ? (
                                <FlatList
                                    data={mockCars}
                                    keyExtractor={(item: any) => item.id}
                                    renderItem={({ item }) => (
                                        <View>
                                            <CardList brandOfCar="João" date="10 de Ago. às 09:50" distribuitor="Martins" matricula="LD-41-23-XI" portOfCar="Tanque" typeOfCar="Caminhão"/>
                                            
                                        </View>
                                    )
                                } showsVerticalScrollIndicator={false}/>
                            ) : (
                                <FlatList
                                    data={mockCars}
                                    keyExtractor={(item: any) => item.id}
                                    renderItem={({ item }) => (
                                        <View>
                                            <CardList brandOfCar="Volvo" date="10 de Ago. às 09:50" distribuitor="Pumangol" matricula="LD-41-23-XI" portOfCar="Tanque" typeOfCar="Caminhão"/>
                                            
                                        </View>
                                    )
                                } showsVerticalScrollIndicator={false}/>
                            )
                        }

                    </View>

                </View>
            </View>

        </ContainerLessMenu>
    </View>
  );
}
