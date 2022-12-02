import styled from "styled-components/native";
import UpperBoxContainer from "../../Components/UpperBoxContainer/UpperBoxContainer";

export const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
export const IconClose = styled.Image`
  width: 24px;
  height: 24px;
`;

export const HeaderContainer = styled(UpperBoxContainer)`
  height: 152px;
  padding: 12px 15px 26px 12px;
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
export const PleaseEnter = styled.Text`
  align-self:center
  margin-bottom: 40px;
  height: 26px;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;

export const NameAndAge = styled.Text`
  margin-right: 5px;
`;
export const CustomerName = styled.Text`
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: 26px;
  color: #25243b;
  margin-bottom: 5px;
`;
export const NameAndGender = styled.View`
  justify-content: center;
  margin-top: 3px;
  margin-left: 13px;
`;
export const ProgressHeaderContainer = styled.View`
  flex-direction: row ;
  justify-content: space-between 
`;
export const TimeLineContainer = styled.View`
  position: absolute;
  top: -35px;
  height: 100px;
  width: 100%;
  alignself: center;
`;
export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin-top: 80px;
  padding-top: 20px;
`;
export const header = { 
  elevation: 0, 
  paddingLeft: 20, 
  alignItems: "center" 
};

export const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};
