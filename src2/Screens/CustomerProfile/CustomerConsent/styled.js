
import styled from "styled-components/native";
import { Colors, FontFamily, Font_Size, Line_Height } from "../../../Utils";


export const RightArrowImage = {
    width: 40,
    height: 40,
};

export const BackArrowButton = styled.TouchableOpacity`
    border-radius: 40px;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
`;

export const RightArrowButtonActive = styled.TouchableOpacity`
    border-radius: 40px;
    width: 80px;
    height: 80px;
    background-color: ${Colors.ERROR};
    align-items: center;
    justify-content: center;
`;

export const RightArrowButton = styled.View`
    border-radius: 40px;
    width: 80px;
    height: 80px;
    background-color: ${Colors.NEW_GREY_300.code};
    align-items: center;
    justify-content: center;
`;

export const FullLengthBox = styled.View`
    width: 100%;
    background-color: ${Colors.WHITE};
    margin-bottom: 32px;
`;

export const uploadIconStyle = {
    width: 24,
    height: 24,
    marginRight: 2,
};

export const recaptureIconStyle = {
    width: 20,
    height: 14,
    paddingRight: 4,
};

export const uploadSignatureText = {
    color: Colors.ERROR,
    fontSize: Font_Size.SIZE_14,
    fontFamily: FontFamily.Inter_SemiBold,
    lineHeight: Line_Height.HEIGHT_20,
};

export const AlignedContainer = styled.View`
    width: 70%;
    align-self: center;
`;

export const CardMargin = styled.View`
    margin-bottom: 20px;
`;

export const ComponentContainer = styled.View`
    flex-direction: row;
`;

export const CheckboxView = styled.View`
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const uploadImageCard = {
    elevation: 4,
    backgroundColor: Colors.NEW_GREY_300.code,
    alignItems: "center",
    paddingVertical: 36,
};

export const ClickableTextStyle = {
    fontSize: Font_Size.SIZE_14,
    fontFamily: FontFamily.Inter_SemiBold,
    lineHeight: Line_Height.HEIGHT_22,
    color: Colors.MAROON,
};

export const cardView = {
    elevation: 4,
    backgroundColor: Colors.NEW_GREY_300.code,
    alignItems: "center",
    paddingVertical: 36,
};

export const emptyCardView = {
    elevation: 4,
    alignItems: "center",
};

export const flexView = {
    flexDirection: "row",
    justifyContent: "space-between"
};

export const rowView = {
    flexDirection: "row",
    justifyContent: "space-between"
};

export const rowCard = {
    flexDirection: "row"
};

export const imageSize = {
    height: 93,
    width: 384
};

export const BackForwardContainer = {
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 38,
    flexDirection: "row",
};

