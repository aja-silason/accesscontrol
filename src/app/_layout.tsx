import { AuthProvider, useAuth } from "@/context/AuthContext";
import { HeaderProvider } from "@/context/headerContext";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";




export default function Layout () {
      // const { user } = useAuth();
      return (
      <AuthProvider>

            <AuthNavigator/>

        {/* <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="screens/home" options={{headerShown: false}}/>
            <Stack.Screen name="index" options={{headerShown: false}}/>
        </Stack> */}
      </AuthProvider>
      );
      // return(
      //       <Stack screenOptions={{headerShown: false}}>
                  
      //             <AuthProvider>
      //                   <AuthNavigator/>
      //             </AuthProvider>
                  {/* <Stack.Screen name="index" options={{headerShown: false}}/>
                  <Stack.Screen name="screens/home" options={{headerShown: false}}/>
                  <Stack.Screen name="screens/accesshistory" options={{headerShown: false}}/>
                  <Stack.Screen name="screens/homeotheruser" options={{headerShown: false}}/> */}
            {/* </Stack> */}
      // )
}

const AuthNavigator = () => {
      const { user } = useAuth();
      console.log("a", user?.login?.role?.role);
      console.log(user);

      return (
        <Stack screenOptions={{headerShown: false}}>
          {user?.login?.role?.role == "A" ? (
            <Stack.Screen name="screens/home" options={{headerShown: false}}/>
          ) : user?.login?.role?.role == "B" ? (
            <Stack.Screen name="screens/home" options={{headerShown: false}}/>
          ) : (
            <Stack.Screen name="index" options={{headerShown: false}}/>
          )}
        </Stack>
      );
    };
