import { ScrollView, Text, View } from "react-native";
import { ContainerLessMenuLessGradiente } from "../../../../components/container";
import { HeaderIn } from "@/app/view/components/header";
import { Style } from "./style";
import { useAuth } from "@/app/viewmodel/context/AuthContext";

export default function UserGuide() {

  const { user } = useAuth();

  return (
    <View>

      <HeaderIn title="Guia de Utilização" back="yes" />

      <ContainerLessMenuLessGradiente>

        {user?.login?.role?.role == "A" ? (
          <ScrollView style={[Style.container, { marginBottom: 20 }]} showsVerticalScrollIndicator={false}>

            <Text style={Style.textSecundary}>Este guia visa orientar os usuários na utilização do aplicativo mobile de controle e gestão de frota de combustíveis e seus distribuidores da Sonangol EP. O aplicativo foi desenvolvido  para garantir um controle eficiente e seguro das operações de abastecimento e acesso às  plataformas</Text>

            <Text style={Style.textTertinary}>1. Controlo de Acessos</Text>
            <Text style={Style.textThin}> 1.1 Verificação da Credencial do Motorista e Veículo</Text>
            <Text style={Style.textFourth}> 1.1.1 Acesso à Tela de Controlo de Acessos:</Text>
            <Text style={Style.textInformation}>- Ao acessar a tela principal, encontrar-se-a opções para poder verificar os acessos,  deve selecionar uma das opções.</Text>
            <Text style={Style.textThin}>1.1.2. Escolha o Método de Verificação:</Text>
            <Text style={Style.textInformation}> ● Scan via Câmera: Clique no botão de scan para abrir a câmera. Posicione a câmera sobre o código de 4 dígitos apresentado pelo motorista</Text>
            <Text style={Style.textInformation}> ● Digitar Código Manualmente: Selecione a opção de digitação manual. Um modal será exibido na parte inferior da tela. Insira o código de 4 dígitos e pressione "Validar Credencial</Text>

            <Text style={Style.textFourth}>1.1.2.1. Cenários Possíveis Após Enviar o Código:</Text>

            <Text style={Style.textInformation}>● Credencial do Motorista Verificada com Sucesso: A etapa de verificação do motorista é concluída, e o aplicativo solicita o código do veículo para validar sua credencial.
            </Text>

            <Text style={Style.textInformation}>● Credencial do Motorista Inválida: Uma mensagem de erro será exibida com a opção de tentar novamente.</Text>

            <Text style={Style.textInformation}> ● Credencial do Veículo Verificada com Sucesso: O aplicativo exibe as informações do  motorista e do veículo. Confirme os dados e finalize a operação.
            </Text>

            <Text style={Style.textInformation}>● Credencial do Veículo Inválida: Uma mensagem de erro será exibida, e você poderá tentar novamente ou reiniciar o processo.</Text>

            <Text style={Style.textInformation}>● Credencial Caducada: O aplicativo informará que a credencial está expirada e sugeriu voltar ao menu principal para renovação.</Text>



            <Text style={Style.textTertinary}>2. Histórico de Acessos</Text>

            <Text style={Style.textThin}>2.1 Consultando o Histórico</Text>

            <Text style={Style.textInformation}>● Acesseatela"Histórico de Acessos" para visualizar todas as distribuidoras que acessaram a plataforma no dia.</Text>

            <Text style={Style.textInformation}>● Asinformações exibidas incluem: nome da distribuidora, motorista, veículo, e detalhes relevantes. Use os filtros disponíveis para refinar a busca. </Text>

            <Text style={Style.textTertinary}>3. Configurações</Text>
            <Text style={Style.textThin}>3.1 Ajustes e Informações:</Text>
            <Text style={Style.textFourth}>3.1.1. Alterar Senha:</Text>
            <Text style={Style.textInformation}>● Acesse"Configurações" e selecione "Alterar Senha". Insira a nova senha e confirme.</Text>
            <Text style={Style.textFourth}>3.1.2. Tema da Aplicação:</Text>
            <Text style={Style.textInformation}>● Modifiqueotemadoaplicativo para claro ou escuro conforme a sua preferência.</Text>
            <Text style={Style.textFourth}>3.1.3. Guia de Utilização:</Text>
            <Text style={Style.textInformation}>● Consulte este guia para instruções de uso.</Text>

            <Text style={Style.textFourth}>3.1.4. Políticas e Termos de Privacidade:</Text>
            <Text style={Style.textInformation}>● Leia as políticas de privacidade e os termos de uso na seção correspondente</Text>

          </ScrollView>
        ) : user?.login?.role?.role == "B" ? (
          <ScrollView style={[Style.container, { marginBottom: 20 }]} showsVerticalScrollIndicator={false}>
            <Text style={Style.textSecundary}>Este guia visa orientar os usuários na utilização do aplicativo mobile de controle e gestão de frota de combustíveis e seus distribuidores da Sonangol EP. O aplicativo foi desenvolvido  para garantir um controle eficiente e seguro das operações de abastecimento e acesso às  plataformas</Text>

            <Text style={Style.textTertinary}>1. Registro de Ocorrências</Text>

            <Text style={Style.textThin}>1.1 Reportando uma Ocorrência</Text>

            <Text style={Style.textFourth}>1.1.1. Acesso à Tela de Registro de Ocorrências:</Text>

            <Text style={Style.textInformation}>● Natelainicial, selecione "Registro de Ocorrências</Text>

            <Text style={Style.textFourth}>1.1.2. Preenchendo o Formulário:</Text>

            <Text style={Style.textInformation}>● Plataforma: Selecione a plataforma onde ocorreu a ocorrência.</Text>

            <Text style={Style.textInformation}>● Distribuidora: Escolha a distribuidora associada à ocorrência.- Supervisor: Insira o nome do supervisor responsável.- Descrição da Ocorrência: Preencha o campo "Ocorrência" com detalhes do incidente.</Text>

            <Text style={Style.textFourth}>1.1.3 Envio:</Text>

            <Text style={Style.textInformation}>● Apóspreencher oformulário, pressione "Enviar" para que a ocorrência seja registrada no sistema central.</Text>

            <Text style={Style.textTertinary}>2. Registro de Abastecimento</Text>
            <Text style={Style.textThin}>2.1 Registrando Abastecimentos</Text>


            <Text style={Style.textTertinary}>Natelainicial, selecione "Registro de Abastecimento..</Text>

            <Text style={Style.textTertinary}>2.1.1. Preenchendo o Formulário:</Text>

            <Text style={Style.textInformation}>● Plataforma Escolha a plataforma
              onde o abastecimento foi realizado.</Text>

            <Text style={Style.textInformation}>● Distribuidora Selecione a distribuidora responsável.</Text>

            <Text style={Style.textInformation}>● Produto: Especifique o produto (gás, combustível).</Text>

            <Text style={Style.textInformation}>● Litros/Metros Cúbicos: Informe a quantidade abastecida.</Text>

            <Text style={Style.textInformation}>2.1.2. Envio:</Text>

            <Text style={Style.textInformation}>● Apósopreenchimento, clique   "Submeter" para enviar as informações ao sistema
              central.</Text>

            <Text style={Style.textTertinary}>3. Configurações</Text>
            <Text style={Style.textThin}>3.1 Ajustes e Informações:</Text>
            <Text style={Style.textFourth}>3.1.1. Alterar Senha:</Text>
            <Text style={Style.textInformation}>● Acesse"Configurações" e selecione "Alterar Senha". Insira a nova senha e confirme.</Text>
            <Text style={Style.textFourth}>3.1.2. Tema da Aplicação:</Text>
            <Text style={Style.textInformation}>● Modifiqueotemadoaplicativo para claro ou escuro conforme a sua preferência.</Text>
            <Text style={Style.textFourth}>3.1.3. Guia de Utilização:</Text>
            <Text style={Style.textInformation}>● Consulte este guia para instruções de uso.</Text>

            <Text style={Style.textFourth}>3.1.4. Políticas e Termos de Privacidade:</Text>
            <Text style={Style.textInformation}>● Leia as políticas de privacidade e os termos de uso na seção correspondente</Text>
          </ScrollView>
        ) : (
          <ScrollView style={[Style.container, { marginBottom: 20 }]} showsVerticalScrollIndicator={false}>

            <Text style={Style.textSecundary}>Este guia visa orientar os usuários na utilização do aplicativo mobile de controle e gestão de frota de combustíveis e seus distribuidores da Sonangol EP. O aplicativo foi desenvolvido  para garantir um controle eficiente e seguro das operações de abastecimento e acesso às  plataformas</Text>

            <Text style={Style.textTertinary}>Modulo de Supervisor de abastecimento</Text>
            <Text style={Style.textTertinary}>1. Controlo de Acessos</Text>
            <Text style={Style.textThin}> 1.1 Verificação da Credencial do Motorista e Veículo</Text>
            <Text style={Style.textFourth}> 1.1.1 Acesso à Tela de Controlo de Acessos:</Text>
            <Text style={Style.textInformation}>- Ao acessar a tela principal, encontrar-se-a opções para poder verificar os acessos,  deve selecionar uma das opções.</Text>
            <Text style={Style.textThin}>1.1.2. Escolha o Método de Verificação:</Text>
            <Text style={Style.textInformation}> ● Scan via Câmera: Clique no botão de scan para abrir a câmera. Posicione a câmera sobre o código de 4 dígitos apresentado pelo motorista</Text>
            <Text style={Style.textInformation}> ● Digitar Código Manualmente: Selecione a opção de digitação manual. Um modal será exibido na parte inferior da tela. Insira o código de 4 dígitos e pressione "Validar Credencial</Text>

            <Text style={Style.textFourth}>1.1.2.1. Cenários Possíveis Após Enviar o Código:</Text>

            <Text style={Style.textInformation}>● Credencial do Motorista Verificada com Sucesso: A etapa de verificação do motorista é concluída, e o aplicativo solicita o código do veículo para validar sua credencial.
            </Text>

            <Text style={Style.textInformation}>● Credencial do Motorista Inválida: Uma mensagem de erro será exibida com a opção de tentar novamente.</Text>

            <Text style={Style.textInformation}> ● Credencial do Veículo Verificada com Sucesso: O aplicativo exibe as informações do  motorista e do veículo. Confirme os dados e finalize a operação.
            </Text>

            <Text style={Style.textInformation}>● Credencial do Veículo Inválida: Uma mensagem de erro será exibida, e você poderá tentar novamente ou reiniciar o processo.</Text>

            <Text style={Style.textInformation}>● Credencial Caducada: O aplicativo informará que a credencial está expirada e sugeriu voltar ao menu principal para renovação.</Text>



            <Text style={Style.textTertinary}>2. Histórico de Acessos</Text>

            <Text style={Style.textThin}>2.1 Consultando o Histórico</Text>

            <Text style={Style.textInformation}>● Acesseatela"Histórico de Acessos" para visualizar todas as distribuidoras que acessaram a plataforma no dia.</Text>

            <Text style={Style.textInformation}>● Asinformações exibidas incluem: nome da distribuidora, motorista, veículo, e detalhes relevantes. Use os filtros disponíveis para refinar a busca. </Text>

            <Text style={Style.textTertinary}>3. Configurações</Text>
            <Text style={Style.textThin}>3.1 Ajustes e Informações:</Text>
            <Text style={Style.textFourth}>3.1.1. Alterar Senha:</Text>
            <Text style={Style.textInformation}>● Acesse"Configurações" e selecione "Alterar Senha". Insira a nova senha e confirme.</Text>
            <Text style={Style.textFourth}>3.1.2. Tema da Aplicação:</Text>
            <Text style={Style.textInformation}>● Modifiqueotemadoaplicativo para claro ou escuro conforme a sua preferência.</Text>
            <Text style={Style.textFourth}>3.1.3. Guia de Utilização:</Text>
            <Text style={Style.textInformation}>● Consulte este guia para instruções de uso.</Text>

            <Text style={Style.textFourth}>3.1.4. Políticas e Termos de Privacidade:</Text>
            <Text style={Style.textInformation}>● Leia as políticas de privacidade e os termos de uso na seção correspondente</Text>

            <Text style={Style.textSecundary}>Este guia visa orientar os usuários na utilização do aplicativo mobile de controle e gestão de frota de combustíveis e seus distribuidores da Sonangol EP. O aplicativo foi desenvolvido  para garantir um controle eficiente e seguro das operações de abastecimento e acesso às  plataformas</Text>
            <Text style={Style.textTertinary}>Modulo de Supervisor de abastecimento</Text>
            <Text style={Style.textTertinary}>1. Registro de Ocorrências</Text>

            <Text style={Style.textThin}>1.1 Reportando uma Ocorrência</Text>

            <Text style={Style.textFourth}>1.1.1. Acesso à Tela de Registro de Ocorrências:</Text>

            <Text style={Style.textInformation}>● Natelainicial, selecione "Registro de Ocorrências</Text>

            <Text style={Style.textFourth}>1.1.2. Preenchendo o Formulário:</Text>

            <Text style={Style.textInformation}>● Plataforma: Selecione a plataforma onde ocorreu a ocorrência.</Text>

            <Text style={Style.textInformation}>● Distribuidora: Escolha a distribuidora associada à ocorrência.- Supervisor: Insira o nome do supervisor responsável.- Descrição da Ocorrência: Preencha o campo "Ocorrência" com detalhes do incidente.</Text>

            <Text style={Style.textFourth}>1.1.3 Envio:</Text>

            <Text style={Style.textInformation}>● Apóspreencher oformulário, pressione "Enviar" para que a ocorrência seja registrada no sistema central.</Text>

            <Text style={Style.textTertinary}>2. Registro de Abastecimento</Text>
            <Text style={Style.textThin}>2.1 Registrando Abastecimentos</Text>


            <Text style={Style.textTertinary}>Natelainicial, selecione "Registro de Abastecimento..</Text>

            <Text style={Style.textTertinary}>2.1.1. Preenchendo o Formulário:</Text>

            <Text style={Style.textInformation}>● Plataforma Escolha a plataforma
              onde o abastecimento foi realizado.</Text>

            <Text style={Style.textInformation}>● Distribuidora Selecione a distribuidora responsável.</Text>

            <Text style={Style.textInformation}>● Produto: Especifique o produto (gás, combustível).</Text>

            <Text style={Style.textInformation}>● Litros/Metros Cúbicos: Informe a quantidade abastecida.</Text>

            <Text style={Style.textInformation}>2.1.2. Envio:</Text>

            <Text style={Style.textInformation}>● Apósopreenchimento, clique   "Submeter" para enviar as informações ao sistema
              central.</Text>

            <Text style={Style.textTertinary}>3. Configurações</Text>
            <Text style={Style.textThin}>3.1 Ajustes e Informações:</Text>
            <Text style={Style.textFourth}>3.1.1. Alterar Senha:</Text>
            <Text style={Style.textInformation}>● Acesse"Configurações" e selecione "Alterar Senha". Insira a nova senha e confirme.</Text>
            <Text style={Style.textFourth}>3.1.2. Tema da Aplicação:</Text>
            <Text style={Style.textInformation}>● Modifiqueotemadoaplicativo para claro ou escuro conforme a sua preferência.</Text>
            <Text style={Style.textFourth}>3.1.3. Guia de Utilização:</Text>
            <Text style={Style.textInformation}>● Consulte este guia para instruções de uso.</Text>

            <Text style={Style.textFourth}>3.1.4. Políticas e Termos de Privacidade:</Text>
            <Text style={Style.textInformation}>● Leia as políticas de privacidade e os termos de uso na seção correspondente</Text>
          </ScrollView>
        )

        }

      </ContainerLessMenuLessGradiente>
    </View>
  );
}
