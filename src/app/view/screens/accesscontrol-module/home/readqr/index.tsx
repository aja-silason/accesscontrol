import { HeaderIn } from "@/app/view/components/header"
import { Alert, Image, Text, View } from "react-native"
import { ContainerLessMenuLessGradiente } from "../../../../components/container"
import { RadioCards } from "@/app/view/components/cards/Cards"
import { style } from "./style";
import { CameraPermission } from "@/app/view/components/camera/camerapermission";
import { Button, ButtonIn } from "@/app/view/components/button";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useContext, useState } from "react";
import CheckedIconSvg from "@/app/view/components/svg/CheckedSvg";
import { routing } from "@/app/viewmodel/services/Navegation";
import { ModalContext } from "@/app/viewmodel/context/ModalContext";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import axios from "axios";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import { LoadingCode } from "@/app/view/components/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

enum STATE {
    "motorist", 
    "vehicle",
    "concluited"
}

export default function QRread(){

    const [permission, requestPermission] = useCameraPermissions();
    const { showModal } = useContext(ModalContext);

    const [scan, setScan] = useState<string | null>(null);
    const [driver, setDriver] = useState<string | any>()
    const [vehicle, setVehicle] = useState<string | any>()

    const [flag, setFlag] = useState<string | STATE>(STATE.motorist);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoading2, setIsLoading2] = useState<boolean>(false);
    const [text, setText] = useState<string>();
    const [text2, setText2] = useState<string>();

    const {user } = useAuth();

    const {data: driversdata} = useGetDatas("driver");

    const navigate: any = useNavigation();
        
    const handleBarcodeScannerMotorist = async ({data: driverPaperCredential}: any) => {
        try {
            if(!scan){
                setScan(driverPaperCredential);
                setIsLoading(true);

                const payload = {
                    driverCredential: driverPaperCredential,
                    plataformId: user?.login?.plataformId,
                    operatorId: user?.login?.id
                }

                try {
                    const {data} = await axios.post(`${API_URL}check-driver`, payload, {
                        headers: {
                        Authorization: `Bearer ${user.authorizationToken}`
                        }
                    });

                    if(data?.text?.stepForward === true){
                        return Alert.alert("Notificação", "Motorista autorizado", [
                        {
                            text: "Próxima etapa",
                                onPress: () => getDataDriver(data)
                            }
                        ]) 
                    }

                    setIsLoading(false)

                } catch (error: any) {
                    if(error?.response?.status === 404){
                        setText(`${ error?.response?.data?.message == "Invalid credencial, driver not found in the system" ? "Credencial inválida, motorista não encontrado no sistema" : "Credencial inválida"} `);
                        setScan(null);

                        return
                    }
                }

                
            }
        } catch (error: any) {
            if(error?.response?.status === 404){
                Alert.alert("Aviso", `Dados não reconhecidos.`, [
                    {
                        text: "tentar Novamente",
                        onPress: () => setScan(null)
                    }
                ])
                return
            }
        }
    }

    const handleBarcodeScannerVehicle = async ({data: vehicle}: any) => {
            try {
                if(!scan){
                    setScan(vehicle);
                    setIsLoading2(true);
    
                    const payloadVehicle = {
                        vehicleCredential: vehicle,
                        driverCredential: driver?.credential,
                        plataformId: user?.login?.plataformId,
                        operatorId: user?.login?.id
                    }
    
                    try {
                        
                        const {data} = await axios.post(`${API_URL}check-transport`, payloadVehicle, {
                            headers: {
                            Authorization: `Bearer ${user.authorizationToken}`
                            }
                        });
    
                         if(data?.text?.status === 200){
                            return Alert.alert("Aviso", "Veículo autorizado", [
                            {
                                text: "Ok",
                                    onPress: () => getDataVehicle(data)
                                }
                            ]) 
                        }

                        setIsLoading2(false)
    
    
                    } catch (error: any) {
                        if(error?.response?.status === 404){
                            setText2(`${ error?.response?.data?.message == "Invalid credencial, vehicle not found in the system" ? "Credencial inválida, veículo não encontrado no sistema" : error?.response?.data?.message == "Alert, vehicle does not match with driver distribuitor" ? "veículo não corresponde ao distribuidor do motorista" : "Credencial inválida"} `);
                            setScan(null);
                            return
                        }
                    }
    
                    
                }
            } catch (error: any) {
                console.log("Xihhh", error)
            }
    }

    const getDataDriver = (data: any) => {
        setDriver(data)
        setScan(null);
        setFlag(STATE.vehicle);
    }

    const getDataVehicle = async (data: any)  => {
        await AsyncStorage?.setItem('entranceData', JSON.stringify(data));
        setVehicle(data)
        setScan(null);
        setFlag(STATE.concluited);
        navigate.navigate("enterconcluited");
    }

    const handleSubmitDataAuth = async () => {
            routing.handleRouteHomeNonBackAgain();
    }

    const auth = () => {
        requestPermission();
        setFlag(STATE.vehicle);
    }

    if(!permission){
        return <View/>
    }
    if(!permission.granted){
        return (
            <View>
                <HeaderIn title="QR" back="yes"/>
                <ContainerLessMenuLessGradiente>
                    <View style={style.container}>
                        <View>
                            <RadioCards step={0}/>
                        </View>
                        <View style={style.container}>
                            <Image source={require("@/assets/QR.png")} style={style.image}/>
                            <Button onClick={auth} text="Autorizar o uso da Camera"/>
        
                        </View>
                    </View>
                </ContainerLessMenuLessGradiente>
            </View>
        )
    }

    return (
        flag == STATE.motorist ? (
            <View>
                <HeaderIn title="QR veiculo" back="yes"/>
                    <ContainerLessMenuLessGradiente>
                        <View style={style.container}>
                            <View>
                                <RadioCards step={0}/>
                            </View>
                            <View style={style.container}>
                                
                            <CameraView facing="back" style={style.cam} barcodeScannerSettings={{barcodeTypes: ["qr"]}} onBarcodeScanned={handleBarcodeScannerMotorist}>
                                <View>
                                    <Text></Text>
                                </View>
                            </CameraView>
                            <Text style={style.textInfo}>QR do motorista</Text>
                            {/* <ModalAlert modalType="success"/> */}

                            {
                                isLoading ? (
                                    <View style={{marginTop: 10}}>
                                        <LoadingCode />
                                    </View>
                                ) : (
                                    <View style={{marginTop: 20, alignItems: "center"}}>
                                    <Text style={{color: "red", textAlign: "center", fontSize: 13, fontWeight: 500}}>{text}</Text>
                                    </View>
                                )  
                            }


                            </View>
                        </View>
                    </ContainerLessMenuLessGradiente>
            </View>
        ) : flag === STATE.vehicle ? (
            <View>
                <HeaderIn title="QR Veiculo" back="yes"/>
                    <ContainerLessMenuLessGradiente>
                        <View style={style.container}>
                            <View>
                                <RadioCards step={1}/>
                            </View>
                            <View style={style.container}>
                                
                            <CameraView facing="back" style={style.cam} barcodeScannerSettings={{barcodeTypes: ["qr"]}} onBarcodeScanned={handleBarcodeScannerVehicle}>
                                <View>
                                    <Text></Text>
                                </View>
                            </CameraView>
                            <Text style={style.textInfo}>QR do Veiculo</Text>

                            </View>
                        </View>
                    </ContainerLessMenuLessGradiente>
            </View>
        ) : (
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
                  <Button onClick={handleSubmitDataAuth} styling="" text="Finalizar"/>
            </View>
        </ContainerLessMenuLessGradiente>
        </View>
        )
    )
}