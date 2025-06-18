import { Image, Text, View } from "react-native"
import { Styles } from "./Style"
import QRIconSvg from "../svg/qricon"
import CarSvgIcon from "../svg/CarYellowSvg"
import DistribuitorSvgIcon from "../svg/distribuitoiconsvg"
import LicenseSvg from "../svg/LicenceSvg"
import TruckSvg from "../svg/ContainerTruck"
import AlertSvg from "../svg/AlertsSvgs"
import GasSvg from "../svg/GasSvg"
import { Loading } from "../loading"

type cardprop = {
    title: string,
    icon: any
}

/** Cards da home just like centerized */
export const CardHome = ({ icon, title }: cardprop) => {
    return (
        <View style={Styles.constainerHome}>
            {icon}
            <Text style={Styles.titleHome}>{title}</Text>
        </View>
    )
}

/** Cards da home just like centerized */

type carListProp = {
    distribuitor?: string,
    matricula?: string,
    date?: string,
    brandOfCar: string
    typeOfCar?: string
    portOfCar?: string
}

export const CardList = ({ distribuitor, brandOfCar, date, matricula, portOfCar, typeOfCar }: carListProp) => {
    return (
        <View style={Styles.containerList}>
            <View>
                <CarSvgIcon />
            </View>
            <View style={Styles.innerContainerList}>
                <View>
                    <Text style={Styles.titleList}>{distribuitor}</Text>
                    <View style={Styles.textListContainer}>
                        <TruckSvg />
                        <Text style={Styles.textList}>{brandOfCar} - {matricula}</Text>
                    </View>
                    <View style={Styles.textListContainer}>
                        <LicenseSvg />
                        <Text style={Styles.textList}>{typeOfCar} - {portOfCar}</Text>
                    </View>
                </View>
                <View>
                    <Text style={Styles.textListDate}>{date}</Text>
                </View>
            </View>
        </View>
    )
}



