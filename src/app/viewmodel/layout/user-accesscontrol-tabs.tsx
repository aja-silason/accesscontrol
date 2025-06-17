import Home from "@/app/view/screens/accesscontrol-module/home"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons";
import AccesHistory from "@/app/view/screens/accesscontrol-module/accesshistory";
import Settings from "@/app/view/screens/accesscontrol-module/settings";


export default function UserAceessControllTabs(){
    
    const Tabs = createBottomTabNavigator()

    return (

        <Tabs.Navigator>
            <Tabs.Screen
                name="homeAceesControl" 
                component={Home}
                options={{
                    headerShown: false,
                    title: "inicio",
                    tabBarIcon: ({color, focused, size}) => (
                        <Ionicons name="home-outline" color={focused ? color : color} size={size}/>
                    )
                }}
            />
            <Tabs.Screen
                name="AccessHistory" 
                component={AccesHistory}
                options={{
                    headerShown: false,
                    title: "Historico",
                    tabBarIcon: ({color, focused, size}) => (
                        <Ionicons name="timer-outline" color={focused ? color : color} size={size}/>
                    )
                }}
            />
            <Tabs.Screen
                name="Settings" 
                component={Settings}
                options={{
                    headerShown: false,
                    title: "Definições",
                    tabBarIcon: ({color, focused, size}) => (
                        <Ionicons name="settings-outline" color={focused ? color : color} size={size}/>
                    )
                }}
            />
        </Tabs.Navigator>

    )

}
