import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { Colors, Typography } from 'styles';
import { iconConstants } from 'constants/ntb_sa';
import CustomButton from '../Button/CustomButton/CustomButton';
import CustomIcon from '../common/CustomIcon';
import BlurBackdrop from './BlurBackdrop';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  containerStyle: {
    backgroundColor: 'white',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginTop: 45,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  dismissTxt: {
    textAlign: 'center',
    fontSize: Typography.H5_BOLD,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.MAROON,
  },
  headerTitleStyle: {
    fontSize: 24,
    width: (width - 40) * 0.8,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  popSubText: {
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 20,
    width: width * 0.7,
    fontSize: 14,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  iconStyle: { marginTop: 10 },
  closeBtnStyle: { margin: 25 },
});

const CustomActionSheetModal = ({
  isModalVisible,
  headerTitle,
  subtext,
  firstBtnTitle,
  secondBtnTitle = null,
  deleteCallback,
  closeModal,
}) => {
  const btnContainer = {
    alignItems: 'center',
    marginBottom: secondBtnTitle != null ? 0 : 25,
  };

  return (
    <Modal style={styles.modalStyle} isVisible={isModalVisible} customBackdrop={<BlurBackdrop />}>
      <View style={styles.containerStyle}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitleStyle}>{headerTitle}</Text>
          <CustomIcon
            style={styles.iconStyle}
            name={iconConstants.IC_CLOSE}
            color={Colors.DARK_MAROON}
            size={25}
            onPress={closeModal}
          />
        </View>
        <Text style={styles.popSubText}>{subtext}</Text>
        <View
          style={{
            ...btnContainer,
          }}
        >
          <CustomButton
            disabled={false}
            buttonWidth={width * 0.8}
            bgColor={Colors.MAROON}
            textColor={Colors.SOLID_WHITE}
            text={firstBtnTitle}
            onPress={() => {
              deleteCallback();
            }}
          />
        </View>
        {secondBtnTitle != null && (
          <TouchableOpacity
            onPress={() => {
              closeModal();
            }}
            style={styles.closeBtnStyle}
          >
            <Text style={styles.dismissTxt}>{secondBtnTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

CustomActionSheetModal.propTypes = {
  isModalVisible: PropTypes.bool,
  headerTitle: PropTypes.string,
  subtext: PropTypes.string,
  firstBtnTitle: PropTypes.string,
  secondBtnTitle: PropTypes.string,
  deleteCallback: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

CustomActionSheetModal.defaultProps = {
  isModalVisible: undefined,
  headerTitle: undefined,
  subtext: undefined,
  firstBtnTitle: undefined,
  secondBtnTitle: null,
};

export default CustomActionSheetModal;
