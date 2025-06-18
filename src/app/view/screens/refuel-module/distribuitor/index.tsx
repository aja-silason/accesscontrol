import { CardList } from "@/app/view/components/cards/Cards";
import { FlatList, Text, View } from "react-native"
import { Style } from "./Styles";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { useAuth } from "@/app/viewmodel/context/AuthContext";

export default function Distribuitor(){
    
    const {user, isLoading: principalloading} = useAuth();

    const {data} = useGetDatas(principalloading || !user ? null : "user");
    
    return (

        <View >
            <Text>Informações sobre operações, registro de entrada e saída na plataforma.</Text>
            <View style={Style.viewlist}>
                    <FlatList
                        data={data}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => (
                            <CardList brandOfCar="Volvao" date="10 de Ago. às 09:50" distribuitor="Pumangol" matricula="LD-41-23-XI" portOfCar="Tanque" typeOfCar="Caminhão"/>
                        )
                    } disableScrollViewPanResponder/>
                </View>
        </View>
    )
}