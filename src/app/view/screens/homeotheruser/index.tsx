import { Button, Text, View } from "react-native"
import { Styles } from "./Style";
import { Header } from "@/app/view/components/header";
import Container from "../container";
import UserCicleSvg from "@/app/view/components/svg/UserCircle";
import MapSvg from "@/app/view/components/svg/MapCircleSvg";
import { CardLeft, UniCard } from "@/app/view/components/cards/Cards";
import AlertSvg from "@/app/view/components/svg/AlertsSvgs";
import GasSvg from "@/app/view/components/svg/GasSvg";
import { routing } from "@/app/viewmodel/services/Navegation";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useEffect } from "react";

export default function Home(){

    const {user, login, logout} = useAuth();

    if(!user) {
        routing.handleRouteLogin();
    }

    return (
        
        <View>
        <Header/>
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
                        <UniCard entrance={0} out={0}/>
                    </View>

                    <View style={Styles.cardsDetails}>
                        <CardLeft quantity={2} title="Abastecimento">
                            <GasSvg/>
                        </CardLeft>
                        
                        <CardLeft quantity={2} title="Ocorrencia">
                            <AlertSvg/>
                        </CardLeft>
                    </View>
                    

                </View>
            </View>
        </Container>
    </View>
    )
}