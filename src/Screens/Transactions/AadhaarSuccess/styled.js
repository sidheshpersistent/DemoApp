

import styled from "styled-components/native";
import { UpperBoxContainer } from "../../../Components";
import { Colors, FontFamily, Font_Size } from "../../../Utils";

export const Container = styled.View`
    flex: 1 ;
    background-color: ${Colors.NEW_GREY_100.code}
`;

export const CloseAndSave = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-horizontal: 16px;
`;
export const IconClose = styled.Image`
  width: 24px;
  height: 24px;
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
    color:${Colors.WHITE};
`;

export const ButtonText = {
  fontWeight: "bold",
  fontFamily: "Inter",
  fontSize: 20,
  alignSelf: "center",
  fontStyle: "normal",
  lineHeight: 24,
  letterSpacing: -0.4,
  textAlign: "center",
  color: Colors.WHITE,
};
export const ButtonText_Disable = {
  color: Colors.MAROON
}
export const Button = {
  alignSelf: "center",
  marginTop: 20,
  marginBottom: 20,
  alignItems: "center",
  justifyContent: "center",
  width: 300,
  height: 60,
  borderRadius: 30,
  fontSize: 20,
  // backgroundColor: Colors.MAROON,
};
export const Button_Disable = {
  backgroundColor: Colors.NEW_GREY_300.code,
}

export const HeaderTextStyle = {
  fontSize: 22,
  fontFamily: FontFamily.Inter_SemiBold,
  lineHeight: 26,
  color: Colors.GRAY,
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

export const CardImageStyle = styled.Image`
    height: 34px;
    width: 70px;
    padding: 4px;
    background-color:${Colors.NEW_GREY_100.code}
`;

export const UnderLineItem = styled.View`
    background-color: ${Colors.NEW_GREY_100.code};
    width: 100%;
    height: 2px;
    margin-vertical: 8px;
`;


export const triggerStyles = {
  triggerText: {
    color: Colors.MAROON,
    fontSize: Font_Size.SIZE_28,
    fontWeight: 'bold'
  },
  triggerOuterWrapper: {
    padding: 5,
    flex: 1,
  },
  triggerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  triggerTouchable: {
    activeOpacity: 70,
    style: {
      flex: 1,
    },
  },
};

export const optionsStyles = {
  optionsContainer: {
    padding: 5,
  },
  optionsWrapper: {
  },
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: Colors.MAROON,
    fontSize: Font_Size.SIZE_14,
    fontWeight: 'bold'
  },
};

export const AccDetailsTextStyle = {
  fontFamily: 'Inter-Bold',
  color: Colors.NEW_GREY_600.code,
};

export const AccDetailsValueStyle = {
  fontFamily: 'Inter-SemiBold',
  color: Colors.NEW_GREY_800.code,
  fontWeight: 'bold',
};


export const AlignedContainer = styled.View`
  background-color: ${Colors.GRADIENT_NEON_500.text}
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const CardMargin = styled.View`
  margin-bottom: 20px;
`;

export const checkBoxStyle = {
  width: 24,
  height: 24,
  marginRight: 12,
};

export const confirmationStyle = {
  color: Colors.NEW_GREY_800.code,
  fontSize: 14,
  fontFamily: 'Inter',
  lineHeight: 20,
};


export const CongratsTextStyle = {
  fontSize: 24,
  fontFamily:FontFamily.Inter_Light,
  lineHeight: 32,
  color: Colors.WHITE,
  marginTop: 12,
};


export const deb1TextStyle = {
  fontFamily: 'Inter-Regular',
  color: Colors.NEW_GREY_600.code,
  fontSize: 12,
};


export const deb2TextStyle = {
  fontFamily: 'Inter-Regular',
  color: Colors.NEW_GREY_600.code,
  fontSize: 11,
  textAlign: 'left'
};

export const FullLengthBox = styled.View`
  width: 100%;
  background-color: ${Colors.WHITE}
  margin-bottom: 32px;
`;


export const Label = styled.Text`
  font-size: 14px;
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: ${Colors.NEW_GREY_600.code}
  margin-bottom: 16px;
`;

export const NameStyle = {
  fontSize: 24,
  fontFamily: 'Inter - Bold',
  lineHeight: 32,
  color: Colors.WHITE,
  fontWeight: 'bold',
  marginBottom: 4,
};

export const successStyle = {
  height: 63,
  width: 63,
};

export const successTextStyle = {
  fontSize: 16,
  fontFamily: FontFamily.Inter_Light,
  lineHeight: 20,
  color: Colors.WHITE
};

export const ToogleRadioText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  color: ${Colors.NEW_GREY_800.code}
`;

export const CardPadding = styled.View`
  padding: 10px;
`;

export const BGImgStyle = {
   borderBottomLeftRadius: 35, 
   borderBottomRightRadius: 35 
  }
export const ImgStyle = { 
  height: 282, 
  flex: 0, 
  zIndex: 1 
}
export const TopImgStyle = { 
  alignItems: "center", 
  justifyContent: "center" 
}