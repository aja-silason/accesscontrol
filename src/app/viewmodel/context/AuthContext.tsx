// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '@/app/viewmodel/utils/server/enpoint';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type AuthContextProps = {
  user: any
  login: (email: string, password: string) => Promise<void>,
  isLoading: any,
  logout: () => Promise<void>,
}

type dataAccess = {
  login: string | number,
  password: string | number,
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [textBtn, setTextBtn] = useState("Entrar");
  const [isLoading, setIsLoading] = useState(false);


  const login = async (email: any, password: any) => {

  

    try {

      const payload: dataAccess = {
        login: email,
        password: password
      }

    const isAccess: Array<keyof dataAccess> = ['password', 'login'];
    for(const key of isAccess) {
        if(payload[key] === "" || payload[key] == undefined || payload[key] == " " ){
          return Alert.alert("Aviso", "Dados incorrectos", [
            {
              text: "Tentar novamente",
              onPress: () => setIsLoading(false),
            }
          ]);
        }
    }

      console.log("user data: ", payload);

      setIsLoading(true);
      
      const {data} = await axios.post(`${API_URL}user/login`, payload);

      if(data?.response?.status == 400){
        Alert.alert("Aviso", "Acesso não permitido"); 
      }
      console.log(data);
      const user = data;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      
    } catch (error) {
      console.log("BBbnnn", error);
      Alert.alert("Aviso", "Acesso não permitido"); 
      setIsLoading(false);
    } finally{
      setIsLoading(false);
    }

}

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        setUser(JSON.parse(userString));
      }
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
