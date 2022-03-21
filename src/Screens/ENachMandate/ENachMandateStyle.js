import styled from 'styled-components/native';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';

// export const ENachMandateStyle={
  
// }

export const Container = styled.View`
  flex: 1;
`;
export const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
export const IconClose = styled.Image`
  width: 24px;
  height: 24px;
`;
export const HeaderContainer = styled(UpperBoxContainer)`
  height: 158px;
  padding: 12px 15px 16px 12px;
  margin-bottom: 38px;
`;
export const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 5px;
`;
export const SaveAndExit = styled.Text`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: right;
  color: #9b1e26;
`;
export const LowerConatainer = styled.View`
  background-color: #f6f6f6;
  flex: 1;
`;
export const HeadingText = styled.Text`
  font-size: 22px;
  color: #25243b;
  font-weight: bold;
`;
export const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export const CardPadding = styled.View`
  padding: 10px;
`;
export const LabelText = styled.Text`
  font-size: 16px;
  color: #25243b;
  margin-bottom: 25px;
`;
export const Label = styled.Text`
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
  margin-right: 10px;
`;
export const ToogleRadioText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  color: #25243b;
`;
export const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;
export const CheckBoxText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: #25243b;
`;
export const checkBoxStyle = {
  width: 24,
  height: 24,
  marginRight: 12,
};
export const RightArrowButtonActive = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #9b1e26;
  align-items: center;
  justify-content: center;
`;
export const RightArrowButton = styled.View`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #e9e9e9;
  align-items: center;
  justify-content: center;
`;
export const RightArrowImage = {
  width: 40,
  height: 40,
};
export const infoIconStyle = {
  width: 20,
  height: 20,
  marginRight: 20,
};
export const LableContainer = styled.View`
  flex-direction: row;
  align-item: center;
`;
export const RedText = styled.Text`
  color: #9b1e26;
  font-weight: bold;
`;
export const BlackBoxContainer = styled.View`
  flex-direction: row;
  align-item: center;
`;
export const BlackBoxText = styled.Text`
  color: #f6f6f6;
  font-size: 16px;
  flex-shrink: 1;
`;
export const whiteInfoIconStyle = {
  width: 26,
  height: 26,
  marginTop: 10,
  marginRight: 10,
};
