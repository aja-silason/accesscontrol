import { Text, TouchableOpacity, View } from "react-native";
// import HomeIconSvg from "../components/svg/homeiconsvg";
// import DistribuitorSvgIcon from "../components/svg/distribuitoiconsvg";
// import SettingsIconSvg from "../components/svg/settings";
import { Style } from "./Style";
import { router } from "expo-router";
import HomeIconSvg from "../svg/homeiconsvg";
import DistribuitorSvgIcon, { DistribuitorSvgIconBlack } from "../svg/distribuitoiconsvg";
import SettingsIconSvg, { SettingsIconSvgBlack } from "../svg/settings";

import { routing } from "@/app/viewmodel/services/Navegation";
import { HeaderContext } from "@/app/viewmodel/context/headerContext";
import { useContext, useEffect } from "react";
import QRIconSvg, { QRIconSvgBlack } from "../svg/QRIconSvg";
import { useAuth } from "@/app/viewmodel/context/AuthContext";


export default function Menu() {

    const {user, login, logout} = useAuth();

    // const {header = "initial", toggleHeader} = useContext(HeaderContext);

    // function handleHome(){
    //     toggleHeader("initial");
    // }
    
    // function handleAccess(){
    //     toggleHeader("access");
    // }

    // function handleSettings(){
    //     toggleHeader("settings");
    // }

    function handleStyleMenuHome(){
        // if(header !== "initial"){
        //     return Style.btnMenu
        // }     
        return Style.btnMenuActive
    }

    function handleStyleMenuAccess(){
        // if(header !== "access"){
        //     return Style.btnMenu
        // }
        return Style.btnMenu
    }

    function handleStyleMenuSettings(){
        // if(header !== "settings"){
        //     return Style.btnMenu
        // }     
        return Style.btnMenu
    }

    const ChoiceStyle = {
        home: handleStyleMenuHome(),
        history: handleStyleMenuAccess(),
        settings: handleStyleMenuSettings(),
    }

    function handleChangeRouteAndChangeHeaderHome() {
        // handleHome();
        routing.handleRouteHome();
    }
    function handleChangeRouteAndChangeHeaderAccess() {
        // handleAccess();
        routing.handleRouteAccessHistory();
    }

    function handleChangeRouteAndChangeHeaderSettings() {
        // handleSettings();
        routing.handleRouteSettings();
    }

    // user home

    function handleChangeRouteRegisterUser() {
        routing.handleRouteregister();
    }

    function handleChangeRouteHomeUser() {
        routing.handleRouterHome();
    }

    return (
        
            user?.login?.role?.role == "A" ? (
                <View style={Style.container}>
                <View style={Style.menu}>
                    <TouchableOpacity style={ChoiceStyle.home} activeOpacity={0.9} onPress={handleChangeRouteAndChangeHeaderHome}>                  
                        {/* {
                            header === "initial" ? (<View className="flex-row gap-2 items-center"><QRIconSvgBlack/><Text style={Style.text}>Home</Text></View>) : <QRIconSvg/>
                        } */}
                        <View style={Style.textH}><QRIconSvgBlack/><Text style={Style.text}>Scan</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={ChoiceStyle.history} activeOpacity={0.9} onPress={handleChangeRouteAndChangeHeaderAccess}>
                        {/* {
                            header === "access" ? (<View className="flex-row gap-2 items-center"><DistribuitorSvgIconBlack/><Text style={Style.text}>Distibuidora</Text></View>) : <DistribuitorSvgIcon/>
                        } */}
                        <DistribuitorSvgIcon/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={ChoiceStyle.settings} activeOpacity={0.9} onPress={handleChangeRouteAndChangeHeaderSettings}>
                        {/* {
                            header === "settings" ? (<View className="flex-row gap-2 items-center"><SettingsIconSvgBlack/><Text style={Style.text}>Definições</Text></View>) : <SettingsIconSvg/>
                        } */}
                        <SettingsIconSvg/>
                    </TouchableOpacity>

                </View>
            </View>
            ) : user?.login?.role?.role == "B" ? (
                <View style={Style.container}>
                    <View style={Style.menu}>
                        <TouchableOpacity style={ChoiceStyle.home} activeOpacity={0.9} onPress={handleChangeRouteHomeUser}>                  
                            {/* {
                                header === "initial" ? (<View className="flex-row gap-2 items-center"><QRIconSvgBlack/><Text style={Style.text}>Home</Text></View>) : <QRIconSvg/>
                            } */}
                            <View style={Style.textH}><HomeIconSvg/><Text style={Style.text}>Home</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={ChoiceStyle.history} activeOpacity={0.9} onPress={handleChangeRouteRegisterUser}>
                            {/* {
                                header === "access" ? (<View className="flex-row gap-2 items-center"><DistribuitorSvgIconBlack/><Text style={Style.text}>Distibuidora</Text></View>) : <DistribuitorSvgIcon/>
                            } */}
                            <DistribuitorSvgIcon/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={ChoiceStyle.settings} activeOpacity={0.9} onPress={handleChangeRouteAndChangeHeaderSettings}>
                            {/* {
                                header === "settings" ? (<View className="flex-row gap-2 items-center"><SettingsIconSvgBlack/><Text style={Style.text}>Definições</Text></View>) : <SettingsIconSvg/>
                            } */}
                            <SettingsIconSvg/>
                        </TouchableOpacity>

                    </View>
                </View>
            ) : (
                <View style={Style.container}>
                    <View style={Style.menu}>
                        <TouchableOpacity style={ChoiceStyle.home} activeOpacity={0.9} onPress={handleChangeRouteAndChangeHeaderHome}>                  
                            {/* {
                                header === "initial" ? (<View className="flex-row gap-2 items-center"><QRIconSvgBlack/><Text style={Style.text}>Home</Text></View>) : <QRIconSvg/>
                            } */}
                            <View style={Style.textH}><QRIconSvgBlack/><Text style={Style.text}>Scan</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={ChoiceStyle.history} activeOpacity={0.9} onPress={handleChangeRouteAndChangeHeaderAccess}>
                            {/* {
                                header === "access" ? (<View className="flex-row gap-2 items-center"><DistribuitorSvgIconBlack/><Text style={Style.text}>Distibuidora</Text></View>) : <DistribuitorSvgIcon/>
                            } */}
                            <DistribuitorSvgIcon/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={ChoiceStyle.settings} activeOpacity={0.9} onPress={handleChangeRouteAndChangeHeaderSettings}>
                            {/* {
                                header === "settings" ? (<View className="flex-row gap-2 items-center"><SettingsIconSvgBlack/><Text style={Style.text}>Definições</Text></View>) : <SettingsIconSvg/>
                            } */}
                            <SettingsIconSvg/>
                        </TouchableOpacity>

                    </View>
                </View>
            )
        
        
    )
}