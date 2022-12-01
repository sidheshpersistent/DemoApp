import styled from "styled-components/native";
import { Colors } from "../../../Utils";


export const BoxContainer = styled.View`
  padding: 16px 16px 16px 20px;
`;
export const Underline = styled.View`
  background-color: ${Colors.BLACK};
  height: 5px;
  margin-vertical: 10px;
`;
export const ImageTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ImageContainer = styled.View`
  flex: 0.5;
  justify-content: center;
`;
export const TitleContainer = styled.View`
  flex: 3;
  justify-content: center;
  padding-left: 8px;
`;
export const DateContainer = styled.View`
width:80px;
justify-content:center;
`;
export const CardImageStyle = styled.Image`
  height: 28px;
  width: 28px;
`;
export const ApplicationStatusContainer = styled.View`
  paddingleft: 25px;
  paddingright: 25px;
`;
export const Container1Below = styled.View`
  flex: 3;
  background-color: ${Colors.LiteBlue};
  border-radius: 8px;
  margin-right: 8px;
  height:60
`;
export const ContainerProductName = styled.View`
  flex: 1;
  justify-content: center;
  padding-vertical: 8px;
`;
export const ContainerAccountNum = styled.View`
  flex: 1;
  justify-content: center;
  padding-vertical: 8px;
`;
export const Container2Below = styled.View`
  flex: 0.5;
  justify-content: center;
`;
export const ContainerEmpty = styled.View`
  flex: 0.5;
  justify-content: center;
  padding-vertical: 36px;
`;
export const ContainerCustomerId = styled.View`
  flex: 1;
  justify-content: center;
  padding-vertical: 8px;
`;
export const Container3Below = styled.View`
  flex: 0.5;
  justify-content: center;
`;
export const Red_Button = styled.View`
height: 50px;
width: 50px;
border-radius: 25px;
justify-content: center;
align-items: center;
background-color: ${Colors.MAROON}
`;

export const IconDelete = styled.Image`
  width: 24px;
  height: 24px;
`;

export const IntroContainer = styled.View`
width: 90%
`;
export const ApplicationBoxContainer = styled.View`
  flex: 1;
  border-radius: 5px;
  height: 78px;
  width: 100%;
  background-color: ${(props) =>
    props.flag == "wealth" ? `${Colors.darkBlue}` : `${Colors.darkRed}`};
  margin-top: 13px;
  margin-bottom: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  width: 65%;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonKM = {
  marginBottom: 20,
  alignItems: "center",
  justifyContent: "center",
  width: 99,
  height: 36,
  borderRadius: 27,
  borderWidth: 0.8,
  borderColor: `${Colors.lightGrey}`,
};

export const ButtonKMText = {
  fontFamily: "Inter-SemiBold",
  fontSize: 12,
  lineHeight: 18,
  letterSpacing: 0,
  textAlign: "center",
  color: `${Colors.WHITE}`,
};
export const CardContainer = {
  flex: 1,
  marginHorizontal: 24,
  borderWidth: 0,
  marginVertical: 8,
};

