import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-native-modal';
import { Button } from "../button"
import { Text, TouchableOpacity, View } from 'react-native';
import VerifiedSVG from '../svg/Verified';
import { Styles } from './style';
import DeniedSvg from '../svg/DaniedSvg';
import { routing } from '@/services/Navegation';
import { ModalContext } from '@/context/ModalContext';


type ConfirmModalProps  = {
  isVisible: boolean;
  onClose: () => void;
}

export const ModalAlert = ({modalType = "success"}: any) => {
  const [isModalVisible, setIsModalVisible] = useState<any>(false);
  const { isVisible } = useContext(ModalContext);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    console.log(isVisible)
  };

  useEffect(() => {
    if (isModalVisible) {
      const timeoutId = setTimeout(() => {
        setIsModalVisible(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [isModalVisible]);

  return (
    modalType === "success" ? (
    <View style={Styles.viewcontainer}>
      <Button text="mais cara" onClick={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={Styles.viewAlertModal}>
            <VerifiedSVG/>
            <Text style={Styles.textModal}>Hello from a modal!</Text>
        </View>
      </Modal>
    </View>
    ) : modalType === "failure" ? (
        <View style={Styles.viewcontainer}>
        <Button text="mais cara" onClick={toggleModal} />
            <Modal isVisible={isModalVisible}>
                <View style={Styles.viewAlertModalDanied2}>
                    <DeniedSvg/>
                    <Text style={Styles.textModal}>Hello from a modal!</Text>
                </View>
            </Modal>
        </View>
    ) : (
        <View style={Styles.viewcontainer}>
        <Button text="mais caraa" onClick={toggleModal} />
        <Modal isVisible={isModalVisible}>
            <View style={Styles.viewAlertModalDanied}>
                <DeniedSvg/>
                <Text style={Styles.textModal}>Credencial não reconhecido</Text>

                <View style={Styles.textDniedCntainer}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => toggleModal()}>
                    <Text style={Styles.txtDanied}>Tentar Novamente</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => routing.handleRouteEnterMotoristCode()}>
                    <Text style={Styles.txtDanied}>Digitar cedencial</Text>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>
        </View>
    )
  );
};