import styled from 'styled-components/native';
import { UpperBoxContainer } from "../../Components";
import { Colors, FontFamily } from "../../Utils";

export const CenteredView = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled(UpperBoxContainer)`
  padding: 12px 15px 20px 12px;
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

export const MarginBox = styled.View`
  margin-right: 15px;
  margin-left: 32px
`;



export const CongratsTextStyle = {
  width: 300,
  lineHeight:30
};

// export const SubTitleTextStyle = {
//   marginBottom:20
  
// };

export const WebViewContainer = styled.View`
  flex: 1;
`;

export const webViewStyle = styled.View`
  flex: 1;
  
  
`;