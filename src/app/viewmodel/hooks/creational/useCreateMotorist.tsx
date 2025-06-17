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

export const useCreateMotoristEntrance = () => {

  const [valuesDriver, setValuesDriver] = useState<InputState[]>(new Array(5).fill({ value: '' }));
  
  const inputRefsDriver: any = useRef<any>([]);

  const [focusedIndexDriver, setFocusedIndexDriver] = useState(0);
  
  const [codeDriver, setCodeDriver] = useState<string>();

  const [text, setText] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [wrong, setWrong] = useState<string>("");
  
  const {user} = useAuth();
  
  const navigate: any = useNavigation(); 

  function handleInputChangeDriver(index: number, text: string){
      const newValues = [...valuesDriver];
      newValues[index] = {value: text};
      setValuesDriver(newValues);
  
      if (!text && index > 0) {
          const inputRef = inputRefsDriver?.current;
          inputRef[index - 1]?.focus();
          setFocusedIndexDriver(index - 1);
      } else if (text && index < valuesDriver?.length - 1) {
          const inputRef = inputRefsDriver?.current;
          inputRef[index + 1]?.focus();
          setFocusedIndexDriver(index + 1);
      }
  };

  const setNewCode = (newCode: any) => {
    const newCod = newCode;
    setWrong("");
    setText("");
    setIsLoading(false);
    return newCod;
  }

    const calculateCodeDriver = () => {
      const newCode = valuesDriver?.map((item: any) => item?.value)?.join('');
      return newCode.length > 4 ? setNewCode(newCode) : undefined;
    };
  
    useEffect(() => {
      const newDriverCode = calculateCodeDriver();
      if(newDriverCode === undefined){
        return
      }
      setCodeDriver(newDriverCode);
    }, [valuesDriver]);

    const dataDriver = {
      driverCredential: codeDriver,
    }

    const {driverCredential} = dataDriver;

    useEffect(() => {
        if(driverCredential !== undefined){

            const getDriver = async () => {
            const payload = {
            driverCredential: codeDriver,
            plataformId: user?.login?.plataformId,
            operatorId: user?.login?.id,
            }
    
            try {
              
              setIsLoading(true)
    
               const { data } = await axios.post(`${API_URL}check-driver`, payload,
                {
                  headers: {
                  Authorization: `Bearer ${user.authorizationToken}`
                  }
              });
    
            if(data?.text?.stepForward === true){
                return Alert.alert("Aviso", "Motorista autorizado", [
                {
                    text: "Proxima etapa",
                        onPress: () => getDataDriver()
                    }
                ]) 
            }
    
            } catch (error: any) {
            if(error?.response?.status === 404){
                setWrong("error");

                setText(`${ error?.response?.data?.message == "Invalid credencial, driver not found in the system" ? "Credencial inválida, motorista não encontrado no sistema" : "Credencial inválida"}`);

                // Alert.alert("Aviso", "Dados não encontrados", [
                //   {
                //     text: "Tentar Novamente",
                //     onPress: () => setCodeDriver("")
                //   }
                // ]);

                return;
            }
            } finally {
                setIsLoading(false);
            }
        }
        getDriver();
        }
    }, [driverCredential])

     const getDataDriver = async () => {
      setCodeDriver("");
      await AsyncStorage.setItem('codedriver', JSON.stringify(codeDriver));

      navigate?.navigate("entercodevehicle")

    }

    return { valuesDriver, handleInputChangeDriver, setFocusedIndexDriver, inputRefsDriver, isLoading, text, wrong }

}