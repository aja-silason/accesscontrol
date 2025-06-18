import { CardHome, CardList } from "@/app/view/components/cards/Cards";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./Style";
import QRIconSvg from "@/app/view/components/svg/qricon";
import WriteIconSvg from "@/app/view/components/svg/WriteIconSvg";
import Container from "../../../components/container";
import { ReactNode } from "react";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { useNavigation } from "@react-navigation/native";
import EmptyContentSvg from "@/app/view/components/svg/EmptyContent";
import { Loading, LoadingCode } from "@/app/view/components/loading";
import { useAuth } from "@/app/viewmodel/context/AuthContext";

type cardProps = {
    title: string;
    icon: ReactNode;
    event: VoidFunction
}

export default function Home() {

    const {user, isLoading: principalloading } = useAuth();

    const { data: plataform } = useGetDatas(principalloading || !user ? null : "platform");

    const entrance = plataform?.map((plataform: any) => plataform);

    const navigate: any = useNavigation();

    return (
        <Container>
            <View style={Styles.container}>
                <View style={Styles.textCont}>
                    <Text style={Styles.title}>Controlo de Acesso</Text>
                </View>
                <View style={Styles.viewcard}>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigate.navigate("entercodedriver")} style={{ width: "50%" }}>
                        <CardHome icon={<WriteIconSvg />} title="Digitar Código" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigate.navigate("qrcoderead")} style={{ width: "50%" }}>
                        <CardHome icon={<QRIconSvg />} title="Scanear código QR" />
                    </TouchableOpacity>

                </View>

                <View style={Styles.viewlist}>
                    <Text style={Styles.title}>Entradas recentes</Text>

                    <View style={Styles.searchInputContainer}>
                        {/*<SearchInput placeholder="a matricula"/>*/}
                    </View>
                    <View style={Styles.viewListCards}>
                        <ScrollView style={{ backgroundColor: "#fff" }}>
                            {entrance?.length == 0 ? (
                                <LoadingCode />
                            ) : (
                                entrance?.length > 0 ? entrance?.map((item: any, index: number) => (
                                    <View>
                                        {
                                            <TouchableOpacity onPress={() => navigate?.navigate("recentaccessentry", { payload: item })} activeOpacity={0.8}>
                                                <CardList brandOfCar={item?.adress} date={item?.createdAt} distribuitor={item?.plataform} matricula={item?.owner} portOfCar={item.owner} typeOfCar={item.owner} key={index}/>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )

                                ) : (
                                    <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
                                        <EmptyContentSvg width={90} height={90} />
                                        <Text style={{ color: "#ccc", textAlign: "center" }}>Sem dados para apresentar{"\n"} no momento</Text>
                                    </View>
                                )

                            )

                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Container>
    )
}