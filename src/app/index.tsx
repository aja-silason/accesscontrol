import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./viewmodel/Navigation";
import { AuthProvider } from "./viewmodel/context/AuthContext";

export default function App() {

    return (
        <SafeAreaProvider>
            <AuthProvider>
                <Navigation />
            </AuthProvider>
        </SafeAreaProvider>
    )

}