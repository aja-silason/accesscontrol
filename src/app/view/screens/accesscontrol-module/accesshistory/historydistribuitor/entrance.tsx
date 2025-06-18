import { CardList } from "@/app/view/components/cards/Cards";
import { mockCars } from "@/app/viewmodel/utils/mocks/mock";
import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, Text, View } from "react-native"
import { Style } from "./Styles";
import { HeaderIn } from "@/app/view/components/header";
import { ContainerLessMenuLessGradiente } from "../../../../components/container";
import { TabButton } from "@/app/view/components/button";
import { useState } from "react";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { useRoute } from "@react-navigation/native";
import { LoadingCode } from "@/app/view/components/loading";
import { useAuth } from "@/app/viewmodel/context/AuthContext";


type cardProps = {
    id: string,
    brand: string,
    registration: string,
    model: string,
    color: string,
    authorizationCode: number,
    createdAt: string,
    distribuitor: any,
    typeTransportId: any,
    driver: string,
    bilhete: string,
    drivingLicenceNumber: string,
}


export default function AccesHistory() {

    const [isDriver, setIsDriver] = useState(true);
    const [isTransport, setIsTransport] = useState(false);

    const route: any = useRoute();
    const { payload } = route?.params;

    // const [oneDistribuitor, setOneDistribuitor] = useState<any>([])

    const { user, isLoading: principalloading } = useAuth();

    const { data: distribuitor }: any = useGetDatas( principalloading || !user ? null : `distribuitor/key/${payload?.id}`);
    // setOneDistribuitor(distribuitor);

    const handleIsDriver = () => {
        setIsDriver(!isDriver);
        setIsTransport(false);
    }
    const handleIsTransport = () => {
        setIsTransport(!isTransport);
        setIsDriver(false)
    }

    return (
        <View>
            <HeaderIn title={`${distribuitor?.distribuitor ?? 'Distribuidora'}`} back="yes" />
            <ContainerLessMenuLessGradiente>

                <View style={Style.innerHistoricAcessBtn}>
                    <TabButton text="Motorista" active={isDriver} onClick={handleIsDriver} />
                    <TabButton text="Transporte" active={isTransport} onClick={handleIsTransport} />
                </View>
                <View style={Style.viewlist}>

                    {
                        distribuitor?.length == 0 ? (
                            <LoadingCode />
                        ) : (
                            isDriver ? (

                                <FlatList
                                    data={payload?.drivers}
                                    keyExtractor={(item: any) => item.id}
                                    renderItem={({ item }) => (
                                        <CardList brandOfCar={item.drivingLicenceNumber} date={item.createdAt} distribuitor={item?.driver} matricula={item?.registration} portOfCar={item.bilhete} typeOfCar={item?.telephone} />
                                    )
                                    } showsVerticalScrollIndicator={false} />

                            ) : (

                                <FlatList
                                    data={payload?.transports}
                                    keyExtractor={(item: any) => item.id}
                                    renderItem={({ item }) => (
                                        <CardList brandOfCar={item?.typeTransport?.type} date={item.createdAt} distribuitor={item?.brand} matricula={item.registration} portOfCar={item?.color} typeOfCar={item?.typeTransport?.type} />
                                    )
                                    } showsVerticalScrollIndicator={false} />

                            )

                        )
                    }
                </View>
            </ContainerLessMenuLessGradiente>
        </View>
    )
}