import { CardList } from "@/app/view/components/cards/Cards";
import { useNavigation } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { Style } from "./Styles";
import Container from "../../../components/container";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import SearchContentSvg from "@/app/view/components/svg/SearchContent";
import { LoadingCode } from "@/app/view/components/loading";
import { useAuth } from "@/app/viewmodel/context/AuthContext";

export default function AccesHistory() {

    const {user, isLoading: principalloading} = useAuth();

    const { data: distribuitor } = useGetDatas(principalloading || !user ? null : "distribuitor");

    const navigate: any = useNavigation();

    return (
        <Container>
            <View style={[Style.viewlist, {height: "100%"}]}>
                <Text style={{ fontSize: 15, fontWeight: 600 }}>Distribuidoras</Text>

                {
                    distribuitor == undefined || distribuitor == null || distribuitor?.length < 0 ? (

                        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, height: "100%" }}>
                            <LoadingCode />
                        </View>

                    ) : (

                        <FlatList
                            data={distribuitor}
                            keyExtractor={(item: any) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigate.navigate("accessehistoryentrance", { payload: item })} activeOpacity={0.9}>
                                    <CardList brandOfCar={item.distribuitor} date={item.createdAt} distribuitor={item.distribuitor} typeOfCar={item.licenceNumber} />
                                </TouchableOpacity>
                            )
                            } showsVerticalScrollIndicator={false}
                            ListEmptyComponent={
                                <View style={{ justifyContent: "center", alignItems: "center", flex: 1, height: "100%" }}>
                                    <SearchContentSvg width={80} height={80} />
                                    <Text>Sem Informações</Text>
                                </View>
                            }
                            style={{ height: "100%" }}
                        />
                    )
                }
            </View>
        </Container>
    )
}