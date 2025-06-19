import axios from "axios";
import { Alert } from "react-native";
import { API_URL } from "../../utils/server/enpoint";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type InputState = {
    value: string;
}

export const useCreatevehicleEntrance = () => {

  const [valuesVehicle, setValuesVehicle] = useState<InputState[]>(new Array(5).fill({ value: '' }));
  
  const inputRefsVehicle: any = useRef<any>([]);

  const [focusedIndexVehicle, setFocusedIndexVehicle] = useState(0);
  
  const [codeVehicle, setCodeVehicle] = useState<string>()

  const [text, setText] = useState<string>("");
  const [codeDriver, setCodeDriver] = useState<string>("");
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [wrong, setWrong] = useState<string>("");

  
  const {user} = useAuth();
  
  const navigate: any = useNavigation(); 

  function handleInputChangeVehicle(index: number, text: string){
      const newValues = [...valuesVehicle];
      newValues[index] = {value: text};
      setValuesVehicle(newValues);
  
      if (!text && index > 0) {
          const inputRef = inputRefsVehicle?.current;
          inputRef[index - 1].focus();
          setFocusedIndexVehicle(index - 1);
      } else if (text && index < valuesVehicle?.length - 1) {
          const inputRef = inputRefsVehicle?.current;
          inputRef[index + 1].focus();
          setFocusedIndexVehicle(index + 1);
      }
  };

  const setNewCode = (newCode: any) => {
    const newCod = newCode;
    setWrong("");
    setText("");
    setIsLoading(false);
    return newCod;
  }

    const calculateCodeVehicle = () => {
      const newCode = valuesVehicle?.map((item: any) => item.value)?.join('');
      return newCode?.length > 4 ? setNewCode(newCode) : undefined;
    };

    useEffect(() => {
      
      (async () => {
        const code = await AsyncStorage?.getItem("codedriver");
        const parsedCode = code && JSON?.parse(code);
        setCodeDriver(parsedCode);

      } )()

    }, [])
  
    useEffect(() => {
      const newVehicleCode = calculateCodeVehicle();
      if(newVehicleCode === undefined){
        return
      }
      setCodeVehicle(newVehicleCode);
    }, [valuesVehicle]);

    const dataVehicle = {
      VehicleCredential: codeVehicle,
    }

    const {VehicleCredential} = dataVehicle;

    useEffect(() => {
      if(VehicleCredential !== undefined){
  
          const getVehicle = async () => {
          const payload = {
            vehicleCredential: codeVehicle,
            driverCredential: codeDriver,
            plataformId: user?.login?.plataformId,
            operatorId: user?.login?.id,
          }
  
           try {

            setIsLoading(true)

            console.log("Aqui", payload)

             const { data } = await axios.post(`${API_URL}check-transport`, payload,
              {
                headers: {
                Authorization: `Bearer ${user.authorizationToken}`
                }
            });

    
            if(data?.text?.status === 200){
                return Alert.alert("Aviso", "Veículo autorizado", [
                {
                    text: "Proxima etapa",
                        onPress: () => getDataVehicle(data)
                    }
                ]) 
            }
            setIsLoading(false)
    
          } catch (error: any) {
            if(error?.response?.status === 404){
              setWrong("error");

              setText(`${ error?.response?.data?.message == "Invalid credencial, vehicle not found in the system" ? "Credencial inválida, veículo não encontrado no sistema" : error?.response?.data?.message == "Alert, vehicle does not match with driver distribuitor" ? "veículo não corresponde ao distribuidor do motorista" : "Credencial inválida"}`);
              setIsLoading(false)
  
              return
             }
  
          }
        }
        getVehicle();
      }
    }, [VehicleCredential])

    const getDataVehicle = async (data: any) => {
      await AsyncStorage.setItem('entranceData', JSON.stringify(data));
      navigate?.navigate("enterconcluited")
    }

    return { valuesVehicle, handleInputChangeVehicle, setFocusedIndexVehicle, inputRefsVehicle, wrong, isLoading, text }

}