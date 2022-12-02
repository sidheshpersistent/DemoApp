

import styled from "styled-components/native";
import { UpperBoxContainer } from "../../Components";
import { Colors, FontFamily } from "../../Utils";

export const Container = styled.View`
    flex: 1 ;
    background-color: ${Colors.LIGHT_GREY}
`;

export const CloseAndSave = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-horizontal: 16px;
`;

export const IconBack = styled.Image`
    width: 28px;
    height: 28px;
`;

export const SaveAndExit = styled.Text`
    font-family: ${FontFamily.Inter_SemiBold};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
    color: ${Colors.ERROR};
`;

export const ButtonText = {
    fontWeight: "600",
    width: 174,
    height: 24,
    fontSize: 17,
    alignSelf: "center",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -0.6,
    textAlign: "center",
    color: Colors.WHITE,
};
export const Button = {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 56,
    borderRadius: 27,
    backgroundColor: Colors.ERROR,
};

export const HeaderTextStyle = {
    fontSize: 20,
    fontFamily: FontFamily.Inter_SemiBold,
    lineHeight: 26,
    color: Colors.NEW_GREY_800.code,
    letterSpacing: -0.5,
    marginTop: 12,
};
export const HeaderContainer = styled(UpperBoxContainer)`
    padding: 12px 15px 26px 12px;
    margin-bottom: 38px;
`;

export const CongratsTextContainer = styled.View`
    justify-content: center;
    align-items: flex-start ;
    margin-left: 57 ;
    margin-right: 152
`;

export const ComponentContainer = styled.View`
    flex-direction: row;
`;


export const RadioContainer = styled.View`
    padding-left: 16px;
    width: 45%;
    border-radius: 8px;
    height: 64px;
    background-color: ${Colors.WHITE};
`;

export const dropdownTextStyle = {
    fontSize: 14,
    fontFamily: FontFamily.Inter_SemiBold,
    lineHeight: 14,
    color: Colors.GRAY,
    letterSpacing: -0.5,
    marginTop: 6,
};

export const emptyListTextStyle = {
    fontSize: 22,
    fontFamily: FontFamily.Inter_SemiBold,
    lineHeight: 22,
    color: Colors.GRAY,
    letterSpacing: -0.5,
    marginTop: 6,
};

export const emptyListViewStyle = {
    flex: 1,
    marginTop: 180,
    justifyContent: "center",
    alignItems: "center",
};

export const searchBoxStyle = {
    marginHorizontal: 24,
    marginTop: 0,
    marginBottom:18,
};

export const lableStyle = {
    color: Colors.NEW_GREY_800.code,
    fontFamily: FontFamily.INTER_BOLD,
    letterSpacing:-0.5,
    opacity: 0.32,
};

export const lableErrorStyle = {
    color: Colors.ERROR,
    opacity: 1,
};

export const inputBorderStyle = {
    borderBottomColor: Colors.NEW_GREY_300.code,
    opacity: 1,
};

export const inputBorderErrorStyle = {
    borderBottomColor: Colors.ERROR,
    opacity: 1,
};

export const textInputPropsStyle = {
    color: Colors.NEW_GREY_800.code,
    fontFamily:FontFamily.Inter_SemiBold,
    fontSize:24,
    letterSpacing:-0.1,
    lineHeight:28,
};

export const iconButtonStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
};

export const radioGroupStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
};

export const selectBoxStyle = {
    flex: 1,
    marginVertical: 16
};

export const selectTextStyle = {
    paddingVertical: 20,
    paddingHorizontal: 10
};

export const emptyBox = {
    flex: 1
};