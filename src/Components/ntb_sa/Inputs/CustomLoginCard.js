/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { Colors, CommonStyle } from 'styles';
import commonLabel from 'translations/ntb_sa/common';
import { LeftContentText, CardContainerView, Container } from './input.style';
import CustomTextInput from './CustomTextInput';
import CustomTextLink from '../common/CustomTextLink';
import CardView from '../common/CardView';
import CustomButton from '../Button/CustomButton/CustomButton';

const CustomLoginCard = props => {
  const {
    textColor = Colors.MAROON,
    fontName,
    iconColor,
    errorColor = Colors.DARK,
    isActive,
    subContent,
    subContentStyle,
    linkText,
    handleLink,
    handleNext,
    showBottomView,
    nextAction,
    ...remainingProps
  } = props;

  const LeftContainer = {
    flex: 1,
    justifyContent: 'space-between',
  };

  return (
    <Container>
      <CardView style={CommonStyle.customCardInputStyle}>
        <CustomTextInput
          {...remainingProps}
          errorColor={errorColor}
          iconColor={iconColor}
          fontName=""
          textColor={textColor}
        />
        <If condition={!showBottomView}>
          <CardContainerView>
            <View style={[LeftContainer, subContentStyle]}>
              <View>
                <LeftContentText>{subContent}</LeftContentText>
                <CustomTextLink
                  text={linkText}
                  alignText={commonLabel.LEFT}
                  handleLink={() => {
                    handleLink();
                  }}
                />
              </View>
            </View>
            <CustomButton
              bgColor={Colors.MAROON}
              textColor={Colors.WHITE}
              text={commonLabel.REQUEST_OTP}
              disabled={!isActive}
              disabledColor={Colors.LIGHT_GREY}
              onPress={handleNext}
            />
          </CardContainerView>
        </If>
      </CardView>
    </Container>
  );
};

export default React.memo(CustomLoginCard);
