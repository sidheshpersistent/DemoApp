import styled from "styled-components/native";
import { Colors } from "../../../../Utils";


export const BoxContainer = styled.View`
  padding: 16px 16px 16px 20px;
`;
export const ButtomBoxContainer = styled.View`
  padding: 12px 16px 12px 20px;
`;
export const Underline = styled.View`
  background-color: "#000000";
  height: 5px;
  margin-vertical: 10px;
`;
export const ImageTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ImageContainer = styled.View`
  justify-content: center;
`;
export const TitleContainer = styled.View`
  flex: 3;
  padding-left:16px;
  justify-content: center;
`;
export const DateContainer = styled.View`
  width:80px;
  justify-content:center;
`;
export const CardImageStyle = styled.Image`
  height: 40px;
  width: 40px;
`;
export const ApplicationStatusContainer = styled.View`
  paddingleft: 25px;
  paddingright: 25px;
`;
export const Container1Below = styled.View`
  flex: 2;
  justify-content: center;
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
  flex: 2;
  justify-content: center;
`;
export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  padding-vertical: 36px;
`;
export const ContainerCustomerId = styled.View`
  flex: 1;
  justify-content: center;
  padding-vertical: 8px;
`;
export const Container3Below = styled.View`
  justify-content: center;
`;
export const Red_Button = styled.View`
height: 48;
width: 48;
border-radius: 25px;
justify-content: center;
align-items: center;
background-color: ${Colors.ERROR}
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
    props.flag == "wealth" ? "#323250" : "#a72339"};
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
  borderColor: "#c9c9c9",
};

export const ButtonKMText = {
  fontFamily: "Inter-SemiBold",
  fontSize: 12,
  lineHeight: 18,
  letterSpacing: 0,
  textAlign: "center",
  color: "#ffffff",
};
export const CardContainer = {
  flex: 1,
  marginHorizontal: 24,
  borderWidth: 0,
  marginVertical: 8,
};
export const BoxContainView = {
  borderBottomColor: '#25243b',
  borderBottomWidth: 0.6,
  marginHorizontal: 24,
  opacity:0.2
}
