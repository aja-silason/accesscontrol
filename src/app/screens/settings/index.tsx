import { Image, Text, View } from "react-native"
import { Styles } from "./Style";
import { ButtonIn } from "@/components/button";
import { HeaderIn } from "@/components/header";
import Container from "../container";
import { router } from "expo-router";
import { routing } from "@/services/Navegation";
import { useAuth } from "@/context/AuthContext";

export default function Settings(){
    const {user, login, logout} = useAuth();

    if(!user) {
        routing.handleRouteLogin();
    }

    console.log(user.login.name, user.login.surname)
    
    return (
        <View>
            <HeaderIn title="Definições"/>
            
            <Container>
            <View style={Styles.paddingThing}>
            
            <View  style={Styles.container}>
                <View style={Styles.containerImgBorder}>
                    <View style={Styles.containerImgBorderInner}>
                        <Image source={require("@/assets/profileimage/profile.png")} style={Styles.profileimage}/>
                    </View>
                </View>
                <Text style={Styles.title}>{user.login.name} {user.login.surname}</Text>
                <Text style={Styles.subtitle}>Engenheiro de Software</Text>
            </View>

            <View style={Styles.innerBtn}>
                <ButtonIn text="Segurança" onClick={routing.handleRouteChangePassword}/>
                <ButtonIn text="Termos de uso e políticas de privacidade" onClick={routing.handleRoutePrivaciesAndTerms}/>
                <ButtonIn text="Guia de utilização" onClick={routing.handleRouteUserGuide}/>
            </View>

        </View>
            </Container>
    </View>
    )
}