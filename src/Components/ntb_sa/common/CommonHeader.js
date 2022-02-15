import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { CommonStyle, Colors } from 'styles';
import PropTypes from 'prop-types';
import { Logo } from 'assets/images/ntb_sa';
import CustomIcon from 'components/ntb_sa/common/CustomIcon';
import { iconConstants } from 'constants/ntb_sa';
import { isIosDeviceWithNotch } from 'utils/platform';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  iconStyle: {
    color: Colors.MAROON,
  },
});

const CommonHeader = props => {
  const { containerStyle = {}, style = {}, textStyle, spannableText, showHeader, isBack } = props;
  const navigation = useNavigation();
  return (
    <View style={[containerStyle, { paddingTop: isIosDeviceWithNotch ? 20 : 0 }]}>
      <If condition={showHeader}>
        <View style={[CommonStyle.headerLogoWrapper, style]}>
          <If condition={!isBack}>
            <Image source={Logo} style={CommonStyle.logo} resizeMode="contain" />
          </If>
          <If condition={isBack}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <CustomIcon style={styles.iconStyle} name={iconConstants.IC_ARROW_BACK} size={24} />
            </TouchableWithoutFeedback>
          </If>
        </View>
      </If>
      <View style={[CommonStyle.digitalSavingText, textStyle]}>
        <Text>{spannableText}</Text>
      </View>
    </View>
  );
};

CommonHeader.propTypes = {
  showHeader: PropTypes.bool,
  isBack: PropTypes.bool,
};

CommonHeader.defaultProps = {
  showHeader: false,
  isBack: false,
};

export default CommonHeader;
