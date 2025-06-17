import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAuth } from "../context/AuthContext";
import LoginScreen from "@/app/view";

export default function Navigation () {

    const stack = createNativeStackNavigator();

    const { user } = useAuth();

    return (
        <stack.Navigator>
            {
                user?.login?.role?.role == "A" ? (
                    <stack.Screen name="login" component={LoginScreen}/>
                ) : user?.login?.role?.role == "A" ? (
                    <stack.Screen name="login" component={LoginScreen}/>
                ) : (
                    <stack.Screen name="login" component={LoginScreen}/>
                )
            }
        </stack.Navigator>
    )

}
