import { HeaderIn } from "@/app/view/components/header";
import { Button } from "@/app/view/components/button";
import { InputContainer, SelectContainer, Textarea } from "@/app/view/components/input/input";
import RNPickerSelect from 'react-native-picker-select';
import { Style } from "./style";
import { Loading } from "@/app/view/components/loading";
import { useCreateSupplie } from "@/app/viewmodel/hooks/creational/useCreateSupplie";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "@/app/view/components/container";


export default function Supplie() {

    const { datas, handleSubmit, product, distribuitor, setProduct, setDistribuitor, distribuitorData, productData, handleChange, isLoading }: any = useCreateSupplie();

    return (

        <View>
            <ScrollView style={{ height: "100%", backgroundColor: "#fff" }} showsVerticalScrollIndicator={false}>
                <HeaderIn title="Abastecimento" back="yes" />

                <KeyboardAwareScrollView
                    style={{ flex: 1, width: "100%" }}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    extraScrollHeight={60}
                    showsVerticalScrollIndicator={false}
                >
                    <ContainerLessMenuLessGradiente>
                        <View style={Style.container}>

                            <SelectContainer.Field>Distribuidora</SelectContainer.Field>
                            <SelectContainer style={Style.bores}>
                                <RNPickerSelect
                                    onValueChange={(value: any) => setDistribuitor(value)}
                                    key={distribuitorData?.id}
                                    items={distribuitorData}
                                    value={distribuitor}
                                    placeholder={{ label: 'Selecione a Distribuidora', value: null }}
                                />
                            </SelectContainer>

                            <InputContainer>
                                <InputContainer.Field>Código do Motorista</InputContainer.Field>
                                <InputContainer.Input place="" value={datas?.driverCode} onChangeText={(driverfield: any) => handleChange("driverCode", driverfield)} />
                            </InputContainer>

                            <InputContainer>
                                <InputContainer.Field>Código do Veículo</InputContainer.Field>
                                <InputContainer.Input place="" value={datas?.vehicleCode} onChangeText={(vehiclefield: any) => handleChange("vehicleCode", vehiclefield)} />
                            </InputContainer>

                            <SelectContainer.Field>Produto</SelectContainer.Field>
                            <SelectContainer style={Style.bores}>
                                <RNPickerSelect
                                    onValueChange={(value: any) => setProduct(value)}
                                    items={productData}
                                    value={product}
                                    placeholder={{ label: 'Selecione o Produto', value: null }}
                                />
                            </SelectContainer>

                            <InputContainer>
                                <InputContainer.Field>Litros</InputContainer.Field>
                                <InputContainer.Input place="Em 1000 litros" value={datas?.quantity} onChangeText={(quantity: any) => handleChange("quantity", quantity)} />
                            </InputContainer>

                            <Textarea place="Descrição" title="Ocorrência" value={datas?.observations} onChangeText={(observations: any) => handleChange("observations", observations)} />


                            {
                                isLoading == true ? <Button text={<Loading />} onClick={() => { }} disabled={isLoading} /> : <Button text="Enviar" onClick={handleSubmit} disabled={isLoading} />
                            }

                        </View>

                    </ContainerLessMenuLessGradiente>
                </KeyboardAwareScrollView>

            </ScrollView>
        </View>
    );
}
