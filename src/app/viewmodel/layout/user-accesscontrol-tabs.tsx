import Home from "@/app/view/screens/home"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons";


export default function UserAceessControllTabs(){
    
    const Tabs = createBottomTabNavigator()

    return (

        <Tabs.Navigator>
            <Tabs.Screen
                name="homeAceesControl" 
                component={Home}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({color, focused, size}) => (
                        <Ionicons name="home" color={focused ? color : color} size={size}/>
                    )
                }}
            />
        </Tabs.Navigator>

    )

}
