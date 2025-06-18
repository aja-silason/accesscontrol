import { Button, Text, View } from "react-native"
import { Styles } from "./Style";
import { Header } from "@/app/view/components/header";
import Container from "../../../components/container";
import UserCicleSvg from "@/app/view/components/svg/UserCircle";
import MapSvg from "@/app/view/components/svg/MapCircleSvg";
import { CardLeft, UniCard } from "@/app/view/components/cards/Cards";
import AlertSvg from "@/app/view/components/svg/AlertsSvgs";
import GasSvg from "@/app/view/components/svg/GasSvg";
import { routing } from "@/app/viewmodel/services/Navegation";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";

export default function HomeRefuel(){

    const {user} = useAuth();

    const navigate: any = useNavigation();

    if(!user) {
        navigate.replace("login");

    }

    console.log(user?.login?.plataform?.id);

    const { data: plataform }:any = useGetDatas(`platform/key/${user?.login?.plataform?.id}`)
    
    return (

        <Container>
            <View style={Styles.container}>
                <View style={Styles.textCont}>
                    <Text style={Styles.title}>Bem Vindo</Text>
                    <Text style={Styles.p}>Bem Vindo</Text>
                </View>
                <View style={Styles.viewlist}>
                    <Text style={Styles.title}>{user?.login?.plataform?.plataform}</Text>
                    <View style={Styles.details}>
                        <UserCicleSvg/>
                        <Text style={Styles.p}>{user?.login?.name} {user?.login?.surname}</Text>
                    </View>
                    <View style={Styles.details}>
                        <MapSvg/>
                        <Text style={Styles.p}>{user?.login?.plataform?.adress}</Text>
                    </View>

                    <View style={Styles.viewcard}>
                        <UniCard entrance={plataform?.platformEntrances?.length} out={plataform?.platformExits?.length}/>
                    </View>

{/*                    <View style={Styles.cardsDetails}>
                        <CardLeft quantity={2} title="Abastecimento">
                            <GasSvg/>
                        </CardLeft>
                        
                        <CardLeft quantity={2} title="Ocorrencia">
                            <AlertSvg/>
                        </CardLeft>
                    </View>
*/}                    

                </View>
            </View>
        </Container>
    )
}