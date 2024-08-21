import { CardList } from "@/components/cards/Cards";
import { mockCars } from "@/utils/mocks/mock";
import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, Text, View } from "react-native"
import { Style } from "./Styles";
import { HeaderIn } from "@/components/header";
import { ContainerLessMenuLessGradiente } from "../../container"; 
import { TabButton } from "@/components/button";
import { useState } from "react";
import { useGetDatas } from "@/hooks/useGetDatas";


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


export default function AccesHistory(){

    const {id} = useLocalSearchParams();
    const [isDriver, setIsDriver] = useState(true);
    const [isTransport, setIsTransport] = useState(false);

    // const [oneDistribuitor, setOneDistribuitor] = useState<any>([])

    const {data: distribuitor} = useGetDatas(`distribuitor/key/${id}`);
    // setOneDistribuitor(distribuitor);

    const handleIsDriver = () => {
        setIsDriver(!isDriver); 
        setIsTransport(false);
    }
    const handleIsTransport = () => {
        setIsTransport(!isTransport);
        setIsDriver(false) 
    }



    console.log("Distttttt: ss", distribuitor?.transports);



    return (
        <View>
            <HeaderIn title={`${distribuitor?.distribuitor}`} back="yes"/>
            <ContainerLessMenuLessGradiente>

                <View style={Style.innerHistoricAcessBtn}>
                    <TabButton text="Motorista" active={isDriver} onClick={handleIsDriver}/>
                    <TabButton text="Transporte" active={isTransport} onClick={handleIsTransport}/>
                </View>
                <View style={Style.viewlist}>

                    {
                        isDriver ? (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {

                                    distribuitor?.drivers?.map((item: cardProps) => <CardList brandOfCar={item.drivingLicenceNumber} date={item.createdAt} distribuitor={item?.driver} matricula={item?.registration} portOfCar={item.bilhete} typeOfCar={item?.telephone}/>)
                                        
                                }
                            </ScrollView>
                            
                        ) : (
                            
                            <ScrollView showsVerticalScrollIndicator={false}>

                            {

                            distribuitor?.transports?.map((item: cardProps) => <CardList brandOfCar={item?.typeTransport?.type} date={item.createdAt} distribuitor={item?.brand} matricula={item.registration} portOfCar={item?.color} typeOfCar={item?.typeTransport?.type}/>)
                            
                            }
                </ScrollView>
                        )
                    }
                </View>
            </ContainerLessMenuLessGradiente>
        </View>
    )
}