import { RadioCards } from "@/app/view/components/cards/Cards";
import { ContainerLessMenuLessGradiente } from "@/app/view/components/container";
import { HeaderIn } from "@/app/view/components/header";
import { OneDigiteInput } from "@/app/view/components/input/input";
import { useCreatevehicleEntrance } from "@/app/viewmodel/hooks/creational/useCreateVehicle";
import { Text, View } from "react-native";
import { style } from "./style";

export default function EnterCodeInVehicle(){

    const {handleInputChangeVehicle, inputRefsVehicle, setFocusedIndexVehicle, valuesVehicle} = useCreatevehicleEntrance();

    return (
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
    )

}
