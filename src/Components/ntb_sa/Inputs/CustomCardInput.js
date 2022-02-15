/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, CommonStyle, Typography } from 'styles';
import BackgroundTimer from 'react-native-background-timer';
import styled from 'styled-components/native';
import commonLabel from 'translations/ntb_sa/common';
import { isIOS } from 'utils/ntb_sa';
import CustomTextInput from './CustomTextInput';
import CustomTextLink from '../common/CustomTextLink';
import ArrowWrapper from '../common/ArrowWrapper/ArrowWrapper';
import CardView from '../common/CardView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  LeftContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  timmerContainer: { marginBottom: isIOS ? 1 : -2 },
  consentTextStyle: {
    fontSize: 10,
    lineHeight: 16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  consentTxtContainer: { marginTop: 20, marginBottom: 30 },
  otpConsentContainer: { marginTop: 43 },
});

const RESEND_OTP_TIME_LIMIT = 45;
const CustomCardInput = props => {
  const {
    textColor = Colors.MAROON,
    spannableText,
    fontName,
    iconColor,
    errorColor = Colors.DARK,
    isActive,
    subContent,
    subContentStyle,
    linkText,
    handleLink,
    handleNext,
    toolTipComponent,
    showTimer,
    setTimer,
    aadharNum,
    linkTextShow = true,
    aadharConsent = false,
    otpConsent = false,
    nextAction,
    ...remainingProps
  } = props;

  const [isTimerRunning, setTimerRunning] = useState(false);
  const [counter, setCounter] = useState();

  const timerStart = () => {
    setCounter(RESEND_OTP_TIME_LIMIT);
    BackgroundTimer.runBackgroundTimer(() => {
      setCounter(prevState => prevState - 1);
    }, 1000);
  };

  useEffect(() => {
    if (setTimer) {
      setTimerRunning(true);
      timerStart();
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer();
      setTimerRunning(false);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) {
      setTimerRunning(false);
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [counter]);

  return (
    <View style={styles.container}>
      <CardView style={CommonStyle.customCardInputStyle}>
        <ToolTipContainerView>
          <HeaderText>{spannableText}</HeaderText>
          {toolTipComponent || <></>}
        </ToolTipContainerView>
        <CustomTextInput
          {...remainingProps}
          errorColor={errorColor}
          iconColor={iconColor}
          fontName={fontName}
          textColor={textColor}
        />
        <CardContainerView>
          <View style={[styles.LeftContainer, subContentStyle]}>
            {aadharConsent && (
              <View style={styles.consentTxtContainer}>
                <Text style={styles.consentTextStyle}>{commonLabel.AADHAR_CONSENT}</Text>
              </View>
            )}
            {linkTextShow && (
              <View>
                <LeftContentText>{subContent}</LeftContentText>
                <If condition={isTimerRunning}>
                  <View style={[CommonStyle.customLinkContainer, styles.timmerContainer]}>
                    <Text style={[CommonStyle.countDownText]}>
                      Time Left{' '}
                      <Text style={CommonStyle.countDownContainer}> 00 : {counter < 10 ? `0${counter}` : counter}</Text>
                    </Text>
                  </View>
                </If>
                <CustomTextLink
                  text={linkText}
                  alignText={commonLabel.LEFT}
                  handleLink={() => {
                    if (setTimer) {
                      setTimerRunning(!isTimerRunning);
                      timerStart();
                      handleLink();
                    } else {
                      handleLink();
                    }
                  }}
                  disabledValue={isTimerRunning}
                />
              </View>
            )}
            {otpConsent && (
              <View style={styles.otpConsentContainer}>
                <Text style={styles.consentTextStyle}>{commonLabel.AADHAR_CONSENT}</Text>
              </View>
            )}
          </View>
          <ArrowWrapper
            handleNext={handleNext}
            isActive={isActive}
            aadharConsent={aadharConsent}
            arrowIcon={nextAction}
          />
        </CardContainerView>
      </CardView>
    </View>
  );
};

const HeaderText = styled(Text)`
  margin-left: ${isIOS ? '-5px' : '0px'};
  margin-bottom: ${isIOS ? '7px' : '0px'};
`;

const LeftContentText = styled(Text)`
  font-size: 9px;
  color: ${Colors.DARK};
  opacity: 0.4;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  margin-bottom: 0px;
  margin-vertical: 10px;
`;
const CardContainerView = styled(View)`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 25px;
  padding-bottom: 16px;
`;
const ToolTipContainerView = styled(View)`
  padding-left: 5px;
  color: ${Colors.MAROON};
  top: 0px;
  flex-direction: row;
`;

export default React.memo(CustomCardInput);
