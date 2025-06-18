import { Text, View } from "react-native";
import { style } from "./style";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeaderIn } from "@/app/view/components/header";
import { ContainerLessMenuLessGradiente } from "@/app/view/components/container";
import { RadioCards } from "@/app/view/components/cards/Cards";
import CheckedIconSvg from "@/app/view/components/svg/CheckedSvg";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@/app/view/components/button";

type entranceTypeProps = {
    source: string,
    messageSignature: string,
    message: string,
    resourceType: string,
    transport: string,
    credential_driver: string,
    fullCredencial: {
      distribuitor: string,
      driver: string,
      drivingLicenceNumber: string,
      brand: string,
      registration: string,
      model: string,
      color: string
    },
    text: {
      div: string,
      message: string,
      status: number,
      out: boolean,
      checked: boolean
    }
  }

export default function EnterCodeConcluited() {

    const [dataEntrance, setDataEntrance] = useState<entranceTypeProps>();

    const navigate: any = useNavigation();

    useEffect(() => {
        const getEntrance = async () => {
            const entranceData = await AsyncStorage.getItem("entranceData");
            if(entranceData) {
                const parseData = JSON.parse(entranceData);
                setDataEntrance(parseData);
            }
        };

        getEntrance()
    }, [])

    const finnaly = async () => {
        await AsyncStorage.removeItem("entranceData");
        //navigate.navigate("checklist");
        navigate.navigate("accessControll");
    }

    return (
        <View style={{backgroundColor: "#C98B05", height: "110%"}}>
        <HeaderIn title="Introduzir Código" back="yes"/>
        <ContainerLessMenuLessGradiente>
        <View style={style.container}>
                <View>
                    <RadioCards step={3}/>
                </View>
                <View style={style.concluitedContainer}>

                  <CheckedIconSvg/>

                  <View style={style.textCenter}>
                    <Text style={style.textBoldAuth}>Autorizado</Text>
                    <Text style={style.textMedium}>Credêncial do motorista e do veículo validadas com sucesso</Text>
                  </View>

                  <View style={style.border}></View>

                  <View style={style.containerList}>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Distribuidora</Text>
                            <Text style={style.textBold}>{dataEntrance?.fullCredencial?.distribuitor}</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Veiculo</Text>
                            <Text style={style.textBold}>{dataEntrance?.fullCredencial?.brand}</Text>
                        </View>
                        
                    </View>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Motorista</Text>
                            <Text style={style.textBold}>{dataEntrance?.fullCredencial?.driver}</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Matricula</Text>
                            <Text style={style.textBold}>{dataEntrance?.fullCredencial?.registration}</Text>
                        </View>
                        
                       
                    </View>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Credencial</Text>
                            <Text style={style.textBold}>{dataEntrance?.credential_driver}</Text>
                        </View>

                        <View>
                            <Text style={style.textThin}>Credencial do carro</Text>
                            <Text style={style.textBold}>{dataEntrance?.transport}</Text>
                        </View>
                       
                    </View>
                  </View>

                </View>
                  <Button onClick={finnaly} styling="" text="Finalizar"/>
            </View>
        </ContainerLessMenuLessGradiente>
        </View>
    )
}