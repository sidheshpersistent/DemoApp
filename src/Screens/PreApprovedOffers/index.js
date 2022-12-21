/* eslint-disable no-unused-vars */
// import { Icon } from "@idfc/ccl-mobile";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import useSession from "../../App/useSession";

import { iconClose } from "../../Assets/Images";
import { CustomText, Popup } from "../../Components";
import PopupFeedback from "../../Components/Popup/PopupFeedback";
import { StringsOfLanguages } from "../../Localization";
import {
  FontFamily,
  Font_Size,
  Icon_Size,
  LetterSpacing,
  Line_Height,
  NavigationUrl,
} from "../../Utils";
import { PREAPPROVED_FLAG_TYPE } from "../../Utils/Constants";
import Item from "./Components/PreApprovedItem";
import { Preapproved_api_Data } from "./constants";
import {
  ButtonText,
  HeaderContainer,
  CloseAndSave,
  IconClose,
  SaveAndExit,
  Button,
  CongratsTextStyle,
  Container,
  CongratsTextContainer,
} from "./styled";

const PreApprovedOffers = (props) => {
  const navigation = useNavigation();
  const [optionsList, setOptionsList] = useState(Preapproved_api_Data);
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [submittedPopup, setSubmittedPopup] = useState(false);
  const { session } = useSession();

  useEffect(() => {
    if (props.route.params?.isApplied) {
      setSubmittedPopup(true);
    }
    clickFunc();
  }, [session]);

  function clickFunc() {
    console.log(session.availedCardFlag);
    let newList = optionsList.map((element) =>
      element.flag == session.availedCardFlag
        ? { ...element, isOfferAvailed: true }
        : element
    );
    setOptionsList(newList);
  }

  const renderItem = ({ item, index }) => <Item item={item} index={index} />;

  return (
    <Container>
      <HeaderContainer>
        <CloseAndSave>
          <SaveAndExit
            onPress={() => {
              setFeedbackPopup(true);
            }}
          >
            {StringsOfLanguages.COMMON.EXIT}
          </SaveAndExit>
        </CloseAndSave>
        <CongratsTextContainer>
          <Text style={CongratsTextStyle}>
            {StringsOfLanguages.PREAPPROVEDOFFERS.PAO_INTRO}
          </Text>
        </CongratsTextContainer>
      </HeaderContainer>
      <ScrollView>
        <View>
          <FlatList
            data={optionsList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/*** change : below to change useNavigation*/}
        <TouchableOpacity
          onPress={() => {
            setFeedbackPopup(true);
          }}
          style={Button}
        >
          <Text style={ButtonText}>
            {StringsOfLanguages.PREAPPROVEDOFFERS.PAO_NAVIGATE_BUTTON_TEXT}
          </Text>
        </TouchableOpacity>
        {
          <PopupFeedback
            animationIn="bounceIn"
            isVisible={false}
            Heading={
             StringsOfLanguages.PREAPPROVEDOFFERS.PLEASE_PROVIDE
            }
            ButtonText="Okay"
            buttonPress={() => {
              setFeedbackPopup(false);
              navigation.navigate(NavigationUrl.drawerId, {
                screen: NavigationUrl.dashboardId,
              });
            }}
          />
        }

        <Popup
          isVisible={submittedPopup}
          // icon={<Icon name={"VerifiedThumbsup"} size={60} isPreComposedIcon />}
          Heading={StringsOfLanguages.PREAPPROVEDOFFERS.APPLICATION_SUBMIT}
          component={
            <View style={{ marginBottom: 15 }}>
              <CustomText
                fontFamily={FontFamily.Inter_REGULAR}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_24}
              >
                
                {StringsOfLanguages.PREAPPROVEDOFFERS.THANK_YOU}
                <CustomText
                fontFamily={FontFamily.Inter_REGULAR}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_24}
                >
                  {
                    session.availedCardFlag==PREAPPROVED_FLAG_TYPE.HOSPICASH?
                    "ABC Hospicash. "
                    :
                    "ABC Credit Card. "
                  }
                
                </CustomText>

                {StringsOfLanguages.PREAPPROVEDOFFERS.YOUR_APPLICATION}
              </CustomText>
            </View>
          }
          ButtonText={StringsOfLanguages.PREAPPROVEDOFFERS.OKAY}
          buttonPress={() => setSubmittedPopup(false)}
          animationIn={"bounce"}
        />
      </ScrollView>
    </Container>
  );
};

export default PreApprovedOffers;
