import Container, { ContainerLessMenuLessGradiente } from "@/app/view/components/container";
import { Text, View } from "react-native";
import { style } from "./style";
import { RadioCards } from "@/app/view/components/cards/Cards";
import { OneDigiteInput } from "@/app/view/components/input/input";
import { HeaderIn } from "@/app/view/components/header";
import { useCreateMotoristEntrance } from "@/app/viewmodel/hooks/creational/useCreateMotorist";
import { LoadingCode } from "@/app/view/components/loading";

export default function EnterCodeDriver(){

    const {handleInputChangeDriver, inputRefsDriver, setFocusedIndexDriver, valuesDriver, isLoading, text, wrong } = useCreateMotoristEntrance();

    return (
         <View>
            <HeaderIn title="Motorista" back="yes"/>

            <ContainerLessMenuLessGradiente>
                <View style={style.container}>
                    <View>
                        <RadioCards step={0}/>
                    </View>
                    <View style={style.inputContainer}>

                        {valuesDriver.map((value: any, index) => (
                            <OneDigiteInput key={index} value={value?.values} onChangeText={(text: any) => handleInputChangeDriver(index,  text)} onFocus={() => setFocusedIndexDriver(index)} ref={(ref: any) => (inputRefsDriver.current![index] = ref)} wrong={wrong}/>
                        ))}

                    </View>
                    <Text style={style.text}>Escreva o código do motorista</Text>

                    {
                    isLoading ? (
                        <View style={{marginTop: 50}}>
                            <LoadingCode />
                        </View>
                    ) : (
                        <View style={{marginTop: 50, alignItems: "center"}}>
                          {
                            text == "Permitido" ? <Text style={{color: "green", textAlign: "center", fontSize: 13, fontWeight: 500}}>{text}</Text> : <Text style={{color: "red", textAlign: "center", fontSize: 13, fontWeight: 500}}>{text}</Text>
                          }
                        </View>
                    ) 
                  }
                </View>
            </ContainerLessMenuLessGradiente>
            </View>
    )
}
