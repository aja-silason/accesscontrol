import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export const useLogin = async (email: any, password: any) => {
        const [textBtn, setTextBtn] = useState("Entrar");
    
        console.log("Opahh");
        console.log("", email, password)
    
        const payload = {
          login: email,
          password: password
        }
    
        try {
          setTextBtn("Processando...")
          
          const res = await axios.post(`${API_URL}user/login`, payload);
          console.log(res.data);
    
          if(res.status == 201){
            return setTextBtn(`Logado.`);
          }
          Alert.alert("Aviso", res.data.message);
    
          
        } catch (error) {
          console.log(error);
        }
    
    
        // router.replace("./screens/home");
        // setLink("./screens/");
  
}