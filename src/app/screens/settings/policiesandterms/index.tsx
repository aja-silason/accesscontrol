import { Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../container";
import { HeaderIn} from "@/components/header";
import { Style } from "./style";

export default function PrivaciesAndTerms() {

  return (
    <View>
        
        <HeaderIn title="Politicas e Termos" back="yes"/>

        <ContainerLessMenuLessGradiente>
            
            <View style={Style.container}>
                <Text style={Style.textThin}>Leia nossas políticas de privacidade e termos de uso para entender como suas informações são tratadas.</Text>
            </View>

        </ContainerLessMenuLessGradiente>
    </View>
  );
}

// policiesandterms