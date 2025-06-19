import { Alert, Platform } from "react-native";
import { API_URL } from "../../utils/server/enpoint";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useGetDatas } from "../useGetDatas";
import { useState } from "react";

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

    /*const { user, isLoading: principalloading } = useAuth()
    
    const [distribuitor, setDistribuitor] = useState<string | null>();
    const [product, setProduct] = useState<string | null>();
    const [isLoading, setIsloading] = useState(false);

    const [datas, setDatas] = useState<typePayload>({ distribuitorId: "", driverCode: "", observations: "", plataformId: "", productId: "", quantity: "", vehicleCode: "", tanksId: "" })

    const { data: option } = useGetDatas(principalloading || !user ? null : "distribuitor");
    const { data: option2 } = useGetDatas(principalloading || !user ? null : "product");
    const { data: driver } = useGetDatas(principalloading || !user ? null : "driver");
    const { data: vehicle } = useGetDatas(principalloading || !user ? null : "transport");
    const { data: endpointtank }: any = useGetDatas(principalloading || !user ? null : `platform/key/${user?.login?.plataform?.id}`);

    if (!option || !option2 || !driver || !vehicle) return null


    const distribuitorData: any = option?.map((item: any) => ({ label: item?.distribuitor, value: item?.id, id: item?.id }));

    const productData: any = option2?.map((item: any) => ({ label: item?.product, value: item?.id, id: item?.id }));

    const tankData = endpointtank?.tanks?.map((item: any) => ({ label: item?.tank, value: item?.id, id: item?.id }));

    const handleChange = (name: string, value: string) => {
        setDatas((prevState) => ({
            ...prevState, [name]: value
        }))
    }

    const handleSubmit = async () => {
        setIsloading(true)
        try {

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

            await axios?.post(`${API_URL}supply`, payload, {
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


    }*/

        const {user} = useAuth()

    const [dataPayload, setDataPayload] = useState<any>({distribuitor: "", eigth: "", tanks: "", searchDriver: "", searchVehicle: ""})

    const handleChange = (name: string, value: string) => {
        setDataPayload((prevState: any) => ({
            ...prevState, [name]: value
        }))
    }

    const [isLoading, setIsloading] = useState(false);
 
    const {data: endpointdistribuitor} = useGetDatas("distribuitor");
    const {data: endpointproduct} = useGetDatas("product");
    const {data: endpointtank}: any = useGetDatas(`platform/key/${user?.login?.plataform?.id}`);

    const distribuitorData = endpointdistribuitor?.map((item:any) => ({label: item?.distribuitor, value: item?.id, id: item?.id}));

    const productData = endpointproduct?.map((item:any) => ({label: item?.product, value: item?.id, id: item?.id}));

    const tankData = endpointtank?.tanks?.map((item:any) => ({label: item?.tank, value: item?.id, id: item?.id}));

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
            for(const key of isValidate){
                if(payload[key] == undefined ){
                    setIsloading(false);
                    return Alert.alert("Notificação", `Verifique o formulário ${key}`);
                }
            }

            const {data} = await axios.post(`${API_URL}supply`, payload, {
                headers: {
                    Authorization: `Bearer ${user?.authorizationToken}`
                }
            })

            console.log("Olha o data", data);

          Alert.alert("Notificação", "Abastecimento registrado.", [
            {
                text: "Ok",
                onPress: () => {}
            }
          ]);

          setDataPayload({distribuitor: "", eigth: "", tanks: "", searchDriver: "", searchVehicle: ""})

          setIsloading(true);

        } catch (error: any) {

            if(error?.response?.data?.message?.includes("Quantidade insuficiente")){
                Alert.alert("Notificação", `Quantidade insuficiente no reservatório selecionado.`);
            }

            console.log(error?.response?.data)
            if(error?.response?.data?.statusCode == 422){
                Alert.alert("Notificação", "Verifique as credênciais e tente novamente");
            }

        }finally{
            setIsloading(false);
        }

      }

    //return { datas, handleSubmit, productData, distribuitorData, setProduct, setDistribuitor, distribuitorData, productData, handleChange, isLoading }
    return { dataPayload, handleSubmit, productData, distribuitorData, handleChange, isLoading }

}
