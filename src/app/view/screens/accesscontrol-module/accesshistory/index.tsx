import { CardList } from "@/app/view/components/cards/Cards";
import { mockCars } from "@/app/viewmodel/utils/mocks/mock";
import { router, useNavigation } from "expo-router";
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Style } from "./Styles";
import { HeaderIn } from "@/app/view/components/header";
import Container from "../../../components/container";
import { routing } from "@/app/viewmodel/services/Navegation";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import SearchContentSvg from "@/app/view/components/svg/SearchContent";

export default function AccesHistory() {

    const { data: distribuitor } = useGetDatas("distribuitor");

    const navigate: any = useNavigation();

    return (
        <Container>
            <View style={Style.viewlist}>
                <Text style={{ fontSize: 15, fontWeight: 600 }}>Distribuidoras</Text>
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
            </View>
        </Container>
    )
}