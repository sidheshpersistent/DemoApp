import styled from "styled-components/native";
import { UpperBoxContainer } from "../../../Components";
import { Colors, FontFamily } from "../../../Utils";


export const HeaderContainer = styled(UpperBoxContainer)`
  padding: 12px 15px 20px 12px;
`;

export const AlignedContainer = styled.View`
  margin: 32px;
`;

export const BottomContainer = styled.View`
margin:0px 30px 10px 30px;
  flex-direction: row;
  justify-content:space-between
`;

export const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-horizontal: 16px;
`;

export const IconClose = styled.Image`
  width: 24px;
  height: 24px;
`;
export const SaveAndExit = styled.Text`
  font-family: ${FontFamily.Inter_SemiBold};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: ${Colors.ERROR};
`;

export const MarginTopBox = styled.View`
  margin-top: 16px;
`;

export const MarginBox = styled.View`
  margin-right: 15px;
  margin-left: 32px
`;

export const TitleContainer = styled.View`
  justify-content: space-between ;
  margin-top: 12px;
`;

export const WebViewContainer = styled.View`
  flex: 1;
`;

export const CongratsTextStyle = {
  width: 300,
  fontSize: 20,
  fontFamily: FontFamily.Inter_SemiBold,
  lineHeight: 26,
  color: Colors.NEW_GREY_800.code,
  letterSpacing: -0.5,
};

export const SubTitleTextStyle = {
  fontSize: 14,
  fontFamily: FontFamily.Inter_REGULAR,
  lineHeight: 26,
  marginTop: 8,
  color: Colors.NEW_GREY_600.code,
  letterSpacing: -0.5,
};

export const webViewStyle = styled.View`
  flex: 1,
  padding-vertical: 32
`;

export const infoIconStyle = {
  width: 20,
  height: 20,
  marginRight: 20,
};

export const ComponentContainer = styled.View`
  flex-direction: row;
`;

export const RadioContainer = styled.View`
  padding-left: 8px;
  border-radius: 8px;
`;

export const RadioSubContainer = styled.View`
  border-radius: 8px;
`;

export const MarginTopBoxRadio = styled.View`
  padding-left: 40px;
  border-radius: 8px;
`;
export const MarginBoxSelect = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const AlignedContainerScroll = {
  margin: 32
};