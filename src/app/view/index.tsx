import { Header } from "@/app/view/components/login/header";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { InputContainer } from "@/app/view/components/input/input";
import { Button } from "@/app/view/components/button";
import { useState } from "react";
import { Colors } from "@/app/view/styles/color";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { Loading, LoadingCode } from "@/app/view/components/loading";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textBtn, setTextBtn] = useState("Entrar");

  
  const { user, login, isLoading } = useAuth();
  
  /*if (user) {
    return (
      <View style={{ backgroundColor: Colors.white[200] ,flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LoadingCode />
      </View>
    )
  }*/

  const handleClick = async () => {
    await login(email, password);
  }

  return (

    <View style={Style.container}>

      <Header />

      <ScrollView style={{ backgroundColor: "#fff", width: "100%" }} showsVerticalScrollIndicator={false}>
        <View style={Style.loginData}>

          <View>
            <Text style={Style.texth1}>Acessar conta</Text>
            <Text style={Style.textp}>Por favor! Preencha o formulário com suas credenciais.</Text>
          </View>

          <KeyboardAwareScrollView
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
            enableOnAndroid
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={20}
            showsVerticalScrollIndicator={false}
          >

            <View style={Style.containerInput} >
              <InputContainer style={{ width: "100%" }}>
                <InputContainer.Field>E-mail</InputContainer.Field>
                <InputContainer.Input place="seu@email.com" onChangeText={(email: any) => setEmail(email)} value={email} />
              </InputContainer>

              <InputContainer>
                <InputContainer.Field>Palavra passe</InputContainer.Field>
                <InputContainer.Input place="********" secureText={true} onChangeText={(password: any) => setPassword(password)} value={password} />
              </InputContainer>
              {
                isLoading ? <Button text={<Loading />} onClick={handleClick} disabled={isLoading} /> : <Button text={textBtn} onClick={handleClick} disabled={isLoading} />
              }

              <View style={Style.madein}>
                {/*<MadeInAngolaSVG />*/}
              </View>
            </View>

          </KeyboardAwareScrollView>

        </View>
      </ScrollView>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: "100%",
  },
  loginData: {
    marginVertical: "10%",
    gap: 30,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  texth1: {
    fontSize: 26,
    fontWeight: "500",
    color: Colors.black[200]
  },
  textp: {
    color: Colors.black[300],
    fontSize: 12
  },

  containerInput: {
    gap: 15,
    width: "100%"
  },
  madein: {
    alignItems: "center"
  }

})