import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  Container,
  CustomerDetailsBG,
  HeadingText,
  CardInnerContainer,
  FormFieldText,
} from './CustomerDetailsStyle';
import {CUSTOMERDETAILS} from '../../constants/constants';
import Card from '../../components/CardView';
// import {CustomTextInput} from '../../components/ntb_sa/Inputs/CustomTextInput';
const CustomerDetails = props => {
  return (
    <Container>
      <CustomerDetailsBG>
        <HeadingText>{CUSTOMERDETAILS.CID_FORM_HEADING}</HeadingText>
        <Card>
          <CardInnerContainer>
            <FormFieldText>
              {CUSTOMERDETAILS.CID_LABEL_CUSTOMER_DETAILS}
            </FormFieldText>

            {/* <CustomTextInput
              value={'123'}
              isActive={true}
              placeholder={'fsfsdfsff'}
              onChangeText={() => {}}
              onKeyPress={() => {}}
            /> */}
            {/* <FormFieldText>
              {CUSTOMERDETAILS.CID_LABEL_CUSTOMER_DETAILS}
            </FormFieldText> */}
          </CardInnerContainer>
        </Card>
      </CustomerDetailsBG>
    </Container>
  );
};

export default CustomerDetails;
