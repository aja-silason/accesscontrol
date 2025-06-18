import Container, { ContainerLessMenu } from "@/app/view/components/container";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Style } from "../accesshistory/Styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CardList } from "@/app/view/components/cards/Cards";
import { HeaderIn } from "@/app/view/components/header";
import EmptyContentSvg from "@/app/view/components/svg/EmptyContent";

export default function RecentAccessEntry() {

    const navigate: any = useNavigation();

    const route: any = useRoute();
    const { payload } = route?.params;

    return (
        <ContainerLessMenu>
            <HeaderIn title={payload?.plataform} back="yes" />

            <View style={[Style.viewlist, { height: "100%" }]}>
                <Text style={{ fontSize: 15, fontWeight: 600 }}>Entradas Recentes</Text>
                <FlatList
                    data={payload?.platformEntrances}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigate.navigate("accessentry", { payload: item })} activeOpacity={0.9}>
                            <CardList brandOfCar={item?.transports?.brand} date={item.createdAt} distribuitor={item?.distributor?.distribuitor} typeOfCar={item.transports?.model} />
                        </TouchableOpacity>
                    )
                    } showsVerticalScrollIndicator={false}

                    ListEmptyComponent={
                        <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <EmptyContentSvg width={90} height={90} />
                            <Text style={{ color: "#ccc", textAlign: "center" }}>Sem dados para apresentar{"\n"} no momento</Text>
                        </View>
                    }

                />
            </View>
        </ContainerLessMenu>
    )

}