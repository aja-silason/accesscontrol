import { Text, View } from "react-native"
import { Styles } from "./Style";
import Container from "../../../components/container";
import UserCicleSvg from "@/app/view/components/svg/UserCircle";
import MapSvg from "@/app/view/components/svg/MapCircleSvg";
import { UniCard } from "@/app/view/components/cards/Cards";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { Colors } from "@/app/view/styles/color";

export default function HomeRefuel(){

    const {user} = useAuth();

    const navigate: any = useNavigation();

    if(!user) {
        navigate.replace("login");

    }

    const { data: plataform }:any = useGetDatas(!user ? null : `platform/key/${user?.login?.plataform?.id}`)
    
    return (

        <Container>
            <View style={Styles.container}>
                <View style={Styles.textCont}>
                    <Text style={Styles.title}>Bem Vindo</Text>
                    <Text style={Styles.p}>Bem Vindo</Text>
                </View>
                <View style={[Styles.viewlist, {height: "100%", backgroundColor: Colors.white[200]}]}>
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