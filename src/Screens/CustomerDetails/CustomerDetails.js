import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  CustomerDetailsBG,
  HeadingText,
  CardInnerContainer,
  FormFieldText,
  FooterContainer,
  FooterText,
  RightArrowButton,
  CardMargin,
  CardPadding,
  RightArrowImage,
  BackArrowView,
} from './CustomerDetailsStyle';
import {CUSTOMERDETAILS} from '../../constants/constants';
import Card from '../../components/CardView';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
const CustomerDetails = props => {
  return (
    <Container>
      <CustomerDetailsBG>
        <BackArrowView>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackArrowView>
        <HeadingText>{CUSTOMERDETAILS.CID_FORM_HEADING}</HeadingText>
        <Card>
          <CardInnerContainer>
            <FormFieldText>
              {CUSTOMERDETAILS.CID_LABEL_CUSTOMER_DETAILS}
            </FormFieldText>
            <CardMargin>
              <Card>
                <CardPadding>
                  <AutoCompleteTextInput
                    testID={'123'}
                    name={CUSTOMERDETAILS.CID_FIELD_COMPANY}
                    invalid={false}
                    maxLength={40}
                    isRightImage={true}
                    rightImage={require('../../assets/icons_24_search.png')}
                    // errorMessage={errors?.cityBal?.message}
                    // data={businessCities}
                    value={'Indian Army - Defense'}
                    onChangeText={text => {
                      //   onChange(text);
                    }}
                    placeholder={CUSTOMERDETAILS.CID_FIELD_COMPANY}
                    // onSelectListItem={item => onSelectCity(item, onChange)}
                  />
                </CardPadding>
              </Card>
            </CardMargin>

            <CardMargin>
              <Card>
                <CardPadding>
                  <AutoCompleteTextInput
                    testID={'1234'}
                    name={CUSTOMERDETAILS.CID_FIELD_RANK}
                    invalid={false}
                    maxLength={40}
                    isRightImage={true}
                    rightImage={require('../../assets/icons_24_chevron_down.png')}
                    // errorMessage={errors?.cityBal?.message}
                    // data={businessCities}
                    value={''}
                    onChangeText={text => {
                      //   onChange(text);
                    }}
                    placeholder={CUSTOMERDETAILS.CID_FIELD_RANK}
                    // onSelectListItem={item => onSelectCity(item, onChange)}
                  />
                </CardPadding>
              </Card>
            </CardMargin>

            <FormFieldText>
              {CUSTOMERDETAILS.CID_LABEL_CUSTOMER_DETAILS}
            </FormFieldText>
            <CardMargin>
              <Card>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder={CUSTOMERDETAILS.CID_FIELD_MOBILE}
                    keyboardType="numeric"
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    maxLength={10}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <Card>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder={CUSTOMERDETAILS.CID_FIELD_EMAIL}
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    maxLength={10}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <Card>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder={CUSTOMERDETAILS.CID_FIELD_PAN}
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    maxLength={10}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>
            <FormFieldText>
              {CUSTOMERDETAILS.CID_LABEL_PAN_MANDATORY}
            </FormFieldText>
            <CardMargin>
              <Card>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder={CUSTOMERDETAILS.CID_FIELD_AADHAAR}
                    keyboardType="numeric"
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    maxLength={10}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>

            <FooterContainer>
              <FooterText>{CUSTOMERDETAILS.CID_LABEL_FOOTER}</FooterText>
              <RightArrowButton>
                <Image
                  source={require('../../../assets/RightArrow.png')}
                  style={RightArrowImage}
                />
              </RightArrowButton>
            </FooterContainer>
          </CardInnerContainer>
        </Card>
      </CustomerDetailsBG>
    </Container>
  );
};

export default CustomerDetails;
