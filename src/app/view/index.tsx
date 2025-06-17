import { Header } from "@/app/view/components/login/header";
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";
// import { Style } from "./style";
import { InputContainer } from "@/app/view/components/input/input";
import { Button } from "@/app/view/components/button";
import { useLogin } from "@/app/viewmodel/hooks/useLogind";
import { Link, router } from "expo-router";
import SonangolSVG from "@/app/view/components/svg/sonangolsvg";
import MadeInAngolaSVG from "@/app/view/components/svg/madeinangolasvg";
import { useContext, useEffect, useState } from "react";
import { Colors } from "@/app/view/styles/color";
import { ModalContext } from "@/app/viewmodel/context/ModalContext";
import { useAuth } from "@/app/viewmodel/context/AuthContext";
import axios from "axios";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import { routing } from "@/app/viewmodel/services/Navegation";
import { Loading } from "@/app/view/components/loading";


export default function LoginScreen() {
  const [link, setLink] = useState<string>("");
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [textBtn, setTextBtn] = useState("Entrar");

  const {user, login, isLoading} = useAuth();

  useEffect(()=> {

    if(!user){
      null  
    }
    if(user){
      if(user?.login?.role?.role == "A") {
          routing.handleRouteHomeNonBackAgain();
        } else if(user?.login?.role?.role == "B") {
          routing.handleRouterHomeNoBack();
        } else if(user == null){
          null
        }
        return
    }
  }, [user])


  const handleClick = async () => {
    await login(email, password);
  }
  
  

  return (

    <View style={Style.container}>
      
      <Header/>

      <ScrollView style={{backgroundColor: "#fff", width: "100%"}} showsVerticalScrollIndicator={false}>
      <View style={Style.loginData}>
        
        <View>
          <Text style={Style.texth1}>Acessar conta</Text>
          <Text style={Style.textp}>Por favor! Preencha o formulário com suas credenciais.</Text>
        </View>

        <View style={Style.containerInput} >
          <InputContainer>
            <InputContainer.Field>E-mail</InputContainer.Field>
            <InputContainer.Input place="seu@email.com" onChangeText={(email: any) => setEmail(email)} value={email}/>
          </InputContainer>
          <InputContainer>
            <InputContainer.Field>Palavra passe</InputContainer.Field>
            <InputContainer.Input place="********" secureText={true} onChangeText={(password: any) => setPassword(password)} value={password}/>
          </InputContainer>
          {
          isLoading?  <Button text={<Loading/>} onClick={handleClick} disabled={isLoading}/>:   <Button text={textBtn} onClick={handleClick} disabled={isLoading}/>
          }
          
          <View style={Style.madein}>
            <MadeInAngolaSVG/>
          </View>
        </View>

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