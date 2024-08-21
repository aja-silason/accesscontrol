import {
  View,
  Text,
//   ModalProps,
  ScrollView,
  Modal as RNModal,
  TouchableOpacity,
  Image,
} from "react-native"
import { BlurView } from "expo-blur"
import { Styles } from "./style"
import MadeInAngolaSVG, { MadeInAngolaSVGThin } from "../svg/madeinangolasvg"
import { BookIconSvg } from "../svg/BookIconSvg"
import { ReactNode } from "react"
import { useAuth } from "@/context/AuthContext"


type  ModalProps = {
  usename: string,
  role: string,
  onClose?: () => void,
  children: ReactNode,
  visible: boolean,
  logOut?: () => void
}

export function Modal({
  usename,
  role,
  onClose,
  children,
  logOut,
  ...rest
}: ModalProps) {

  return (
    <RNModal transparent statusBarTranslucent={true} {...rest}>
        <BlurView
        style={Styles.modalSize}
        intensity={0.5}
        tint="systemThickMaterialDark"
        experimentalBlurMethod="dimezisBlurView"
      >
        <View style={Styles.container}>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                {onClose && (
                  <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
                    {/* <X size={20} /> */}
                  </TouchableOpacity>
                )}
              </View>

              {usename.trim().length > 0 && (
                <View>

                    <View style={Styles.modal1}>
                        <View style={Styles.modal2}>
                            <Image source={require("@/assets/profileimage/profile.png")} style={Styles.ImageProfile}/>
                            <View>
                                <Text style={Styles.title}>{usename}</Text>
                                <Text style={Styles.subtitle}>{role}</Text>
                            </View>
                        </View>
                        <View>
                            <MadeInAngolaSVGThin style={Styles.size}/>
                        </View>
                    </View>

                    <View style={Styles.books1}>
                        <View style={Styles.books2}>
                            <BookIconSvg/><Text>Guia de Utilização</Text>
                        </View>
                        <View style={Styles.books2}>
                            <BookIconSvg/><Text>Termo de Privacidade</Text>
                        </View>
                    </View>
                    <View >
                        <TouchableOpacity style={Styles.btnLogOut} activeOpacity={0.9} onPress={logOut}>
                            <Text style={Styles.textWhite}>Terminar Sessão</Text>
                        </TouchableOpacity>
                    </View>

                    
                    <View style={Styles.details}>
                        <Text style={Styles.thinText}>V 1.0.0</Text>
                        <View style={Styles.details}>
                            <Text style={Styles.thinText}>&lt;/&gt; with ❤️ by </Text>
                            <Text style={Styles.underline}>Baxtter Corporation</Text>
                        </View>
                    </View>
                    
                </View>
              )}

              {children}
            </ScrollView>
          </View>
        </View>
        </BlurView>
    </RNModal>
  )
}
