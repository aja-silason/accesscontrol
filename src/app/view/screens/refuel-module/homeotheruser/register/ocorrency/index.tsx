import { ContainerLessMenuLessGradiente } from "@/app/view/components/container";
import { HeaderIn } from "@/app/view/components/header";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import axios from "axios";
import { useState } from "react";
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Style } from "./style";
import Select from "@/app/view/components/select";
import { InputContainer, Textarea } from "@/app/view/components/input/input";
import { Button } from "@/app/view/components/button";
import { Loading } from "@/app/view/components/loading";
import { Colors } from "@/app/view/styles/color";

type typePayload = {
    distribuitorId: string,
    supervisorId: string,
    plataformId: string,
    driverCode: string,
    transportCode: string,
    ocurrence: string
}

enum STEP {
    step1 = 0,
    step2 = 1
}

export default function Ocorrency() {

    const [distribuitor, setDistribuitor] = useState<string | any>();

    const [dataPayload, setDataPaylod] = useState<any>({ searchDriver: "", searchVehicle: "", ocorrence: "" });

    const [step, setStep] = useState<number>(STEP.step1)

    const handleChange = (name: string, value: string) => {
        setDataPaylod((prevState: any) => ({
            ...prevState, [name]: value
        }))
    }

    const [isLoading, setIsloading] = useState(false);

    const { data: option } = useGetDatas("distribuitor");

    const { user } = useAuth()

    const distribuitorData = option?.map((item: any) => ({ label: item?.distribuitor, value: item?.id, id: item?.id }));

    const handleSubmit = async () => {
        setIsloading(true)
        try {

            const payload = {
                distribuitorId: distribuitor,
                supervisorId: user?.login?.id,
                plataformId: user?.login?.plataform?.id,
                driverCode: dataPayload?.searchDriver,
                transportCode: dataPayload?.searchVehicle,
                ocurrence: dataPayload?.ocorrence,
            }


            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverCode", "ocurrence", "plataformId", "supervisorId", "transportCode"];

            for (const key of isValidate) {
                if (payload[key] == undefined) {
                    setIsloading(false);
                    return Alert.alert("Notificação", "Verifique o formulário");
                }
            }

            await axios.post(`${API_URL}occurences`, payload, {
                headers: {
                    Authorization: `Bearer ${user?.authorizationToken}`
                }
            })

            console.log(payload)

            Alert.alert("Notificação", "Ocorrencia enviada", [
                {
                    text: "Ok",
                    onPress: () => { }

                }
            ]);
            setDistribuitor({ label: 'Selecione a Distribuidora', value: null });
            setDataPaylod({ searchDriver: "", searchVehicle: "", ocorrence: "" });

            setIsloading(true)


        } catch (error: any) {
            if (error?.response?.data?.statusCode == 422)
                return Alert.alert("Notificação", "Erro no envio verifique as credênciasi, e tente novamente");
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const message = error?.response?.data?.error || "Erro desconhecido no servidor";
                    console.log("Erro desconhecido:", error?.code || error?.response?.data?.error?.includes("Bad Request"));
                    if (error?.code?.includes("ERR_BAD_REQUEST")) {
                        if (Platform.OS == "web") alert("Alguma coisa correu mal, estamos resolvendo por você");
                        Alert?.alert("Aviso", "Alguma coisa correu mal, estamos resolvendo por você");
                        //return
                    } else {
                        //Alert.alert("Erro", message);
                        if (Platform.OS == "web") alert("Alguma coisa correu mal, estamos resolvendo por você");
                        Alert.alert("Aviso", "Alguma coisa correu mal, estamos resolvendo por você");
                    }
                } else if (error?.status == 201) {
                    console.log('Sem resposta do servidor (Axios):', error.request);
                    if (Platform.OS == "web") alert("Aplicado com sucesso");
                    Alert.alert("Sucesso", "Aplicado com sucesso");
                    return;
                } else if (error.request) {
                    console.log('Sem resposta do servidor (Axios):', error.request);
                    if (Platform.OS == "web") alert("Verifique a sua conexão com a internet");
                    Alert.alert("Aviso", "Verifique a sua conexão com a internet");
                }
            } else if (error instanceof TypeError) {
                console.log('Erro de rede (fetch):', error.message);
                if (Platform.OS == "web") alert("Erro de rede ou resposta inválida");
                Alert.alert("Aviso", "Erro de rede ou resposta inválida");
            } else {
                console.log('Aviso desconhecido:', error);
                if (Platform.OS == "web") alert("Alguma coisa correu mal, estamos resolvendo por você");
                Alert.alert("Aviso", "Alguma coisa correu mal, estamos resolvendo por você");
            }
        } finally {
            setIsloading(false);
        }
    }

    return (
        <View style={{ backgroundColor: "#C98B05", height: "110%" }}>

            <HeaderIn title="Ocorrencias" back="yes" />

            <ContainerLessMenuLessGradiente>


                <View style={Style.container}>

                    {
                        step === STEP.step1 ? (

                            <View style={{ gap: 10 }}>

                                <Text style={Styles.text}>Distribuidora</Text>
                                <Select
                                    options={distribuitorData}
                                    selectedValue={distribuitor}
                                    onSelect={(value: string) => setDistribuitor(value)}
                                />

                                <InputContainer>
                                    <InputContainer.Field>Credencial do Motorista</InputContainer.Field>
                                    <InputContainer.Input place="" value={dataPayload?.searchDriver} onChangeText={(driverfield: any) => handleChange("searchDriver", driverfield)} />
                                </InputContainer>

                                <InputContainer>
                                    <InputContainer.Field>Credencial do Veículo</InputContainer.Field>
                                    <InputContainer.Input place="" value={dataPayload?.searchVehicle} onChangeText={(vehiclefield: any) => handleChange("searchVehicle", vehiclefield)} />
                                </InputContainer>

                                {
                                    distribuitor !== null && dataPayload?.searchDriver.length == 5 && dataPayload?.searchVehicle.length == 5 ? isLoading == true ?

                                        <Button text={<Loading />} onClick={() => { }} disabled={isLoading} />

                                        : <Button text="Seguinte" onClick={() => setStep(STEP.step2)} disabled={isLoading} /> :

                                        <Button text="Seguinte" onClick={() => { }} disabled={true} />
                                }

                            </View>

                        ) : step === STEP.step2 ? (
                            <View style={{ gap: 10 }}>

                                <Textarea place="Descrição da ocorrencia" title="Ocorrencia" value={dataPayload?.ocorrence} onChangeText={(ocorrence: any) => handleChange("ocorrence", ocorrence)} />

                                {
                                    distribuitor !== null && dataPayload?.searchDriver.length == 5 && dataPayload?.searchVehicle.length == 5 ? isLoading == true ? <Button text={<Loading />} onClick={() => { }} disabled={isLoading} /> : <Button text="Registrar ocorrencias" onClick={handleSubmit} disabled={isLoading} /> : <Button text="Registrar ocorrencias" onClick={() => { }} disabled={true} />

                                }

                                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => setStep(STEP.step1)}>
                                        <Text style={{ color: "#000", textDecorationLine: "underline" }}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        ) : ""
                    }





                </View>

            </ContainerLessMenuLessGradiente>
        </View>
    );
}


const Styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: Colors.black[300],
        fontWeight: "600"
    }
});