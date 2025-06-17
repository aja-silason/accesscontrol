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
import { ModalAlert } from "@/app/view/components/modal/ModalAlert";
import { ModalContext } from "@/app/viewmodel/context/ModalContext";
import { useGetDatas } from "@/app/viewmodel/hooks/useGetDatas";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import axios from "axios";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";

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
    const {user, login, logout} = useAuth();

    const {data: driversdata} = useGetDatas("driver");

        
    const handleBarcodeScannerMotorist = async ({data: driverPaperCredential}: any) => {
        try {
            if(!scan){
                setScan(driverPaperCredential);

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
                        return Alert.alert("Aviso", "Motorista autorizado", [
                        {
                            text: "Proxima etapa",
                                onPress: () => getDataDriver(data)
                            }
                        ]) 
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
                console.log("Foi");
                    setScan(vehicle);
    
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


                        console.log("Eita", data);
    
    
                        if(data?.text?.checked == true){
                            return Alert.alert("Aviso", "Veículo autorizado", [
                            {
                                text: "Ok",
                                    onPress: () => getDataVehicle(data)
                                }
                            ]) 
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
            } catch (error: any) {
                console.log("Xihhh", error)
            }
    }

    const getDataDriver = (data: any) => {
        setDriver(data)
        setScan(null);
        setFlag(STATE.vehicle);
        console.log(scan)
    }

    const getDataVehicle = (data: any)  => {
        setVehicle(data)
        setScan(null);
        setFlag(STATE.concluited);
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