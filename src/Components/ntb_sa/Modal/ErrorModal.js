import React, { useContext } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { Colors, Typography } from 'styles';
import { iconConstants, screensConst } from 'constants/ntb_sa';
import { AjaxHeaderContext } from 'screens/authentication/provider/ajaxHeaderProvider';
import { hideSysMsg, isIOS } from 'utils/ntb_sa';
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
    padding: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitleStyle: {
    top: 0,
    marginTop: isIOS ? 10 : 0,
    marginBottom: isIOS ? 20 : 8,
    fontSize: 24,
    width: (width - 80) * 0.8,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  popSubText: {
    marginTop: isIOS ? 0 : -10,
    marginBottom: isIOS ? 40 : 30,
    width: width * 0.7,
    fontSize: 18,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  iconStyel: { marginTop: 13, marginRight: 15 },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
});

const ErrorModal = ({ isModalVisible, headerTitle = 'Oh..no!', firstBtnTitle = 'Okay, Got it!' }) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.LoaderReducer);
  const navigation = useNavigation();
  const { clearHeadersFromContext } = useContext(AjaxHeaderContext);

  const close = () => {
    hideSysMsg(dispatch);
    let navigateOnClose = '';
    let screenName = '';
    navigateOnClose = error?.navigateOnClose;
    screenName = error?.screenName;

    if (navigateOnClose !== undefined && navigateOnClose === true && screenName !== undefined && screenName !== '') {
      navigation.navigate(screenName);
    }
  };

  const okClicked = () => {
    hideSysMsg(dispatch);
    if (error && error?.screenName) {
      const scName = error?.screenName;
      if (error?.responseCd === '06') {
        // session expiry navigate to offer/aadhar login
        navigation.popToTop();
      } else if (scName === screensConst.ACCOUNT_CREATION) {
        navigation.navigate(scName);
      } else if (scName === screensConst.OPTIMUS_ROOT_PAGE) {
        // clear ntb_sa header before jump to optimus first login page or mpin screens
        clearHeadersFromContext();
        navigation.navigate('authentication');
      } else {
        navigation.replace(scName);
      }
    }
  };

  return (
    <Modal style={styles.modalStyle} isVisible={isModalVisible} customBackdrop={<BlurBackdrop />}>
      <View style={styles.containerStyle}>
        <View style={styles.headerContainer}>
          <CustomIcon style={styles.iconStyel} name={iconConstants.IC_ALERT} color={Colors.ACCENT_2} size={40} />
          <View>
            <Text style={styles.headerTitleStyle}>{headerTitle}</Text>
            <Text style={styles.popSubText}>{error.message ? error.message : 'Something went wrong.'}</Text>
          </View>
          <CustomIcon name={iconConstants.IC_CLOSE} color={Colors.DARK_MAROON} size={25} onPress={close} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            disabled={false}
            buttonWidth={150}
            bgColor={Colors.MAROON}
            textColor={Colors.SOLID_WHITE}
            text={firstBtnTitle}
            onPress={okClicked}
          />
        </View>
      </View>
    </Modal>
  );
};

ErrorModal.propTypes = {
  isModalVisible: PropTypes.bool,
  headerTitle: PropTypes.string,
  firstBtnTitle: PropTypes.string,
};

ErrorModal.defaultProps = {
  isModalVisible: undefined,
  headerTitle: 'Oh..no!',
  firstBtnTitle: 'Okay, Got it!',
};

export default ErrorModal;
