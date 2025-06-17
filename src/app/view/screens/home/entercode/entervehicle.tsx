import { Header, HeaderIn } from "@/app/view/components/header";
import { Alert, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../container";
import { style } from "./style";
import { RadioCards } from "@/app/view/components/cards/Cards";
import { OneDigiteInput } from "@/app/view/components/input/input";
import { useEffect, useRef, useState } from "react";
import { routing } from "@/app/viewmodel/services/Navegation";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import axios from "axios";


type InputState = {
    value: string;
}

export default function EnterCodeVeihicle() {

    
  const [values, setValues] = useState<InputState[]>(new Array(5).fill({ value: '' }));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [code, setCode] = useState<string>()
  const {user} = useAuth();


  function handleInputChange(index: number, text: string){
      const newValues = [...values];
      newValues[index] = {value: text};
      setValues(newValues);
  
      if (!text && index > 0) {
          const inputRef = inputRefs.current; // Type assertion
          inputRef[index - 1].focus();
          setFocusedIndex(index - 1);
      } else if (text && index < values.length - 1) {
          const inputRef = inputRefs.current; // Type assertion
          inputRef[index + 1].focus();
          setFocusedIndex(index + 1);
      }
  };

    const calculateCode = () => {
      const newCode = values.map((item) => item.value).join('');
      return newCode.length > 4 ? newCode : undefined;
    };
  
    useEffect(() => {
      const newVehicleCode = calculateCode();
      console.log("New Code d", newVehicleCode);
      if(newVehicleCode === undefined){
        return
      }
      setCode(newVehicleCode);
    }, [values]);

    
    console.log("Valor:", code);

    const data = {
      driverCredential: code,
    }

    const {driverCredential} = data;

    if(driverCredential !== undefined){
      console.log("Valor in:", user.login);
      console.log("Valor in Plataform =:", user.login);
      console.log("Valor in:", user.authorizationToken);
      console.log("Valor in:", driverCredential.length);

      const getDriver = async () => {
        const payload = {
          driverCredential: code,
          plataformId: user?.login?.plataformId,
          operatorId: user?.login?.id,
          // vehicleCredential
        }

        // "driverCredential": "9653E", 
        // "operatorId": "10cd6ea0-7013-4063-84d8-57fe69a43fd9", 
        // "plataformId": "01a8fc08-e0ce-4f93-81a0-d9ce45cff422", 
        // "vehicleCredential": "AJBJ8"

        console.log("== == ==:", payload);
  
         try {
  
           const { data } = await axios.post(`${API_URL}check-transport`, payload,
            {
              headers: {
              Authorization: `Bearer ${user.authorizationToken}`
              }
          });
  
          if(data?.text?.stepForward === true){
            return Alert.alert("Aviso", "Veiculo autorizado", [
            {
                text: "Proxima etapa",
                    onPress: () => getDataTransport()
                }
            ]) 
        }
  
        } catch (error: any) {
          if(error?.response?.status === 404){
            Alert.alert("Aviso", "Dados não encontrados", [
              {
                text: "Tentar Novamente",
                onPress: () => getTryAgainMotorist()
              }
            ]);
          }
          console.log("Xihh deu erro: ", error);
        }
      }
      getDriver();
    }

    const getDataTransport = () => {
      setCode("");
      routing.handleRouteEnterVehicleCode();
    }
    const getTryAgainMotorist = () => {
      setCode("");
    }

    const inputRefs: any = useRef<any>([]);

    return (
        <View>
        <HeaderIn title="Código do Carro" back="yes"/>
        <ContainerLessMenuLessGradiente>
            <View style={style.container}>
                <View>
                    <RadioCards step={1}/>
                </View>
                <View style={style.inputContainer}>

                    {values.map((value, index) => (
                        <OneDigiteInput key={index} value={value?.value} onChangeText={(text: any) => handleInputChange(index,  text)} onFocus={() => setFocusedIndex(index)} ref={(ref: any) => (inputRefs.current![index] = ref)}/>
                    ))}

                </View>
                <Text style={style.text}>Escreva o código do veiculo</Text>
            </View>
        </ContainerLessMenuLessGradiente>
        </View>
    )
}