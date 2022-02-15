import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { CustomIcon } from 'components/ntb_sa';
import { Colors } from 'styles';
import { MainContainer, SubTitleTxt, ButtonWrapper } from './SubTitleText.style';

const SubTitleText = props => {
  const { subTitle, isSpannedText, onIconClicked, iconName, showIcon } = props;
  return (
    <View>
      <If condition={subTitle !== ''}>
        <MainContainer>
          <SubTitleTxt isSpannedTxt={isSpannedText}>{subTitle}</SubTitleTxt>
          <If condition={showIcon}>
            <ButtonWrapper onPress={onIconClicked}>
              <CustomIcon name={iconName} size={24} color={Colors.MAROON} />
            </ButtonWrapper>
          </If>
        </MainContainer>
      </If>
    </View>
  );
};

SubTitleText.propTypes = {
  subTitle: PropTypes.string,
  isSpannedText: PropTypes.bool,
  iconName: PropTypes.string,
  showIcon: PropTypes.bool,
};

SubTitleText.defaultProps = {
  subTitle: '',
  isSpannedText: false,
  iconName: '',
  showIcon: false,
};

export default SubTitleText;
