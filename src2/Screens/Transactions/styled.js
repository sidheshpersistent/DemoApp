import styled from "styled-components/native";
import { UpperBoxContainer } from "../../Components";
import { Colors, FontFamily } from "../../Utils";


export const HeaderContainer = styled(UpperBoxContainer)`
  flex:1.5;
  padding: 12px 15px 5px 12px;
`;

export const AlignedContainer = styled.View`
  flex: 7.5;
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
  margin-bottom: 14px;
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
  flex-direction: row ;
  justify-content: space-between ;
  margin-top: 10px;
`;

export const WebViewContainer = styled.View`
  flex: 1;
`;
export const AdharTooltipHindden = styled.TouchableOpacity`
  left:16px;
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
  color: Colors.NEW_GREY_800.code,
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

export const PasswordIconStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}