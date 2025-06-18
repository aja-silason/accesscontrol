import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAuth } from "../context/AuthContext";
import LoginScreen from "@/app/view";
import UserAceessControllTabs from "../layout/user-accesscontrol-tabs";
import EnterCodeMotorist from "@/app/view/screens/accesscontrol-module/home/entercode";
import EnterCodeDriver from "@/app/view/screens/accesscontrol-module/home/entercode/driver";
import EnterCodeInVehicle from "@/app/view/screens/accesscontrol-module/home/entercode/vehicle";
import EnterCodeConcluited from "@/app/view/screens/accesscontrol-module/home/entercode/enterconcluited";
import QRread from "@/app/view/screens/accesscontrol-module/home/readqr";
import AccessEntry from "@/app/view/screens/accesscontrol-module/home/entry/accesshistory";
import RecentAccessEntry from "@/app/view/screens/accesscontrol-module/home/recentEntrance";
import AccesHistory from "@/app/view/screens/accesscontrol-module/accesshistory/historydistribuitor/entrance";
import HomeRefuel from "@/app/view/screens/refuel-module/homeotheruser";
import UserRefuelTabs from "../layout/user-refuel-tabs";

export default function Navigation () {

    const stack = createNativeStackNavigator();

    const { user } = useAuth();

    return (
        <stack.Navigator>
            {
                user?.login?.role?.role == "A" ? (
                    <>
                        <stack.Screen name="accessControll" component={UserAceessControllTabs} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        <stack.Screen name="entercodedriver" component={EnterCodeDriver} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        <stack.Screen name="entercodevehicle" component={EnterCodeInVehicle} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        <stack.Screen name="qrcoderead" component={QRread} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        <stack.Screen name="enterconcluited" component={EnterCodeConcluited} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        <stack.Screen name="recentaccessentry" component={RecentAccessEntry} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        <stack.Screen name="accessentry" component={AccessEntry} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        <stack.Screen name="accessehistoryentrance" component={AccesHistory} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                        
                    </>
                ) : user?.login?.role?.role == "B" ? (
                    <stack.Screen name="refuelControll" component={UserRefuelTabs} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                ) : (
                    <stack.Screen name="login" component={LoginScreen} options={{headerShown: false, statusBarStyle: "dark", headerTransparent: true}}/>
                )
            }
        </stack.Navigator>
    )

}
