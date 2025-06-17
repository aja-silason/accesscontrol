import axios from "axios";
import { Alert } from "react-native";
import { API_URL } from "../../utils/server/enpoint";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

type InputState = {
    value: string;
}

export const useCreatevehicleEntrance = () => {

  const [valuesVehicle, setValuesVehicle] = useState<InputState[]>(new Array(5).fill({ value: '' }));
  
  const inputRefsVehicle: any = useRef<any>([]);

  const [focusedIndexVehicle, setFocusedIndexVehicle] = useState(0);
  
  const [codeVehicle, setCodeVehicle] = useState<string>()

  
  const {user} = useAuth();
  
  const navigate: any = useNavigation(); 

  function handleInputChangeVehicle(index: number, text: string){
      const newValues = [...valuesVehicle];
      newValues[index] = {value: text};
      setValuesVehicle(newValues);
  
      if (!text && index > 0) {
          const inputRef = inputRefsVehicle.current;
          inputRef[index - 1].focus();
          setFocusedIndexVehicle(index - 1);
      } else if (text && index < valuesVehicle.length - 1) {
          const inputRef = inputRefsVehicle.current;
          inputRef[index + 1].focus();
          setFocusedIndexVehicle(index + 1);
      }
  };

    const calculateCodeVehicle = () => {
      const newCode = valuesVehicle.map((item: any) => item.value).join('');
      return newCode.length > 4 ? newCode : undefined;
    };
  
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

    if(VehicleCredential !== undefined){

        const getVehicle = async () => {
        const payload = {
          VehicleCredential: codeVehicle,
          plataformId: user?.login?.plataformId,
          operatorId: user?.login?.id,
        }

  
         try {
  
        //    const { data } = await axios.post(`${API_URL}check-Vehicle`, payload,
        //     {
        //       headers: {
        //       Authorization: `Bearer ${user.authorizationToken}`
        //       }
        //   });
  
          //if(data?.text?.stepForward === true){
            return Alert.alert("Aviso", "Veículo autorizado", [
            {
                text: "Proxima etapa",
                    onPress: () => navigate?.navigate("enterconcluited")
                }
            ]) 
        //}
  
        } catch (error: any) {
          if(error?.response?.status === 404){
            Alert.alert("Aviso", "Dados não encontrados", [
              {
                text: "Tentar Novamente",
                onPress: () => setCodeVehicle("")
              }
            ]);
          }
          console.log("Xihh deu erro: ", error);
        }
      }
      getVehicle();
    }

    return { valuesVehicle, handleInputChangeVehicle, setFocusedIndexVehicle, inputRefsVehicle }

}