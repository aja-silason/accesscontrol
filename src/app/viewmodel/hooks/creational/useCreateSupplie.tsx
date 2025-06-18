import { Alert, Platform } from "react-native";
import { API_URL } from "../../utils/server/enpoint";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useGetDatas } from "../useGetDatas";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

type typePayload = {
    distribuitorId: string,
    quantity: string,
    plataformId: string,
    productId: string,
    driverCode: string,
    vehicleCode: string,
    observations: string,
    tanksId: string,

}


export const useCreateSupplie = () => {

    const [distribuitor, setDistribuitor] = useState<string | null>();
    const [tanks, setTanks] = useState<string | null>();
    const [product, setProduct] = useState<string | null>();
    const [isLoading, setIsloading] = useState(false);

    const [datas, setDatas] = useState<typePayload>({ distribuitorId: "", driverCode: "", observations: "", plataformId: "", productId: "", quantity: "", vehicleCode: "", tanksId: "" })

    const { user } = useAuth()

    const { data: option } = useGetDatas("distribuitor");
    const { data: option2 } = useGetDatas("product");
    const { data: driver } = useGetDatas("driver");
    const { data: vehicle } = useGetDatas("transport");
    const { data: endpointtank }: any = useGetDatas(`platform/key/${user?.login?.plataform?.id}`);

    if (!option || !option2 || !driver || !vehicle) return null


    const distribuitorData: any = option?.map((item: any) => ({ label: item?.distribuitor, value: item?.id, id: item?.id }));

    const productData: any = option2?.map((item: any) => ({ label: item?.product, value: item?.id, id: item?.id }));

    const tankData = endpointtank?.tanks?.map((item: any) => ({ label: item?.tank, value: item?.id, id: item?.id }));

    const navigate: any = useNavigation();

    //const driverdata: any = driver?.filter((data: any) => data?.authorizationCode?.toLowerCase()?.includes(datas?.driverCode.toLocaleLowerCase()))

    //const vehicledata: any = vehicle?.filter((data: any) => data?.authorizationCode?.toLowerCase()?.includes(datas?.vehicleCode.toLocaleLowerCase()))

    const handleChange = (name: string, value: string) => {
        setDatas((prevState) => ({
            ...prevState, [name]: value
        }))
    }

    const handleSubmit = async () => {
        setIsloading(true)
        try {

            /*const payload = {
                distribuitorId: distribuitor,
                quantity: datas?.quantity,
                plataformId: user?.login?.plataform?.id,
                productId: product,
                driverCode: driverdata[0]?.id,
                vehicleCode: vehicledata[0]?.id,
                observations: datas?.observations,

            }*/

            const payload = {
                distribuitorId: distribuitor,
                quantity: +datas?.quantity,
                plataformId: user?.login?.plataform?.id,
                productId: productData[0].id,
                driverCode: datas?.driverCode?.toUpperCase(),
                vehicleCode: datas?.vehicleCode?.toUpperCase(),
                observations: datas?.observations,
                tanksId: tankData[0]?.id

            }

            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverCode", "observations", "plataformId", "productId", "quantity", "vehicleCode", "tanksId"];
            for (const key of isValidate) {
                if (payload[key] == undefined || payload[key] == null) {
                    setIsloading(false);
                    return Alert.alert("Alerta", `Verifique o campo ${key == "driverCode" ? "Motorista" : key == "vehicleCode" ? "Veículo" : key == "distribuitorId" ? "Distribuidora" : key == "productId" ? "Combustível" : key == "tanksId" ? "Distribuidora" : ""} formulário`);
                }
            }

            console.log(JSON.stringify(payload, null, 2))

            await axios.post(`${API_URL}supply`, payload, {
                headers: {
                    Authorization: `Bearer ${user?.authorizationToken}`
                }
            })

            Alert.alert("Notificação", "Abastecimento registrado.", [
                {
                    text: "Ok",
                    onPress: () => {}
                }
            ]);

            setDatas({ distribuitorId: "", driverCode: "", observations: "", plataformId: "", productId: "", quantity: "", vehicleCode: "", tanksId: "" })
            setProduct(null)
            setDistribuitor(null)

            setIsloading(true)

        } catch (error: any) {
            console.log("Alerta de erro na app", error);
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

    return { datas, handleSubmit, product, distribuitor, setProduct, setDistribuitor, distribuitorData, productData, handleChange, isLoading }

}
