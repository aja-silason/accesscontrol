// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '@/app/viewmodel/utils/server/enpoint';
import { Alert, Platform } from 'react-native';
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
  const [isLoading, setIsLoading] = useState(false);

  const navigate: any = useNavigation()


  const login = async (email: any, password: any) => {



    try {
      setIsLoading(true);

      const payload: dataAccess = {
        login: email,
        password: password
      }

      const isAccess: Array<keyof dataAccess> = ['password', 'login'];
      for (const key of isAccess) {
        if (payload[key] === "" || payload[key] == undefined || payload[key] == " ") {
          return Alert.alert("Aviso", "Dados incorrectos", [
            {
              text: "Tentar novamente",
              onPress: () => setIsLoading(false),
            }
          ]);
        }
      }

      const { data } = await axios.post(`${API_URL}user/login`, payload);

        Alert.alert("Aviso", "Acesso não permitido");

      if (data?.response?.status == 400) {
        Alert.alert("Aviso", "Acesso não permitido");
      }
      const user = data;
      await AsyncStorage?.setItem('user', JSON.stringify(user));

      if (user?.login?.role?.role == "A") {
        navigate.navigate("accessControll");
      } else if (user?.login?.role?.role == "B") {
        navigate.navigate("refuelControll")
      }

      setUser(user);
      setIsLoading(false);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response) {
          if (error?.code?.includes("ERR_BAD_REQUEST")) {
            if (Platform.OS == "web") alert("Alguma coisa correu mal, estamos resolvendo por você");
            Alert?.alert("Aviso", "Alguma coisa correu mal, estamos resolvendo por você");
            //return
          } else {
            //Alert.alert("Erro", message);
            if (Platform.OS == "web") alert("Alguma coisa correu mal, estamos resolvendo por você");
            Alert.alert("Aviso", "Alguma coisa correu mal, estamos resolvendo por você");
          }
        } else if (error?.status == 201) {
          if (Platform.OS == "web") alert("Aplicado com sucesso");
          Alert.alert("Sucesso", "Aplicado com sucesso");
          return;
        } else if (error.request) {
          if (Platform.OS == "web") alert("Verifique a sua conexão com a internet");
          Alert.alert("Aviso", "Verifique a sua conexão com a internet");
        }
      } else if (error instanceof TypeError) {
        if (Platform.OS == "web") alert("Erro de rede ou resposta inválida");
        Alert.alert("Aviso", "Erro de rede ou resposta inválida");
      } else {
        if (Platform.OS == "web") alert("Alguma coisa correu mal, estamos resolvendo por você");
        Alert.alert("Aviso", "Alguma coisa correu mal, estamos resolvendo por você");
      }
    } finally {
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
