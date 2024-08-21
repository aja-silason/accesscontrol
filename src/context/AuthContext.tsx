// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogin } from '@/hooks/useLogind';
import axios from 'axios';
import { API_URL } from '@/utils/server/enpoint';
import { Alert } from 'react-native';
import { routing } from '@/services/Navegation';

type User = {
  email: string;
  // accessLevel: string;
}

type AuthContextProps = {
  user: any
  login: (email: string, accessLevel: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [textBtn, setTextBtn] = useState("Entrar");

  const login = async (email: any, password: any) => {

    console.log("Opahh");
    console.log("", email, password)

    const payload = {
      telephone: email,
      password: password
    }

    try {
      setTextBtn("Processando...")
      
      const {data, status} = await axios.post(`${API_URL}user/login`, payload);
      console.log(data);

      if(data.message){
        Alert.alert("Aviso", data.message); 
      }
      setTextBtn(`Logado.`);
      const user = data;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      
    } catch (error) {
      console.log(error);
    }


    // router.replace("./screens/home");
    // setLink("./screens/");

}

  // async (email: string, accessLevel: string) => {
  //   const user = { email, accessLevel };
  //   await AsyncStorage.setItem('user', JSON.stringify(user));
  //   setUser(user);
  // };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
    // routing.handleRouteLogin();
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
    <AuthContext.Provider value={{ user, login, logout }}>
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
