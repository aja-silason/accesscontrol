import { HeaderIn } from "@/app/view/components/header";
import { Button } from "@/app/view/components/button";
import { InputContainer, SelectContainer, Textarea } from "@/app/view/components/input/input";
import RNPickerSelect from 'react-native-picker-select';
import { Style } from "./style";
import { Loading, LoadingCode } from "@/app/view/components/loading";
import { useCreateSupplie } from "@/app/viewmodel/hooks/creational/useCreateSupplie";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Alert, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "@/app/view/components/container";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { useState } from "react";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import axios from "axios";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import Select from "@/app/view/components/select";
import { Colors } from "@/app/view/styles/color";

type typePayload = {
    distribuitorId: string,
    quantity: number,
    plataformId: string,
    productId: string,
    driverCode: string,
    vehicleCode: string,
    observations: string,
    tanksId: string
}

enum STEP {
    step1 = 0,
    step2 = 1
}

export default function Supplie() {

    const { user } = useAuth()

    const [dataPayload, setDataPayload] = useState<any>({ distribuitor: "", eigth: "", tanks: "", searchDriver: "", searchVehicle: "" })

    const handleChange = (name: string, value: string) => {
        setDataPayload((prevState: any) => ({
            ...prevState, [name]: value
        }))
    }

    const [isLoading, setIsloading] = useState(false);

    const [step, setStep] = useState<number>(STEP.step1);

    const { data: endpointdistribuitor } = useGetDatas("distribuitor");
    const { data: endpointproduct } = useGetDatas("product");
    const { data: endpointtank }: any = useGetDatas(`platform/key/${user?.login?.plataform?.id}`);

    const distribuitorData = endpointdistribuitor?.map((item: any) => ({ label: item?.distribuitor, value: item?.id, id: item?.id }));

    const productData = endpointproduct?.map((item: any) => ({ label: item?.product, value: item?.id, id: item?.id }));

    const tankData = endpointtank?.tanks?.map((item: any) => ({ label: item?.tank, value: item?.id, id: item?.id }));

    const handleSubmit = async () => {
        setIsloading(true)

        const payload = {
            distribuitorId: dataPayload?.distribuitor,
            quantity: +dataPayload?.eigth,
            plataformId: user?.login?.plataform?.id,
            productId: dataPayload?.product,
            driverCode: dataPayload?.searchDriver?.toUpperCase(),
            vehicleCode: dataPayload?.searchVehicle?.toUpperCase(),
            observations: dataPayload?.observation,
            tanksId: dataPayload?.tanks

        }

        try {


            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverCode", "observations", "plataformId", "productId", "quantity", "vehicleCode", "tanksId"];
            for (const key of isValidate) {
                if (payload[key] == undefined) {
                    setIsloading(false);
                    return Alert.alert("Notificação", `Verifique o formulário ${key}`);
                }
            }

            const { data } = await axios.post(`${API_URL}supply`, payload, {
                headers: {
                    Authorization: `Bearer ${user?.authorizationToken}`
                }
            })

            console.log("Olha o data", data);

            Alert.alert("Notificação", "Abastecimento registrado.", [
                {
                    text: "Ok",
                    onPress: () => { }
                }
            ]);

            setDataPayload({ distribuitor: "", eigth: "", tanks: "", searchDriver: "", searchVehicle: "" })

            setIsloading(true);

        } catch (error: any) {

            if (error?.response?.data?.message?.includes("Quantidade insuficiente")) {
                Alert.alert("Notificação", `Quantidade insuficiente no reservatório selecionado.`);
            }

            console.log(error?.response?.data)
            if (error?.response?.data?.statusCode == 422) {
                Alert.alert("Notificação", "Verifique as credênciais e tente novamente");
            }

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

    const handleStep = () => setStep(STEP.step2);

    return (

        <View style={{ backgroundColor: "#C98B05", height: "110%" }}>
            <HeaderIn title="Abastecimento" back="yes" />

            <ContainerLessMenuLessGradiente>
                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    extraScrollHeight={200}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={Style.container}>

                        {
                            step === STEP.step1 ? (
                                <View style={{ gap: 10 }}>

                                    <Text style={Styles.text}>Distribuidora</Text>
                                    <Select
                                        options={distribuitorData}
                                        selectedValue={dataPayload?.distribuitor}
                                        onSelect={(value: string) => handleChange("distribuitor", value)}
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
                                        dataPayload?.distribuitor !== null && dataPayload?.searchDriver.length == 5 && dataPayload?.searchVehicle.length == 5 ? <Button text="Próximo" onClick={handleStep} /> : <Button text="Próximo" onClick={handleStep} disabled={true} />
                                    }

                                </View>

                            ) : step === STEP.step2 ? (

                                <View style={{ gap: 10 }}>

                                    <Text style={Styles.text}>Produto</Text>
                                    <Select
                                        options={productData}
                                        selectedValue={dataPayload?.product}
                                        onSelect={(value: string) => handleChange("product", value)}
                                    />


                                    <Text style={Styles.text}>Tanque</Text>
                                    <Select
                                        options={tankData}
                                        selectedValue={dataPayload?.tanks}
                                        onSelect={(value: string) => handleChange("tanks", value)}
                                    />

                                    <InputContainer>
                                        <InputContainer.Field>Litros</InputContainer.Field>
                                        <InputContainer.Input place="1000" inputType="number-pad" value={dataPayload?.eigth} onChangeText={(eigth: any) => handleChange("eigth", eigth)} />
                                    </InputContainer>

                                    <Textarea place="Descrição do abastecimento" title="Observação" value={dataPayload?.observation} onChangeText={(observation: any) => handleChange("observation", observation)} />

                                    {
                                        dataPayload?.product !== null && dataPayload?.eigth.length > 1 ?
                                            isLoading == true ? <Button text={<Loading />} onClick={() => { }} disabled={isLoading} /> : <Button text="Registrar abastecimento" onClick={handleSubmit} disabled={isLoading} /> : (
                                                <Button text="Registrar abastecimento" onClick={() => { }} disabled={true} />
                                            )
                                    }

                                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <TouchableOpacity onPress={() => setStep(STEP.step1)}>
                                            <Text style={{ color: "#000", textDecorationLine: "underline" }}>Voltar</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            ) : null
                        }

                    </View>
                </KeyboardAwareScrollView>

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
