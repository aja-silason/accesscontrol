import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAuth } from "../context/AuthContext";
import LoginScreen from "@/app/view";
import UserAceessControllTabs from "../layout/user-accesscontrol-tabs";

export default function Navigation () {

    const stack = createNativeStackNavigator();

    const { user } = useAuth();

    return (
        <stack.Navigator>
            {
                user?.login?.role?.role == "A" ? (
                    <stack.Screen name="accessControll" component={UserAceessControllTabs} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                ) : user?.login?.role?.role == "B" ? (
                    <stack.Screen name="login" component={LoginScreen} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                ) : (
                    <stack.Screen name="login" component={LoginScreen} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                )
            }
        </stack.Navigator>
    )

}
