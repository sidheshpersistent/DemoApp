import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const CustomerDetailsBG = styled.View`
  flex: 1;
  background-color: #6c96c5;
  padding: 20px 40px 20px 40px;
`;
export const HeadingText = styled.Text`
  margin: 40px 0px 20px 0px;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1px;
  color: #fff;
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
  justify-content: center;
  ${'' /* padding:10px; */}
`;
export const FooterText = styled.Text`
  font-size: 12px;
  color: #686873;
  flex: 1;
`;
export const RightArrowButton = styled.View`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #e9e9e9;
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
export const BackArrowView = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;
