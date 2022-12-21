import styled from 'styled-components/native';
import { Colors, FontFamily } from '../../Utils';

export const Container = styled.View`
 flex:1
  background-color: #fff;
`;
export const CustomerDetailsBG = styled.View`
  flex: 1;
  padding: 0px 70px 140px 70px;
`;
// export const HeadingText = styled.Text`
//   margin: 50px 0px 20px 0px;
//   font-size: 28px;
//   line-height: 36px;
//   letter-spacing: -1px;
//   color: #fff;
// `;
export const BoldText = styled.Text`
  font-weight: bold;
`;
export const FormFieldText = styled.Text`
  margin: 0px 0px 20px 0px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.5px;
  color: #25243b;
`;
export const CardInnerContainer = styled.View`
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 8px;
`;
export const InputPlaceHolderText = styled.Text`
  margin: 15px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.5px;
  color: #25243b;
`;
export const FooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  //justify-content: space-between;
  margin-vertical: 20px;
  ${'' /* padding:10px; */}
`;

export const Bullet = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #25243b;
`;

export const RightArrowButton = styled.View`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #e9e9e9;
  align-items: center;
  justify-content: center;
  margin-left: 36px;
`;
export const RightArrowButtonActive = styled.View`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #50bfbf;
  align-items: center;
  justify-content: center;
`;
export const RightArrow = styled.View`
  width: 80px;
  height: 80px;
`;
export const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export const CardPadding = styled.View`
  padding: 10px;
`;
export const RightArrowImage = {
  width: 40,
  height: 40,
};
export const touchableStyle = {
  marginLeft: 36,
};
export const BackArrowView = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const InfoIconContainer = styled.View`
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
export const infoIconStyle = {
  width: 20,
  height: 20,
  marginRight: 20,
};
export const infoIconView = {
  flex: 1,
  alignItems: 'flex-end',
};
export const CIDInput = styled.TextInput`
  background-color: white;
  height: 62px;
  margin-vertical: 20px;
  border-radius: 8px;
  font-size: 16px;
`;
export const MarginBottom = styled.View`
  margin-bottom: 20px;
`;
export const AdharTooltip = styled.TouchableOpacity`
  right: 0px;
  top: -8px;
  position: absolute;
`;
export const AdharTooltipHindden = styled.TouchableOpacity`
  left: 16px;
`;
export const EyeButton = styled.TouchableOpacity`
  margin-left: 8px;
  margin-right: 8px;
`;
export const PasswordView = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
`;
export const selectStyle = {
  height: 70,
};

export const dropdownTextStyle = {
  fontSize: 14,
  fontFamily: FontFamily.Inter_SemiBold,
  lineHeight: 14,
  color: Colors.GRAY,
  letterSpacing: -0.5,
  marginTop: 6,
};
