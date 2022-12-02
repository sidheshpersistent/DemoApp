import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Colors, FontFamily, Font_Size, Line_Height } from "../../../../Utils";
export const CardImageTitle = styled.View`
  flex-direction: row;
`;

export const BackgroundImageStyle = styled(ImageBackground)`
  margin-top: 32px;
  padding: 20px 24px 24px 24px;
`;

export const MarginTopBox = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const RowBox = styled.View`
  flex: 1;
  flex-direction: row;
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
  margin-top: 32px;
  margin-bottom: 32px
  align-self: center;
  width: 120%;
  background-color: ${Colors.NEW_GREY_800.code};
  opacity: 0.32;
`;

export const CardImageStyle = styled.Image`
  width: 135px;
  height: 100px;
`;

export const CardTitleSubTitleBox = styled.View`
  margin-left: 25px;
  margin-top: 10px;
`;

export const CardContainer = styled.View`
  width: 85%;
  align-self: center;
`;

export const CardSubtitleContainer = styled.View`
  flex-direction: row;
`;

export const AnnualPercent = styled.View`
  margin-left: 20%;
`;

export const OfferContainer = styled.View`
  margin-top: 25px;
`;

export const AddressContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioContainer = styled.View`
  padding-left: 16px;
  width: 45%;
  border-radius: 8px;
  height: 64px;
  background-color: ${Colors.WHITE};
`;
export const InfoBox = styled.View`
  border-radius: 10px;
  width: 100%;
  height: 104px;
  background-color: ${Colors.NEW_GREY_800.code};
`;
export const RelationSelection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const orBackground = {
  backgroundColor: Colors.WHITE,
  margin: 16,
  justifyContent: 'center',
  alignItems: 'center',
  height: 30,
  width: 30,
  borderRadius: 15
};

export const FullLengthBox = styled.View`
  width: 100%;
  background-color: ${Colors.WHITE};
  margin-bottom: 32px;
  margin-top: 32px;
  padding: 16px;
  padding-left: 64px;
  padding-right: 64px;
`;

export const CheckboxView = styled.View`
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ClickableTextStyle = {
  fontSize: Font_Size.SIZE_14,
  fontFamily: FontFamily.Inter_SemiBold,
  lineHeight: Line_Height.HEIGHT_22,
  color: Colors.MAROON,
};

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
    backgroundColor: Colors.PROD_TWILIGHT_300.code
  },
  optionsWrapper: {
    backgroundColor: Colors.PROD_TWILIGHT_300.code
  },
  optionWrapper: {
    margin: 5,
    backgroundColor: Colors.PROD_TWILIGHT_300.code
  },
  optionTouchable: {
    activeOpacity: 70,
    backgroundColor: Colors.PROD_TWILIGHT_300.code
  },
  optionText: {
    color: Colors.WHITE,
    fontSize: Font_Size.SIZE_12,
    fontWeight: 'bold',
    backgroundColor: Colors.PROD_TWILIGHT_300.code
  },
};

export const PasswordView = styled.View`
  margin-top: 32px;
`;