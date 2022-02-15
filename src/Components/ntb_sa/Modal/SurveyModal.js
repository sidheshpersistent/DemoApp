import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MenuProvider } from 'react-native-popup-menu';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import Labels from 'translations/ntb_sa/surveyConstant';
import { Colors, Typography } from 'styles';
import CustomTextLink from '../common/CustomTextLink';
import BlurBackdrop from './BlurBackdrop';

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
    paddingTop: 20,
  },
  popText: {
    fontSize: 24,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  popSubText: {
    fontSize: 10,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    lineHeight: 11,
  },
  horizontalLine: {
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
});

const SurveyModal = props => {
  const {
    showLine = false,
    isVisible,
    ComponentName,
    isSkipSurvey = false,
    toggleCallback,
    popText,
    popSubText,
    popColorText = Colors.DARK,
    maxHeight,
    modalPaddingTop,
  } = props;
  return (
    <Modal isVisible={isVisible} style={styles.modal} customBackdrop={<BlurBackdrop />}>
      <MenuProvider
        style={[
          styles.modalContainer,
          {
            height: maxHeight,
            marginTop: modalPaddingTop,
          },
        ]}
      >
        <View style={styles.mainheader}>
          <View style={styles.headerContainer}>
            <View style={styles.leftContent}>
              <Text style={[styles.popText, { color: popColorText }]}>{popText}</Text>
              <If condition={popSubText}>
                <Text style={styles.popSubText}>{popSubText}</Text>
              </If>
            </View>
            <View>
              <CustomTextLink
                text={Labels.SKIP}
                alignText="center"
                alignTextVertical="top"
                handleLink={() => toggleCallback()}
              />
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
      </MenuProvider>
    </Modal>
  );
};

SurveyModal.propTypes = {
  showLine: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  ComponentName: PropTypes.node.isRequired,
  isSkipSurvey: PropTypes.bool,
  toggleCallback: PropTypes.func.isRequired,
  popText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  popSubText: PropTypes.object,
  popColorText: PropTypes.string,
  maxHeight: PropTypes.number,
  modalPaddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SurveyModal.defaultProps = {
  showLine: false,
  isSkipSurvey: false,
  popColorText: Colors.DARK,
  maxHeight: undefined,
  modalPaddingTop: undefined,
  popSubText: undefined,
  popText: undefined,
};

export default SurveyModal;
