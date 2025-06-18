import { useState } from "react";
import { useGetDatas } from "../useGetDatas";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "react-native";
import { API_URL } from "../../utils/server/enpoint";
import axios from "axios";

type typePayload = {
    distribuitorId?: string,
    supervisorCode: string,
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

    const [datas, setDatas] = useState<typePayload>({driverCode: "", ocurrence: "", plataformId: "", transportCode: "", supervisorCode: ""});

    const { data: option } = useGetDatas("distribuitor");
    const { data: driver } = useGetDatas("driver");
    const { data: vehicle } = useGetDatas("transport");

    if (!option || !driver || !vehicle) return null

    const { user } = useAuth();

    const distribuitorData: any = option?.map((item: any) => ({ label: item?.distribuitor, value: item?.id, id: item?.id }));

    const driverdata: any = driver?.filter((data: any) => data?.authorizationCode?.toLowerCase()?.includes(datas?.driverCode?.toLocaleLowerCase()))

    const vehicledata: any = vehicle?.filter((data: any) => data?.authorizationCode?.toLowerCase()?.includes(datas?.transportCode.toLocaleLowerCase()))

    const handleChange = (name: string, value: string) => {
        setDatas((prevState: any) => ({...prevState, [name]: value}))
    }

    const handleSubmit = async () => {
        setIsloading(true)
        try {

            const payload = {
                distribuitorId: distribuitor,
                supervisorCode: user?.login?.id,
                plataformId: user?.login?.plataform?.id,
                driverCode: driverdata[0]?.id,
                transportCode: vehicledata[0]?.id,
                ocurrence: datas?.ocurrence,

            }

                console.log(JSON.stringify(payload, null, 2))

            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverCode", "ocurrence", "plataformId", "supervisorCode", "transportCode"];
            for (const key of isValidate) {
                if (payload[key] == undefined) {
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
        } finally {
            setIsloading(false);
        }


    }

    return { datas, handleSubmit, isLoading, distribuitor, setDistribuitor, distribuitorData, handleChange }

    //return {data, handleSubmit, isLoading, distribuitor, setDistribuitor, distribuitorData, handleChange}

}
