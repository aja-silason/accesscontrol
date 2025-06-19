import { Image, Text, View } from "react-native"
import { Styles } from "./Style";
import { ButtonIn } from "@/app/view/components/button";
import Container from "../../../components/container";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function Settings(){
    const {user} = useAuth();
    
    const navigate: any = useNavigation();

    if(!user) {
        //routing.handleRouteLogin();
        navigate.replace("login")
    }

    return (
            <Container>
            <View style={Styles.paddingThing}>
            
                <View  style={Styles.container}>
                    <View style={Styles.containerImgBorder}>
                        <View style={Styles.containerImgBorderInner}>
                            <Image source={require("@/assets/profileimage/profile.png")} style={Styles.profileimage}/>
                        </View>
                    </View>
                    <Text style={Styles.title}>{user?.login?.name?.toUpperCase()} {user.login.surname?.toUpperCase()}</Text>
                    <Text style={Styles.subtitle}>{user?.login?.role?.role?.toLowerCase() == "a" ? 'Controlo de Acesso' : user?.login?.role?.role?.toLowerCase() == "b" ? 'Abastecimento' : ''}</Text>
                </View>

                <View style={Styles.innerBtn}>
                    {/*<ButtonIn text="Segurança" onClick={routing.handleRouteChangePassword}/>*/}
                    <ButtonIn text="Termos de uso e políticas de privacidade" onClick={() => user?.login?.role?.role?.toLowerCase() == "a" ? navigate?.navigate("policyterma") : navigate?.navigate("policytermb")}/>
                    <ButtonIn text="Guia de utilização" onClick={() => user?.login?.role?.role?.toLowerCase() == "a" ? navigate?.navigate("userguidea") : navigate?.navigate("userguideb")}/>
                </View>

            </View>
        </Container>
    )
}