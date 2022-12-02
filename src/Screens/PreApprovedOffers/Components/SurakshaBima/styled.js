import styled from "styled-components/native";
import { Colors } from "../../../../Utils";


export const BoxContainer = styled.View`
  padding: 25px;
`;
export const ImageTextContainer = styled.View`
  flex-direction: row;
  //justify-content: space-between;
`;
export const ImageContainer = styled.View`
  
  align-items: center;
`;
export const CardImageStyle = styled.Image`
height: 125px;
width: 85px;
`;
export const TitleContainer = styled.View`
  
  margin-left:20px;
  width:70%
  
`;
export const ApplicationStatusContainer = styled.View`
  paddingleft: 25px;
  paddingright: 25px;
`;

export const IntroContainer = styled.View`
width: 90%
`;

export const ButtonContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  width: 65%;
  flex-direction: row;
  
`;
export const ButtonKM = {
 marginRight:15,
  alignItems: "center",
  justifyContent: "center",
  width: 99,
  height: 36,
  borderRadius: 27,
  borderWidth: 0.8,
  borderColor: Colors.MAROON,
};


export const ButtonKMText = {
  fontFamily: "Inter-SemiBold",
  fontSize: 12,
  lineHeight: 18,
  letterSpacing: 0,
  textAlign: "center",
  color: Colors.MAROON,
};
export const CardContainer = {
  flex: 1,
  margin: 8,
  borderWidth: 0,
  marginHorizontal: 57,
};

