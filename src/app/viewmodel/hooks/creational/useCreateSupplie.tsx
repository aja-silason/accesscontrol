import { Alert } from "react-native";
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
    driverId: string,
    vehicleId: string,
    observations: string,

}

export const useCreateSupplie = () => {


const [distribuitor, setDistribuitor] = useState<string>();
    const [product, setProduct] = useState<string>();
    const [eigth, setEigth] = useState<string>();
    const [isLoading, setIsloading] = useState(false);
    const [searchDriver, setSearchDriver] = useState("");
    const [searchVehicle, setSearchVehicle] = useState("");
    const [observation, setObservation] = useState("");

    const [datas, setDatas] = useState<typePayload>({distribuitorId: "", driverId: "", observations: "", plataformId: "", productId: "", quantity: "", vehicleId: ""})
 
    const {data: option} = useGetDatas("distribuitor");
    const {data: option2} = useGetDatas("product");
    const {data: driver} = useGetDatas("driver");
    const {data: vehicle} = useGetDatas("transport");

    if(!option || !option2 || !driver || !vehicle) return null

    const {user} = useAuth()
      
    const distribuitorData: any = option?.map((item:any) => ({label: item?.distribuitor, value: item?.id, id: item?.id}));

    const productData: any = option2?.map((item:any) => ({label: item?.product, value: item?.id, id: item?.id}));
      
    const driverdata: any = driver?.filter((data: any) => data?.driverCode?.toLowerCase()?.includes(searchDriver.toLocaleLowerCase()))

    const vehicledata: any = vehicle?.filter((data: any) => data?.driverCode?.toLowerCase()?.includes(searchVehicle.toLocaleLowerCase()))

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
                quantity: eigth, 
                plataformId: user?.login?.plataform?.id,
                productId: product,
                driverId: driverdata[0]?.id,
                vehicleId: vehicledata[0]?.id,
                observations: observation,

            }

            const isValidate: Array<keyof typePayload> = ["distribuitorId", "driverId", "observations", "plataformId", "productId", "quantity", "vehicleId"];
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

    return {datas, handleSubmit, product, distribuitor, setProduct, setDistribuitor, distribuitorData, productData, handleChange, isLoading}

}
