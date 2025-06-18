import { ScrollView, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../../../components/container";
import { HeaderIn } from "@/app/view/components/header";
import { Style } from "./style";

export default function PrivaciesAndTerms() {

  return (
    <View>

      <HeaderIn title="Politicas e Termos" back="yes" />

      <ContainerLessMenuLessGradiente>
        <ScrollView style={[Style.container, {marginBottom: 20}]} showsVerticalScrollIndicator={false}>
          <View style={Style.container}>
            <Text style={Style.textThin}>Leia nossas políticas de privacidade e termos de uso para entender como suas informações são tratadas.</Text>
          </View>

          <Text style={Style.textSecundary}>Termo de Utilização do Aplicativo de controle de acesso as plataformas da Sonangol, E.P </Text>

          <Text style={Style.textTertinary}>1. Introdução: </Text>

          <Text style={Style.textInformation}>Ao utilizar o aplicativo de controle de acesso as plataformas da Sonangol, E.P, você concorda com os termos e condições aqui descritos. Este termo estabelece as regras para o uso do aplicativo e a relação entre você e a Sonangol, E.P. </Text>

          <Text style={Style.textTertinary}>2. Objetivo: </Text>

          <Text style={Style.textInformation}>Este é um aplicativo móvel pertencente ao Sistema Advance Security destinado a controlar o acesso e os abastecimentos dentro da Sonangol, E.P, visando otimizar processos e garantir a segurança. </Text>

          <Text style={Style.textTertinary}>3. Uso do Aplicativo: </Text>

          <Text style={Style.textInformation}>Acesso: Seu acesso ao aplicativo será pessoal e intransferível, utilizando as credenciais fornecidas pela empresa. </Text>

          <Text style={Style.textInformation}>Responsabilidade: Você é responsável por manter suas credenciais seguras e confidenciais. Qualquer uso indevido será de sua responsabilidade. </Text>

          <Text style={Style.textInformation}>Uso Proibido: É proibido utilizar o aplicativo para fins ilegais, maliciosos ou que prejudiquem a empresa ou outros usuários. </Text>

          <Text style={Style.textTertinary}>4. Dados Pessoais: </Text>

          <Text style={Style.textInformation}>Coleta: Ao utilizar o aplicativo, você concorda com a coleta e o tratamento de seus dados pessoais, conforme nossa Política de Privacidade. </Text>

          <Text style={Style.textInformation}>Finalidade: Os dados coletados serão utilizados para fins de controle de acesso, geração de relatórios e melhoria do serviço. </Text>

          <Text style={Style.textTertinary}>5. Alterações: </Text>

          <Text style={Style.textInformation}>A Sonagol, E.P, reserva-se o direito de alterar este termo de utilização a qualquer momento. As alterações serão comunicadas aos usuários e entrarão em vigor a partir da data de publicação.</Text>

          <Text style={Style.textTertinary}>6. Suspensão e Cancelamento:</Text>

          <Text style={Style.textInformation}>A Sonagol, E.P, poderá suspender ou cancelar seu acesso ao aplicativo a qualquer momento, sem aviso prévio, em caso de violação deste termo ou por motivos de segurança.</Text>

          <Text style={Style.textTertinary}>7. Limitação de Responsabilidade:</Text>

          <Text style={Style.textInformation}>A Sonangol, E.P, não se responsabiliza por quaisquer danos directos ou indirectos decorrentes do uso ou da indisponibilidade do aplicativo. </Text>

          <Text style={Style.textTertinary}>8. Lei Aplicável:</Text>

          <Text style={Style.textInformation}>Este termo de utilização será regido e interpretado de acordo com as leis de Angola. </Text>

          <Text style={Style.textInformation}>Ao utilizar o Aplicativo de Controle de acesso as Plataformas da Sonangol, E.P, você declara ter lido, compreendido e concordado com todos os termos e condições aqui descritos.</Text>

          <Text style={Style.textFourth}>Sonangol, E.P, 2024 </Text>

          <Text style={Style.textFourth}>Aplicativo de Gestão de plataformas da Sonangol, E.P</Text>
          <Text style={Style.textFourth}>Um produto do Sitema integrado de Segurança Advance Security</Text>

        </ScrollView>

      </ContainerLessMenuLessGradiente>
    </View>
  );
}