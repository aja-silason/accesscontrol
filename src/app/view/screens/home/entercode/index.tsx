import { Header, HeaderIn } from "@/app/view/components/header";
import { Alert, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../container";
import { style } from "./style";
import { RadioCards } from "@/app/view/components/cards/Cards";
import { OneDigiteInput } from "@/app/view/components/input/input";
import { useEffect, useRef, useState } from "react";
import { useGetDriverCode } from "@/app/viewmodel/hooks/useGetCode";
import { routing } from "@/app/viewmodel/services/Navegation";
import axios from "axios";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { Button } from "@/app/view/components/button";
import CheckedIconSvg from "@/app/view/components/svg/CheckedSvg";

type InputState = {
    value: string;
}

enum SCREEN {
  "driver",
  "vehicle",
  "concluited"
}

export default function EnterCodeMotorist() {

  const [valuesDriver, setValuesDriver] = useState<InputState[]>(new Array(5).fill({ value: '' }));
  const [valuesVehicle, setValuesVehicle] = useState<InputState[]>(new Array(5).fill({ value: '' }));

  const [focusedIndexDriver, setFocusedIndexDriver] = useState(0);
  const [focusedIndexVehicle, setFocusedIndexVehicle] = useState(0);
  const [codeDriver, setCodeDriver] = useState<string>()
  const [codeVehicle, setCodeVehicle] = useState<string>()

  const [flag, setFlag] = useState< string | SCREEN >(SCREEN.driver);

  const {user} = useAuth();

  function handleInputChangeDriver(index: number, text: string){
      const newValues = [...valuesDriver];
      newValues[index] = {value: text};
      setValuesDriver(newValues);
  
      if (!text && index > 0) {
          const inputRef = inputRefsDriver.current;
          inputRef[index - 1].focus();
          setFocusedIndexDriver(index - 1);
      } else if (text && index < valuesDriver.length - 1) {
          const inputRef = inputRefsDriver.current;
          inputRef[index + 1].focus();
          setFocusedIndexDriver(index + 1);
      }
  };


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


    const calculateCodeDriver = () => {
      const newCode = valuesDriver.map((item) => item.value).join('');
      return newCode.length > 4 ? newCode : undefined;
    };
  
    useEffect(() => {
      const newDriverCode = calculateCodeDriver();
      if(newDriverCode === undefined){
        return
      }
      setCodeDriver(newDriverCode);

      const newVehicleCode = calculateCodeDriver();
      if(newVehicleCode === undefined){
        return
      }
      setCodeVehicle(newDriverCode);
    }, [valuesDriver, valuesVehicle]);

    const dataDriver = {
      driverCredential: codeDriver,
    }

    const dataVehicle = {
      vehicleCredential: codeVehicle,
    }

    const {driverCredential} = dataDriver;
    const {vehicleCredential} = dataVehicle;

    if(driverCredential !== undefined){
      const getDriver = async () => {
        const payload = {
          driverCredential: codeDriver,
          plataformId: user?.login?.plataformId,
          operatorId: user?.login?.id,
        }

        console.log("== == ==:", payload);
  
         try {
  
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
            Alert.alert("Aviso", "Dados não encontrados", [
              {
                text: "Tentar Novamente",
                onPress: () => getTryAgainDriver()
              }
            ]);
          }
          console.log("Xihh deu erro: ", error);
        }
      }
      getDriver();
    }

    if(vehicleCredential !== undefined){
      const getVehicle = async () => {
        const payload = {
          driverCredential: codeDriver,
          plataformId: user?.login?.plataformId,
          operatorId: user?.login?.id,
        }

        console.log("== == ==:", payload);
  
         try {
  
           const { data } = await axios.post(`${API_URL}check-transport`, payload,
            {
              headers: {
              Authorization: `Bearer ${user.authorizationToken}`
              }
          });
  
          if(data?.text?.stepForward === true){
            return Alert.alert("Aviso", "Motorista autorizado", [
            {
                text: "Proxima etapa",
                    onPress: () => getDataVehicle()
                }
            ]) 
        }
  
        } catch (error: any) {
          if(error?.response?.status === 404){
            Alert.alert("Aviso", "Dados não encontrados", [
              {
                text: "Tentar Novamente",
                onPress: () => getTryAgainVehicle()
              }
            ]);
          }
          console.log("Xihh deu erro: ", error);
        }
      }
      getVehicle();
    }

    const getDataDriver = () => {
      setCodeDriver("");
      setFlag(SCREEN.vehicle)
      // routing.handleRouteEnterVehicleCode();
    }
    const getTryAgainDriver = () => {
      setCodeDriver("");
    }
    const getTryAgainVehicle = () => {
      setCodeVehicle("");
    }

    const getDataVehicle = () => {
      setCodeVehicle("");
      setFlag(SCREEN.concluited)
    }

    function finnaly(){
      routing.handleRouteHomeNonBackAgain();
  }

    const inputRefsDriver: any = useRef<any>([]);
    const inputRefsVehicle: any = useRef<any>([]);

    return (
        flag === SCREEN.driver ? (
          <View>
        <HeaderIn title="Motorista" back="yes"/>

        <ContainerLessMenuLessGradiente>
            <View style={style.container}>
                <View>
                    <RadioCards step={0}/>
                </View>
                <View style={style.inputContainer}>

                    {valuesDriver.map((value: any, index) => (
                        <OneDigiteInput key={index} value={value?.values} onChangeText={(text: any) => handleInputChangeDriver(index,  text)} onFocus={() => setFocusedIndexDriver(index)} ref={(ref: any) => (inputRefsDriver.current![index] = ref)}/>
                    ))}

                </View>
                <Text style={style.text}>Escreva o código do motorista</Text>
            </View>
        </ContainerLessMenuLessGradiente>
        </View>
        ) : flag == SCREEN.vehicle ? (

          <View>
        <HeaderIn title="Carro" back="yes"/>
        <ContainerLessMenuLessGradiente>
            <View style={style.container}>
                <View>
                    <RadioCards step={1}/>
                </View>
                <View style={style.inputContainer}>

                    {valuesVehicle.map((value, index) => (
                        <OneDigiteInput key={index} value={value?.value} onChangeText={(text: any) => handleInputChangeVehicle(index,  text)} onFocus={() => setFocusedIndexVehicle(index)} ref={(ref: any) => (inputRefsVehicle.current![index] = ref)}/>
                    ))}

                </View>
                <Text style={style.text}>Escreva o código do veiculo</Text>
            </View>
        </ContainerLessMenuLessGradiente>
        </View>

        ): flag === SCREEN.concluited ? (
          <View>
        <HeaderIn title="Introduzir Código" back="yes"/>
        <ContainerLessMenuLessGradiente>
        <View style={style.container}>
                <View>
                    <RadioCards step={3}/>
                </View>
                <View style={style.concluitedContainer}>

                  <CheckedIconSvg/>

                  <View style={style.textCenter}>
                    <Text style={style.textBold}>Verificação</Text>
                    <Text style={style.textMedium}>A verificação foi feita com sucesso o motorista está autoridade para entrar na central.</Text>
                  </View>

                  <View style={style.border}></View>

                  <View style={style.containerList}>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Distribuidora</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Veiculo</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Modelo do carro</Text>
                            <Text style={style.textBold}>Cinza</Text>
                        </View>
                    </View>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Distribuidora</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Veiculo</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Modelo do carro</Text>
                            <Text style={style.textBold}>Cinza</Text>
                        </View>
                    </View>
                    <View style={style.groupList}>
                        <View>
                            <Text style={style.textThin}>Distribuidora</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Veiculo</Text>
                            <Text style={style.textBold}>Pumangol</Text>
                        </View>
                        <View>
                            <Text style={style.textThin}>Modelo do carro</Text>
                            <Text style={style.textBold}>Cinza</Text>
                        </View>
                    </View>
                  </View>

                </View>
                  <Button onClick={finnaly} styling="" text="Finalizar"/>
            </View>
        </ContainerLessMenuLessGradiente>
        </View>
        ) : null
      )
}