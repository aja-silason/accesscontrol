import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { useContext, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const handleRouteLogin = () => {
    router.push("/");
}

const handleRouteSettings = () => {
    router.push("/screens/settings");
}

const handleRouteAccessHistory = () => {
    router.push("/screens/accesshistory");
}
const handleRouteHome = () => {
    router.push("/screens/home");
}
const handleRouteHomeNonBackAgain = () => {
    router.replace("/screens/home");
}

const handleRouteDistribuitor = () => {
}

/** Routes Inside Home */

const handleRouteGetEntries = (id: any) => {
    router.push(`/screens/home/entry/${id}`);
}

const handleRouteEnterMotoristCode = () => {
    router.push("/screens/home/entercode")
}

const handleRouteEnterVehicleCode = () => {
    router.replace("/screens/home/entercode/entervehicle"); 
}

const handleRouteEnterConfirmatedInformationCode = () => {
    router.replace("/screens/home/entercode/enterconcluited"); 
}
const handleRouteConfirmetedCode = () => {
    
}
const handleRouteQrRead = () => {
    router.push("/screens/home/readqr");
}
/** Inside in Settings */
const handleRouteChangePassword = () => {
    router.push("/screens/settings/changepassword");
}
const handleRouteUserGuide = () => {
    router.push("/screens/settings/userguide");
}
const handleRoutePrivaciesAndTerms = () => {
    router.push("/screens/settings/policiesandterms");
}

/* acceshistory */

const handleRouteAccessHistoryId = (id: any) => {
    router.push(`/screens/accesshistory/historydistribuitor/${id}`);
}

/* Inside homeUser */

const handleRouterHomeNoBack = () => {
    router.replace(`/screens/homeotheruser`);
}

const handleRouterHome = () => {
    router.push(`/screens/homeotheruser/`);
}

const handleRouteregister = () => {
    router.push(`/screens/homeotheruser/register/`);
}

const handleRouterOcorrency = () => {
    router.push(`/screens/homeotheruser/register/ocorrency`);
}
const handleRouterSupplie = () => {
    router.push(`/screens/homeotheruser/register/supplie`);
}


// Auth Navigation

const handleRedirectLogin = () => {
    const {user} = useAuth()

    console.log(user)

    if(user?.login?.role?.role == "A") {
        handleRouteHomeNonBackAgain();
    } else if(user?.login?.role?.role == "B") {
        handleRouterHome();
    } else if(user == null){
        handleRouteLogin()
    }

}


// policiesandterms
export const routing = {
    handleRouteLogin,
    handleRedirectLogin,
    handleRouteSettings,
    handleRouteAccessHistory,
    handleRouteHome,
    handleRouteDistribuitor,
    handleRouteChangePassword,
    handleRouteUserGuide,
    handleRoutePrivaciesAndTerms,
    handleRouteAccessHistoryId,
    handleRouteGetEntries,
    handleRouteEnterMotoristCode,
    handleRouteEnterVehicleCode,
    handleRouteConfirmetedCode,
    handleRouteQrRead,
    handleRouteEnterConfirmatedInformationCode,
    handleRouteHomeNonBackAgain,
    handleRouterHome,
    handleRouteregister,
    handleRouterOcorrency,
    handleRouterSupplie,
    handleRouterHomeNoBack

}
