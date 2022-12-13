import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { CenteredView, ModalView } from "../PopupStyle";
// import CustomBlurView from "../CustomBlurView";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
} from "../../../Utils";
import CustomText from "../../CustomText/CustomText";
import CustomButton from "../../CustomButton/CustomButton";
import { TestIds, CommonConstant, Account_Type } from "../../../Utils/Constants";
import { starDisable, starEnable } from "../../../Assets/Images";
import {
  ModalContainer,
  ModalContainerView,
  StarIcon,
  CustomeButtonStyle,
  StarIconContainer,
  StartIconContainerView,
} from "./styled.js";
import { Endpoints, NetworkManager } from "../../../API";
import useSession from '../../../App/useSession';
import { clonedFeedbackData } from './constants'
const PopupFeedback = (props) => {
  const {
    isVisible,
    Heading,
    ButtonText,
    buttonPress,
    animationIn,
    testID_submit,
  } = props;
  const { session } = useSession();
  const [feedbackData, setFeedbackData] = useState(clonedFeedbackData());
  const [isEnableSubmit, setIsEnableSubmit] = useState(true);
  const [selectedRating, setSelectedRating] = useState(0);

  const arrangeFeedbackData = (item) => {
    setSelectedRating(item.id + 1); //item.id+ 1 is actual count of stars when user selects star for feedback
    setIsEnableSubmit(false);
    let selectedData = feedbackData.map((ele, index) => {
      if (index <= item.id) {
        ele.isSelected = true;
      } else {
        ele.isSelected = false;
      }
      return ele;
    });

    setFeedbackData(selectedData);
  };

  const saveFeedBackData =(selectedRating)=>{
    let request = {
      userId:session.agentDetails.userId,
      userFeedback:selectedRating,
    };
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkPut(
      Endpoints.saveFeedback,
      request,
      header,
      (response) => {
        if (response.status === CommonConstant.SUCCESS) {
         buttonPress()
        } else if (response.status === CommonConstant.ERROR) {
          buttonPress()
        }
      }
    );
  }

  return (
    <CenteredView>
      <Modal
        animationIn={animationIn}
        isVisible={isVisible}
        // customBackdrop={<CustomBlurView />}
      >
        <CenteredView>
          <ModalView>
            <View style={ModalContainer}>
              <View style={ModalContainerView}>
                <View>
                  <CustomText
                    testID={TestIds.pec_heading}
                    fontFamily={FontFamily.INTER_BOLD}
                    fontSize={Font_Size.SIZE_20}
                    lineHeight={Line_Height.HEIGHT_26}
                    letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                    color={Colors.NEW_GREY_800.text}
                  >
                    {Heading}
                  </CustomText>
                </View>
                <View style={StarIconContainer}>
                  <View style={StartIconContainerView}>
                    {feedbackData && feedbackData.map((item,index) => {
                      return (
                        <TouchableOpacity
                        testID={'test'+index}
                          onPress={() => arrangeFeedbackData(item)}
                          key={item.id}
                        >
                          {item.isSelected ? (
                            <Image style={StarIcon} source={starEnable}></Image>
                          ) : (
                            <Image
                              style={StarIcon}
                              source={starDisable}
                            ></Image>
                          )}
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
            {/** TODO: this button may required to delete after getting ccl library */}
            <CustomButton
              testID={testID_submit}
              style={CustomeButtonStyle}
              buttonType="primary"
              width="50%"
              title={ButtonText}
              disabled={isEnableSubmit}
              buttonPress={() =>{
                saveFeedBackData(selectedRating);
              } }
            />
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};

export default PopupFeedback;
