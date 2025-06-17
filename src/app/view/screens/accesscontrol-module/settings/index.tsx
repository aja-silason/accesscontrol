import { Image, Text, View } from "react-native"
import { Styles } from "./Style";
import { ButtonIn } from "@/app/view/components/button";
import { HeaderIn } from "@/app/view/components/header";
import Container from "../../../components/container";
import { router } from "expo-router";
import { routing } from "@/app/viewmodel/services/Navegation";
import { useAuth } from "@/app/viewmodel/context/AuthContext";

export default function Settings(){
    const {user, login, logout} = useAuth();

    if(!user) {
        routing.handleRouteLogin();
    }

    console.log(user.login.name, user.login.surname)
    
    return (
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
    )
}