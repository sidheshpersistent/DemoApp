import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  Container,
  CustomerDetailsBG,
  HeadingText,
  CardInnerContainer,
  FormFieldText,
} from './CustomerDetailsStyle1';
import {CUSTOMERDETAILS} from '../../constants/constants';
import Card from '../../components/CardView';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';
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

            <AutoCompleteTextInput
              testID={'123'}
              name={'name'}
              invalid={false}
              maxLength={40}
              isRightImage={true}
              // errorMessage={errors?.cityBal?.message}
              // data={businessCities}
              value={'Indian Army - Defense'}
              // onChangeText={text => {
              //   onChange(text);
              //   debounceOnChange(text);
              // }}
              placeholder={'Company Name'}
              // onSelectListItem={item => onSelectCity(item, onChange)}
            />

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
