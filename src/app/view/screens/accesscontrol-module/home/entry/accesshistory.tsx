import { Text, View } from "react-native";
import { useState } from "react";
import { ContainerLessMenu } from "../../../../components/container";
import { HeaderLessGradient } from "@/app/view/components/header";
import { CardDetails, CardList } from "@/app/view/components/cards/Cards";
import { Styles } from "./style";
import { TabButton } from "@/app/view/components/button";
import { useRoute } from "@react-navigation/native";


export default function AccessEntry() {

  const route: any = useRoute();
  const { payload } = route?.params;

  const [isDriver, setIsDriver] = useState(true);
  const [isTransport, setIsTransport] = useState(false);

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
        
        <HeaderLessGradient title={payload?.distributor?.distribuitor} back="gradiente"/>
        <ContainerLessMenu>
            <View style={Styles.mergeThingCard}>
                <CardDetails data={payload}/>
            </View>

            <View style={Styles.mergeThing}>
                <View style={Styles.historicAccess}>
                    <Text style={Styles.innerHistoricAcessBold}>Historico de acesso</Text>
                    
                    <View style={Styles.innerHistoricAcessBtn}>
                        <TabButton text="Motorista" active={isDriver} onClick={handleIsDriver}/>
                        <TabButton text="Transporte" active={isTransport} onClick={handleIsTransport}/>
                    </View>

                    <View>

                        {
                            isDriver ? (
                                <CardList brandOfCar={payload?.drivers?.bilhete} date={payload?.createdAt} distribuitor={payload?.drivers?.driver?.toUpperCase()} matricula="" portOfCar="" typeOfCar={payload?.drivers?.drivingLicenceNumber}/>
                            ) : (
                                <CardList brandOfCar={payload?.transports?.registration} date={payload?.createdAt} distribuitor={payload?.transports?.brand?.toUpperCase()} matricula="" portOfCar="" typeOfCar={payload?.transports?.color}/>
                            )
                        }

                    </View>

                </View>
            </View>

        </ContainerLessMenu>
    </View>
  );
}
