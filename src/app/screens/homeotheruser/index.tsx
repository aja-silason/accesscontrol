import { Button, Text, View } from "react-native"
import { Styles } from "./Style";
import { Header } from "@/components/header";
import Container from "../container";
import UserCicleSvg from "@/components/svg/UserCircle";
import MapSvg from "@/components/svg/MapCircleSvg";
import { CardLeft, UniCard } from "@/components/cards/Cards";
import AlertSvg from "@/components/svg/AlertsSvgs";
import GasSvg from "@/components/svg/GasSvg";
import { routing } from "@/services/Navegation";
import { useAuth } from "@/context/AuthContext";
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
                    <Text style={Styles.title}>Pumangol</Text>
                    <View style={Styles.details}>
                        <UserCicleSvg/>
                        <Text style={Styles.p}>Anania Augusto</Text>
                    </View>
                    <View style={Styles.details}>
                        <MapSvg/>
                        <Text style={Styles.p}>Viana, Jacinto Tchipa</Text>
                    </View>
                    <View style={Styles.viewcard}>
                        <UniCard/>
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