import { Alert, ScrollView, Switch, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "@/app/screens/container";
import { HeaderIn } from "@/components/header";
import { Button } from "@/components/button";
import { Style } from "./style";
import { InputContainer, SelectContainer, Textarea } from "@/components/input/input";
import { useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { useGetDatas } from "@/hooks/useGetDatas";
import { useAuth } from "@/context/AuthContext";
import { API_URL } from "@/utils/server/enpoint";
import axios from "axios";
import { Loading } from "@/components/loading";

type typePayload = {
    distribuitorId: string,
    supervisorCode: string,
    plataformId: string,
    driverCode: string,
    transportCode: string,
    ocurrence: string
}

export default function Ocorrency() {
    
    const [distribuitor, setDistribuitor] = useState<string>();
    const [product, setProduct] = useState<string>();
    const [eigth, setEigth] = useState<string>();
    const [isLoading, setIsloading] = useState(false);
    const [searchDriver, setSearchDriver] = useState("");
    const [searchVehicle, setSearchVehicle] = useState("");
    const [ocorrence, setOcorrence] = useState("");
 
    const {data: option} = useGetDatas("distribuitor");
    const {data: driver} = useGetDatas("driver");
    const {data: vehicle} = useGetDatas("transport");

    if(!option || !driver || !vehicle) return null

    const {user} = useAuth()
      
    const distribuitorData = option?.map((item:any) => ({label: item?.distribuitor, value: item?.id, id: item?.id}));
      
    const driverdata = driver?.filter((data: any) => data?.driverCode?.toLowerCase()?.includes(searchDriver.toLocaleLowerCase()))

    const vehicledata = vehicle?.filter((data: any) => data?.driverCode?.toLowerCase()?.includes(searchVehicle.toLocaleLowerCase()))

      const handleSubmit = async () => {
          setIsloading(true)
          try {
            
            const payload = {
                distribuitorId: distribuitor,
                supervisorCode: user?.login?.id,
                plataformId: user?.login?.plataform?.id,
                driverCode: driverdata[0]?.id,
                transportCode: vehicledata[0]?.id,
                ocurrence: ocorrence,

            }

            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverCode", "ocurrence", "plataformId", "supervisorCode", "transportCode"];
            for(const key of isValidate){
                if(payload[key] == undefined ){
                    setIsloading(false);
                    return Alert.alert("Alerta", "Verifique o formulário");
                }
            }

            await axios.post(`${API_URL}ocurrences`, payload, {
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
    <ScrollView style={{height: "100%", backgroundColor: "#fff"}}>
        
        <HeaderIn title="Ocorrências" back="yes"/>

        <ContainerLessMenuLessGradiente>
            {/* <Text style={Style.txtInput}>Alterar dados da conta.</Text> */}
            <View style={Style.container}>
                {/* <InputContainer>
                    <InputContainer.Field>Plataforma</InputContainer.Field>
                    <InputContainer.Input place="seu@email.com" value={value} onChangeText={(value: any) => setValue(value)}/>
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

                {/* <InputContainer>
                    <InputContainer.Field>Supervisor</InputContainer.Field>
                    <InputContainer.Input place="Jacinto Otávio"/>
                </InputContainer> */}

                <Textarea place="Descrição" title="Ocorrência" value={searchVehicle} onChangeText={(vehiclefield: any)=> setSearchVehicle(vehiclefield)}/>


                {
                isLoading == true ? <Button text={<Loading/>} onClick={() => {}} disabled={isLoading}/> : <Button text="Enviar" onClick={handleSubmit} disabled={isLoading}/>
                }

            </View>

        </ContainerLessMenuLessGradiente>
    </ScrollView>
  );
}
