import React from "react";
import { ScrollView } from "react-native";
import CreditCard from "../CreditCard";
import Hospicash from "../Hospicash";
import { ContentContainer } from "./styled";

const Form = ({ response }) => {
  
  const FormSelector = () => {
    if (response.cardFlag == "CreditCard") {
      return (
        <CreditCard response={response} />
      );
    }
    if (response.cardFlag == "Hospicash") {
      return (
        <Hospicash response={response} />
      );
    }

  };

  return (
    <ContentContainer>
      <ScrollView
        style={{ flex: 1, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
      {FormSelector()}
      </ScrollView>
    </ContentContainer>
  );
};

export default Form;

