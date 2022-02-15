import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Colors, Typography } from 'styles';
import Labels from 'translations/ntb_sa/surveyConstant';
import BlurBackdrop from './BlurBackdrop';
import CustomIcon from '../common/CustomIcon';
import CustomTextLink from '../common/CustomTextLink';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  leftContent: {
    width: '85%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  popText: {
    fontSize: 24,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  popSubText: {
    fontSize: 10,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    lineHeight: 11,
  },
  iconLeft: {
    color: Colors.MAROON,
  },
  horizontalLine: {
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  closeText: { paddingTop: 10 },
});

const CustomModal = props => {
  const {
    iconModal,
    showLine = true,
    isVisible,
    ComponentName,
    isSkipSurvey = false,
    toggleCallback,
    popText,
    popTextStyle = null,
    popSubText,
    popColorText = Colors.DARK,
    maxHeight,
  } = props;

  let popStyle = styles.popText;
  if (popTextStyle) {
    popStyle = popTextStyle;
  }

  return (
    <Modal isVisible={isVisible} style={styles.modal} customBackdrop={<BlurBackdrop />}>
      <View
        style={[
          styles.modalContainer,
          {
            height: maxHeight,
          },
        ]}
      >
        <View style={styles.mainheader}>
          <View style={styles.headerContainer}>
            <View style={styles.leftContent}>
              <Text style={[{ ...popStyle, color: popColorText }]}>{popText}</Text>
              <If condition={popSubText}>
                <Text style={styles.popSubText}>{popSubText}</Text>
              </If>
            </View>
            <View>
              <If condition={iconModal && iconModal !== ''}>
                <Text style={styles.closeText} onPress={() => toggleCallback()}>
                  <CustomIcon style={styles.iconLeft} name={iconModal} size={25} />
                </Text>
              </If>

              <If condition={iconModal && iconModal === ''}>
                <CustomTextLink
                  text={Labels.SKIP}
                  alignText="center"
                  alignTextVertical="top"
                  handleLink={() => toggleCallback()}
                />
              </If>
            </View>
          </View>
          <If condition={showLine}>
            <View style={styles.horizontalLine} />
          </If>
        </View>
        <If condition={isSkipSurvey}>{ComponentName}</If>
        <If condition={!isSkipSurvey}>
          <ScrollView scrollEnabled style={styles.fill}>
            {ComponentName}
          </ScrollView>
        </If>
      </View>
    </Modal>
  );
};

CustomModal.propTypes = {
  iconModal: PropTypes.string,
  showLine: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  ComponentName: PropTypes.node.isRequired,
  isSkipSurvey: PropTypes.bool,
  toggleCallback: PropTypes.func.isRequired,
  popText: PropTypes.string.isRequired,
  popSubText: PropTypes.string,
  popColorText: PropTypes.string,
  maxHeight: PropTypes.number,
  popTextStyle: PropTypes.oneOfType([PropTypes.object]),
};

CustomModal.defaultProps = {
  iconModal: undefined,
  showLine: true,
  isSkipSurvey: false,
  popColorText: Colors.DARK,
  maxHeight: undefined,
  popSubText: undefined,
  popTextStyle: undefined,
};

export default CustomModal;
