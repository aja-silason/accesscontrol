import Home from "@/app/view/screens/accesscontrol-module/home"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons";
import AccesHistory from "@/app/view/screens/accesscontrol-module/accesshistory";
import Settings from "@/app/view/screens/accesscontrol-module/settings";
import { Colors } from "@/app/view/styles/color";
import HomeRefuel from "@/app/view/screens/refuel-module/homeotheruser";
import Ocorrency from "@/app/view/screens/refuel-module/homeotheruser/register";


export default function UserRefuelTabs() {

    const Tabs = createBottomTabNavigator()

    return (

        <Tabs.Navigator>
            <Tabs.Screen
                name="homeAceesControl"
                component={HomeRefuel}
                options={{
                    headerShown: false,
                    title: "Inicio",
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons name="home-outline" color={focused ? color : color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="ocorrency"
                component={Ocorrency}
                options={{
                    headerShown: false,
                    title: "Ocorrência",
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons name="person-add-outline" color={focused ? color : color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="AccessHistory"
                component={AccesHistory}
                options={{
                    headerShown: false,
                    title: "Historico",
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons name="timer-outline" color={focused ? color : color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    title: "Definições",
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons name="settings-outline" color={focused ? color : color} size={size} />
                    )
                }}
            />
        </Tabs.Navigator>

    )

}
