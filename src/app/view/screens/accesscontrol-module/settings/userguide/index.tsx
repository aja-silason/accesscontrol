import { Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../../../components/container";
import { HeaderIn} from "@/app/view/components/header";
import { Style } from "./style";

export default function UserGuide() {

  return (
    <View>
        
        <HeaderIn title="Guia de Utilização" back="yes"/>

        <ContainerLessMenuLessGradiente>

            <View style={Style.container}>
                <Text style={Style.textThin}>Acesse o guia de utilização para aprender mais sobre como usar todas as funcionalidades da aplicação.</Text>
            </View>

        </ContainerLessMenuLessGradiente>
    </View>
  );
}
