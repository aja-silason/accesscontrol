import { ScrollView, View } from "react-native";
import { HeaderIn } from "@/app/view/components/header";
import { Button } from "@/app/view/components/button";
import { Style } from "./style";
import { InputContainer, SelectContainer, Textarea } from "@/app/view/components/input/input";
import RNPickerSelect from 'react-native-picker-select';
import { Loading } from "@/app/view/components/loading";
import { ContainerLessMenuLessGradiente } from "../../../../../components/container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useCreateOccurrency } from "@/app/viewmodel/hooks/creational/useCreateOccurrency";


export default function Ocorrency() {

    const { datas, handleSubmit, isLoading, distribuitor, setDistribuitor, distribuitorData, handleChange }: any = useCreateOccurrency();

    return (
        <ScrollView style={{ height: "100%", backgroundColor: "#fff" }}>

            <HeaderIn title="Ocorrências" back="yes" />

            <ContainerLessMenuLessGradiente>

                <KeyboardAwareScrollView
                    style={{ flex: 1, width: "100%" }}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    extraScrollHeight={60}
                    showsVerticalScrollIndicator={false}
                >
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
                            <InputContainer.Input place="" value={datas?.driverCode} onChangeText={(driverCode: any) => handleChange("driverCode", driverCode)} />
                        </InputContainer>

                        <InputContainer>
                            <InputContainer.Field>Código do Veículo</InputContainer.Field>
                            <InputContainer.Input place="" value={datas?.transportCode} onChangeText={(transportCode: any) => handleChange("transportCode", transportCode)} />
                        </InputContainer>

                        <Textarea place="Descrição" title="Ocorrência" value={datas?.ocurrence} onChangeText={(ocurrence: any) => handleChange("ocurrence", ocurrence)} />

                        {
                            isLoading == true ? <Button text={<Loading />} onClick={() => { }} disabled={isLoading} /> : <Button text="Enviar" onClick={handleSubmit} disabled={isLoading} />
                        }

                    </View>
                </KeyboardAwareScrollView>

            </ContainerLessMenuLessGradiente>
        </ScrollView>
    );
}
