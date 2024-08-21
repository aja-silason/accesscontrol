import { Header } from "@/components/login/header";
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";
// import { Style } from "./style";
import { InputContainer } from "@/components/input/input";
import { Button } from "@/components/button";
import { useLogin } from "@/hooks/useLogind";
import { Link, router } from "expo-router";
import SonangolSVG from "@/components/svg/sonangolsvg";
import MadeInAngolaSVG from "@/components/svg/madeinangolasvg";
import { useContext, useEffect, useState } from "react";
import { Colors } from "@/styles/color";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { API_URL } from "@/utils/server/enpoint";
import { routing } from "@/services/Navegation";


export default function Page() {
  const [link, setLink] = useState<string>("");
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [textBtn, setTextBtn] = useState("Entrar");
  const [isVisible, setIsVisible] = useState(false);
  const {user, login, logout} = useAuth();


  useEffect(()=> {

    if(!user){
      null  
    }
    if(user){
      if(user?.login?.role?.role == "A") {
          routing.handleRouteHomeNonBackAgain();
        } else if(user?.login?.role?.role == "B") {
          routing.handleRouterHomeNoBack();
          console.log("Lock at me1", user?.login?.role?.role)
        } else if(user == null){
          null
          console.log("Aqui")
        }
        return
    }
  }, [user])


  const showModal = () => {
    
      setIsVisible(true);
  };

  const hideModal = () => {
      setIsVisible(false);
  };


  const handleClick = async () => {
    await login(email, password);
  }
  
  

  return (
    <ModalContext.Provider value={{ isVisible, showModal }}>

      <ScrollView style={{backgroundColor: "#fff"}}>
    <View style={Style.container}>
      
      <Header/>

      <View style={Style.loginData}>
        
        <View>
          <Text style={Style.texth1}>Acessar sua conta</Text>
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
          <Button text={textBtn} onClick={handleClick}/>
          <View style={Style.madein}>
            <MadeInAngolaSVG/>
          </View>
        </View>

      </View>
    </View>
      </ScrollView>
    </ModalContext.Provider>
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