export const CardDetails = ({ data }: any) => {
    return (
        <View style={Styles.containerCardDetails}>
            <View style={Styles.inner}>
                <View>
                    <Image source={require("@/assets/imagesdetail/carimage.png")} style={Styles.img} />
                </View>

                <View style={Styles.details}>
                    <View style={Styles.detailsin}>
                        <View style={Styles.detailsText}>
                            <Text style={Styles.textthin}>Matrícula</Text>
                            <Text style={Styles.textbold}>{data?.transports?.registration}</Text>
                        </View>
                        <View style={Styles.detailsText}>
                            <Text style={Styles.textthin}>Distribuidora</Text>
                            <Text style={Styles.textbold}>{data?.distributor?.distribuitor}</Text>
                        </View>
                    </View>

                    <View style={Styles.detailsin}>
                        <View style={Styles.detailsText}>
                            <Text style={Styles.textthin}>Modelo do Carro</Text>
                            <Text style={Styles.textbold}>{data?.transports?.model}</Text>
                        </View>
                        <View style={Styles.detailsText}>
                            <Text style={Styles.textthin}>Marca de Carro</Text>
                            <Text style={Styles.textbold}>{data?.transports?.brand}</Text>
                        </View>
                    </View>

                    <View style={Styles.detailsin}>
                        <View style={Styles.detailsText}>
                            <Text style={Styles.textthin}>Data de Acesso</Text>
                            <Text style={Styles.textbold}>{data?.createdAt?.split(',')[0]}</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.linebar}></View>

                <View style={Styles.profile}>
                    <View style={Styles.profiledetails}>
                        <View style={Styles.profiledetailimage}>
                            <Image source={require("@/assets/profileimage/profile.png")} style={Styles.profileimg} />
                        </View>
                        <View style={Styles.profiledetailstext}>
                            <Text style={Styles.textbold}>{data?.drivers?.driver}</Text>
                            <Text style={Styles.textthin}>Motorista</Text>
                        </View>
                    </View>
                    <View style={Styles.profiledetailstext}>
                        <Text style={Styles.textbold}>Carta de Condução</Text>
                        <Text style={Styles.textthin}>{data?.drivers?.drivingLicenceNumber}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

type RadioCardsProps = {
    step: number
}

export const RadioCards = ({ step }: RadioCardsProps) => {
    return (
        <View>

            {step === 0 ? (

                /** 0 */
                <View style={Styles.radioStepContainer}>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStep}>
                            <Text style={Styles.radioStepTextInactive}>1</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Motorista</Text>
                    </View>
                    <View style={Styles.radioStepLineInactive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStep}>
                            <Text style={Styles.radioStepTextInactive}>2</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Veículo</Text>
                    </View>
                    <View style={Styles.radioStepLineInactive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStep}>
                            <Text style={Styles.radioStepTextInactive}>3</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Concluido</Text>
                    </View>
                </View>

            ) : step === 1 ? (

                /** 1 */
                <View style={Styles.radioStepContainer}>

                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStepAtive}>
                            <Text style={Styles.radioStepTextActive}>1</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Motorista</Text>
                    </View>
                    <View style={Styles.radioStepLineActive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStep}>
                            <Text style={Styles.radioStepTextInactive}>2</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Veículo</Text>
                    </View>
                    <View style={Styles.radioStepLineInactive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStep}>
                            <Text style={Styles.radioStepTextInactive}>3</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Concluido</Text>
                    </View>
                </View>
            ) : step === 2 ? (

                /** 2 */
                <View style={Styles.radioStepContainer}>

                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStepAtive}>
                            <Text style={Styles.radioStepTextActive}>1</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Motorista</Text>
                    </View>
                    <View style={Styles.radioStepLineActive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStepAtive}>
                            <Text style={Styles.radioStepTextActive}>2</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Veículo</Text>
                    </View>
                    <View style={Styles.radioStepLineInactive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStep}>
                            <Text style={Styles.radioStepTextInactive}>3</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Concluido</Text>
                    </View>
                </View>

            ) : step === 3 ? (
                // <View>

                /**3 */
                <View style={Styles.radioStepContainer}>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStepAtive}>
                            <Text style={Styles.radioStepTextActive}>1</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Motorista</Text>
                    </View>
                    <View style={Styles.radioStepLineActive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStepAtive}>
                            <Text style={Styles.radioStepTextActive}>2</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Validação do Veículo</Text>
                    </View>
                    <View style={Styles.radioStepLineActive}></View>
                    <View style={Styles.radioStepFather}>
                        <View style={Styles.radioStepAtive}>
                            <Text style={Styles.radioStepTextActive}>3</Text>
                        </View>
                        <Text style={Styles.radioStepTextDiscribe}>Concluido</Text>
                    </View>
                </View>
            ) : null
            }


        </View>
    )
}

type entranceAndOuts = {
    entrance: number,
    out: number,
}

export const UniCard = ({ entrance, out }: entranceAndOuts) => {
    return (
        <View style={Styles.unicardContainer}>
            <View style={Styles.uniCard}>
                <Text style={Styles.ptext}>Entradas</Text>
                {
                    entrance === null || entrance === undefined ? (
                        <Loading />
                    ) : (
                        <Text style={Styles.pnumber}>{entrance}</Text>
                    )
                }
            </View>
            <View style={Styles.uniCardr}></View>
            <View style={Styles.uniCard}>
                <Text style={Styles.ptext}>Saidas</Text>
                {
                    out === null || out === undefined ? (
                        <Loading />
                    ) : (
                        <Text style={Styles.pnumber}>{out}</Text>
                    )
                }
            </View>
        </View>
    )
}

type CarleftProp = {
    children: any,
    quantity: number,
    title: string
}

export const CardLeft = ({ children, quantity, title }: CarleftProp) => {
    return (
        <View style={Styles.cardleft}>
            {children}
            <Text style={Styles.ptextLeft}>{title}</Text>
            <Text style={Styles.pnumberLeft}>{quantity}</Text>
        </View>
    )
}