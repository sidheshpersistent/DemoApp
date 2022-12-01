import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import Modal from 'react-native-modal';
import { camera_icon, gallery_icon } from "../../../Assets/Images";
import styles from './styled';
const PopupCameraGallery = props => {
  const {
    isVisible,
    openCamera,
    chooseImage,
    closePopup,
    testID_library,
    testID_camera
  } = props;
  return (
    <Modal
      
      isVisible={isVisible}
      onBackButtonPress={closePopup}
      onBackdropPress={closePopup}
      style={{ justifyContent: 'flex-end', margin: 0 }}>
      <SafeAreaView style={styles.options}>
        <TouchableOpacity testID={testID_library} style={[styles.option,styles.seperator]} onPress={chooseImage}>
          <Image source={gallery_icon} style={styles.iconStyle} />
          <Text>Library </Text>
        </TouchableOpacity>
        <TouchableOpacity testID={testID_camera} style={styles.option} onPress={openCamera}>
          <Image source={camera_icon} style={styles.iconStyle} />
          <Text>Camera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};
export default PopupCameraGallery;
