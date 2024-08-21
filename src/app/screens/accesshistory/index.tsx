import { CardList } from "@/components/cards/Cards";
import { mockCars } from "@/utils/mocks/mock";
import { router, useNavigation } from "expo-router";
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Style } from "./Styles";
import { HeaderIn } from "@/components/header";
import Container from "../container";
import { routing } from "@/services/Navegation";
import { useAuth } from "@/context/AuthContext";
import { useGetDatas } from "@/hooks/useGetDatas";

export default function AccesHistory(){

    const {data: distribuitor} = useGetDatas("distribuitor");

    const handleRouteAccessHistoryId = (id: any) => {
        router.push(`/screens/accesshistory/historydistribuitor/${id}`);
    }

    return (
        <View>
            <HeaderIn title="Distribuidoras"/>
                <Container>
                        <View style={Style.viewlist}>
                            <FlatList
                                data={distribuitor}
                                keyExtractor={(item: any) => item.id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity  onPress={() => handleRouteAccessHistoryId(item.id)} activeOpacity={0.9}>
                                        <CardList brandOfCar={item.distribuitor} date={item.createdAt} distribuitor={item.distribuitor} typeOfCar={item.licenceNumber}/>
                                    </TouchableOpacity>
                                )
                            } showsVerticalScrollIndicator={false}/>
                        </View>
                </Container>
        </View>
    )
}