import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { FontFamily } from "../../../../Utils";

export const BackgroundImageStyle = styled(ImageBackground)`
  margin-top: 32px;
  padding: 20px 24px 24px 24px;
`;
export const MarginTopBox = styled.View`
  margin-top: 16px;
  flex: 1;
`;

export const AlignedContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
  width: 70%;
  align-self: center;
  flex: 1;
`;
export const BorderLine = styled.View`
  height: 2px;
  margin-top: 16px;
  align-self: center;
  width: 85%;
  background-color: lightgrey;
`;
export const WhiteBox = styled.View`
  background-color: white;
  flex: 1;
  width: 100%;

  margin-top: 16px;
`;
export const CardContainer = styled.View`
  width: 85%;
  align-self: center;
`;
export const OfferBoxContainer = styled.View`
  margin-top: 25px;
`;
export const OfferBox = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
`;
export const OfferImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;
export const OfferText = styled.View`
  width: 400px;
`;
export const checkboxStyle = {
  width: "90%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};
export const checkboxLabelStyle = {
  fontSize: 14,
  marginLeft: 10,
  fontFamily: FontFamily.Inter_REGULAR,
};