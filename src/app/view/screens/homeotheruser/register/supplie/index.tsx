import { Alert, ScrollView, Switch, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "@/app/screens/container";
import { HeaderIn } from "@/app/view/components/header";
import { Button } from "@/app/view/components/button";
import { InputContainer, SelectContainer, Textarea } from "@/app/view/components/input/input";
import { useEffect, useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { Style } from "./style";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { Loading } from "@/app/view/components/loading";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import axios from "axios";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";

type typePayload = {
    distribuitorId: string,
    quantity: string,
    plataformId: string,
    productId: string,
    driverCode: string,
    vehicleCode: string,
    observations: string,

}


export default function Supplie() {
    const [distribuitor, setDistribuitor] = useState<string>();
    const [product, setProduct] = useState<string>();
    const [eigth, setEigth] = useState<string>();
    const [isLoading, setIsloading] = useState(false);
    const [searchDriver, setSearchDriver] = useState("");
    const [searchVehicle, setSearchVehicle] = useState("");
    const [observation, setObservation] = useState("");
 
    const {data: option} = useGetDatas("distribuitor");
    const {data: option2} = useGetDatas("product");
    const {data: driver} = useGetDatas("driver");
    const {data: vehicle} = useGetDatas("transport");

    if(!option || !option2 || !driver || !vehicle) return null

    const {user} = useAuth()
      
    const distribuitorData = option?.map((item:any) => ({label: item?.distribuitor, value: item?.id, id: item?.id}));

    const productData = option2?.map((item:any) => ({label: item?.product, value: item?.id, id: item?.id}));
      
    const driverdata = driver?.filter((data: any) => data?.driverCode?.toLowerCase()?.includes(searchDriver.toLocaleLowerCase()))

    const vehicledata = vehicle?.filter((data: any) => data?.driverCode?.toLowerCase()?.includes(searchVehicle.toLocaleLowerCase()))

      const handleSubmit = async () => {
          setIsloading(true)
          try {
            
            const payload = {
                distribuitorId: distribuitor,
                quantity: eigth, 
                plataformId: user?.login?.plataform?.id,
                productId: product,
                driverCode: driverdata[0]?.id,
                vehicleCode: vehicledata[0]?.id,
                observations: observation,

            }

            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverCode", "observations", "plataformId", "productId", "quantity", "vehicleCode"];
            for(const key of isValidate){
                if(payload[key] == undefined ){
                    setIsloading(false);
                    return Alert.alert("Alerta", "Verifique o formulário");
                }
            }

            await axios.post(`${API_URL}supply`, payload, {
                headers: {
                    Authorization: `Bearer ${user?.authorizationToken}`
                }
            })

          setIsloading(true)

        } catch (error) {
            console.log("Alerta de erro na app", error);
        }finally{
            setIsloading(false);
        }


      }
    

  return (

    <View>
      <ScrollView style={{height: "100%", backgroundColor: "#fff"}} showsVerticalScrollIndicator={false}>
      <HeaderIn title="Abastecimento" back="yes"/>

        <ContainerLessMenuLessGradiente>
            <View style={Style.container}>

                {/* <InputContainer>
                    <InputContainer.Field>Plataforma</InputContainer.Field>
                    <InputContainer.Input place="seu@email.com" value={plataform} onChangeText={(value: any) => setPlataform(value)}/>
                </InputContainer> */}

                <SelectContainer.Field>Distribuidora</SelectContainer.Field>
                <SelectContainer style={Style.bores}>
                    <RNPickerSelect
                        onValueChange={(value: any) => setDistribuitor(value)}
                        key={distribuitorData?.id}
                        items={distribuitorData}
                        value={distribuitor}
                        placeholder={{ label: 'Selecione a Distribuidora', value: null }}
                    />
                </SelectContainer>

                <InputContainer>
                    <InputContainer.Field>Código do Motorista</InputContainer.Field>
                    <InputContainer.Input place="" value={searchDriver} onChangeText={(driverfield: any)=> setSearchDriver(driverfield)}/>
                </InputContainer>

                <InputContainer>
                    <InputContainer.Field>Código do Veículo</InputContainer.Field>
                    <InputContainer.Input place="" value={searchVehicle} onChangeText={(vehiclefield: any)=> setSearchVehicle(vehiclefield)}/>
                </InputContainer>

                <SelectContainer.Field>Produto</SelectContainer.Field>
                <SelectContainer style={Style.bores}>
                    <RNPickerSelect
                        onValueChange={(value: any) => setProduct(value)}
                        items={productData}
                        value={product}
                        placeholder={{ label: 'Selecione o Produto', value: null }}
                    />
                </SelectContainer>

                <InputContainer>
                    <InputContainer.Field>Litros</InputContainer.Field>
                    <InputContainer.Input place="Em 1000 litros" value={eigth} onChangeText={(eigth: any)=> setEigth(eigth)}/>
                </InputContainer>

                <InputContainer>
                    <InputContainer.Field>Observação</InputContainer.Field>
                    <InputContainer.Input place="" value={observation} onChangeText={(observation: any)=> setObservation(observation)}/>
                </InputContainer>

                {
                isLoading == true ? <Button text={<Loading/>} onClick={() => {}} disabled={isLoading}/> : <Button text="Enviar" onClick={handleSubmit} disabled={isLoading}/>
                }

            </View>

        </ContainerLessMenuLessGradiente>
    </ScrollView>
    </View>
  );
}
