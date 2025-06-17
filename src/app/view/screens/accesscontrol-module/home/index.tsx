import { CardHome, CardList } from "@/app/view/components/cards/Cards";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./Style";
import QRIconSvg from "@/app/view/components/svg/qricon";
import WriteIconSvg from "@/app/view/components/svg/WriteIconSvg";
import { mockCars } from "@/app/viewmodel/utils/mocks/mock";
import { SearchInput } from "@/app/view/components/input/input";
import { Header } from "@/app/view/components/header";
import Container from "../../../components/container";
import { routing } from "@/app/viewmodel/services/Navegation";
import { Link } from "expo-router";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { ReactNode, useEffect, useState } from "react";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { useNavigation } from "@react-navigation/native";

type cardProps = {
    title: string;
    icon: ReactNode;
    event: VoidFunction
}

export default function Home(){

    const {user} = useAuth();

    // const {data: quantity} = useGetDatas("platform");
    const {data: plataform} = useGetDatas("platform");

    const entrance = plataform?.map((plataform: any) => plataform.platformEntrances); 

    entrance?.map((item: any) => console.log("erro de network", item.id));
    
    const navigate: any = useNavigation();

    const cards: cardProps[] = [
        {title: "Digitar Código", icon: <WriteIconSvg/>, event: navigate.navigate("qrcoderead")},
        {title: "Ler o Código QR", icon: <QRIconSvg/>, event: () => {} }
    ]

    //navigate.navigate("entercodedriver")
        
    return (
        <Container>
            <View style={Styles.container}>
                <View style={Styles.textCont}>
                    <Text style={Styles.title}>Controlo de Acesso</Text>
                </View>
                <View style={Styles.viewcard}>

                    {/* {
                        cards?.map((item: cardProps) => (
                            <TouchableOpacity activeOpacity={0.9} onPress={item.event} style={{width: "50%"}}>
                                <CardHome icon={item.icon} title={item.title} />
                            </TouchableOpacity>
                        ))
                    } */}

                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigate.navigate("entercodedriver")} style={{width: "50%"}}>
                        <CardHome icon={<WriteIconSvg/>} title="Digitar Código" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigate.navigate("qrcoderead")} style={{width: "50%"}}>
                        <CardHome icon={<QRIconSvg/>} title="Ler o Código QR" />
                    </TouchableOpacity>

                </View>
                <View style={Styles.viewlist}>
                    <Text style={Styles.title}>Entradas recentes</Text>

                    <View style={Styles.searchInputContainer}>
                        <SearchInput placeholder="a matricula"/>
                    </View>
                    <View style={Styles.viewListCards}>
                    <ScrollView style={{backgroundColor: "#fff"}}>
                        {
                            entrance.length  > 0 ? entrance.map((item: any) => (
                                <View>
                                    <TouchableOpacity onPress={() => routing.handleRouteGetEntries(item.id)} activeOpacity={0.8}>
                                        <CardList brandOfCar={item?.adress} date={item?.createdAt} distribuitor={item?.plataform} matricula={item?.owner} portOfCar={item.owner} typeOfCar={item.owner}/>
                                    </TouchableOpacity>
                                </View>
                                )

                            ) : <View style={{alignItems: "center", justifyContent: "center", height: 100}}>
                            <Text style={{color: "#ccc", textAlign: "center"}}>Sem dados para apresentar{"\n"} no momento</Text>
                        </View>
                                
                        }
                    </ScrollView>
                    </View>
                </View>
            </View>
        </Container>
    )
}