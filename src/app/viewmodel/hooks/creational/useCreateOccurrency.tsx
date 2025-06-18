import { useState } from "react";
import { useGetDatas } from "../useGetDatas";
import { useAuth } from "../../context/AuthContext";
import { Alert, Platform } from "react-native";
import { API_URL } from "../../utils/server/enpoint";
import axios from "axios";

type typePayload = {
    distribuitorId?: string,
    supervisorId: string,
    plataformId: string,
    driverCode: string,
    transportCode: string,
    ocurrence: string
}

export const useCreateOccurrency = () => {

    const [distribuitor, setDistribuitor] = useState<string>();
    const [product, setProduct] = useState<string>();
    const [eigth, setEigth] = useState<string>();
    const [isLoading, setIsloading] = useState(false);
    const [searchDriver, setSearchDriver] = useState("");
    const [searchVehicle, setSearchVehicle] = useState("");
    const [ocorrence, setOcorrence] = useState("");

    const [datas, setDatas] = useState<typePayload>({ driverCode: "", ocurrence: "", plataformId: "", transportCode: "", supervisorId: "" });

    const { data: option } = useGetDatas("distribuitor");
    const { data: driver } = useGetDatas("driver");
    const { data: vehicle } = useGetDatas("transport");

    if (!option || !driver || !vehicle) return null

    const { user } = useAuth();

    const distribuitorData: any = option?.map((item: any) => ({ label: item?.distribuitor, value: item?.id, id: item?.id }));

    const driverdata: any = driver?.filter((data: any) => data?.authorizationCode?.toLowerCase()?.includes(datas?.driverCode?.toLocaleLowerCase()))

    const vehicledata: any = vehicle?.filter((data: any) => data?.authorizationCode?.toLowerCase()?.includes(datas?.transportCode.toLocaleLowerCase()))

    const handleChange = (name: string, value: string) => {
        setDatas((prevState: any) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async () => {
        setIsloading(true)
        try {

            const payload = {
                distribuitorId: distribuitor,
                supervisorId: user?.login?.id,
                plataformId: user?.login?.plataform?.id,
                driverCode: driverdata[0]?.id,
                transportCode: vehicledata[0]?.id,
                ocurrence: datas?.ocurrence,

            }

            console.log(JSON.stringify(payload, null, 2))

            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverCode", "ocurrence", "plataformId", "supervisorId", "transportCode"];
            for (const key of isValidate) {
                if (payload[key] == undefined) {
                    setIsloading(false);
                    return Alert.alert("Alerta", "Verifique o formulário");
                }
            }

            await axios.post(`${API_URL}occurences`, payload, {
                headers: {
                    Authorization: `Bearer ${user?.authorizationToken}`
                }
            })


            setIsloading(true)
            setDatas({ driverCode: "", ocurrence: "", plataformId: "", transportCode: "", supervisorId: "" });

        } catch (error) {

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

    return { datas, handleSubmit, isLoading, distribuitor, setDistribuitor, distribuitorData, handleChange }

    //return {data, handleSubmit, isLoading, distribuitor, setDistribuitor, distribuitorData, handleChange}

}
