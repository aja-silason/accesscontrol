// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useEffect, useState } from "react";

// type Screen = {
//     id: number,
//     screen: string,
// }

// export const usePermission = () => {
    
//     const [screenData, setScreenData] = useState<string | null>();
    
//     const screen: string = "@user:screen";
//     const token: string = "@user:token";

//     useEffect(() => {
//         getRouterScreen()
//     }, []);

// // const token3: string = "@user:token";

// // const authRout = () => {
// //     AsyncStorage.getItem("@user:token")
// //        .then(token => {
// //             if (token) {
// //                 router.navigate("/screens/home");
// //             } else {
// //                 router.navigate("/screens/login");
// //             }
// //         })
// //        .catch(error => console.log(error));
// // }

//     const routerScreen = async (value: any) => {
//         try {
//             await AsyncStorage.setItem(screen, value);
//             console.log("entrou aqui...",value);
            
//         } catch (error) {
//             console.log("Epahhh erro so já neh");
//         }
//     }


//     const getRouterScreen = async () => {

//         try {
//             const storedScreen: any = await AsyncStorage.getItem(screen);
//             if(storedScreen == null) {
//                 const parseData = JSON.parse(storedScreen);
//                 setScreenData(parseData);
//                 console.log("get1", parseData);
//             }
//         } catch (error) {
//             console.log("Epahhh erro so já neh");
//         }
// }

// console.log("pegando...", screenData);

// // const getThis =  getRouterScreen()

// // console.log("get", getThis);

//     return{
//         screenData,
//         routerScreen
//     }

// }