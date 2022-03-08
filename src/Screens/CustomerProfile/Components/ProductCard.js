import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import Card from 'components/CardView';

const ProductCard = props => {
  const {onPressCard, isQREnable = false} = props;
  return (
    <TouchableOpacity onPress={() => onPressCard()} style={{marginBottom: 32}}>
      <Card>
        <Card style={ProductCardStyle}>
          <ProductCardContainer>
            <ProductCardImageContainer>
              <Image
                style={{width: 120, height: 110}}
                source={require('../../../assets/bg2.png')}
              />
            </ProductCardImageContainer>
            <ProductCardRight>
              <CardHeading>{'IDFC FIRST Power for Women -'}</CardHeading>
              <CardText>
                {'With VISA'} <BoldText>{'Signature Debit Card'}</BoldText>
              </CardText>
              <CardText>
                {'Avg. Monthly Balance '} <BoldText>{'₹25,000'}</BoldText>
              </CardText>
            </ProductCardRight>
          </ProductCardContainer>
        </Card>
        {isQREnable && (
          <QRContainer>
            <QRLeft>
              <Image
                style={{width: 28, height: 28, marginRight: 12}}
                source={require('../../../assets/QR_Icon.png')}
              />
              <CardText>{'Scan QR Code on Kit to proceed'}</CardText>
            </QRLeft>
            <QRRight>
              <ScanNowText>{'Scan Now'}</ScanNowText>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  marginLeft: 8,
                }}
                source={require('../../../assets/right_icon.png')}
              />
            </QRRight>
          </QRContainer>
        )}
      </Card>
    </TouchableOpacity>
  );
};
export default ProductCard;
const ProductCardStyle = {
  backgroundColor: '#f4d8cf',
  // marginBottom: 32,
};
export const ProductCardContainer = styled.View`
  flex-direction: row;
`;
export const ProductCardImageContainer = styled.View`
  ${'' /* width: 100px; */}
`;
export const ProductCardRight = styled.View`
  justify-content: center;
  flex: 1;
  padding-left: 16px;
`;
export const CardHeading = styled.Text`
  font-size: 18px;
  color: #25243b;
  font-weight: bold;
`;
export const CardText = styled.Text`
  font-size: 14px;
  color: #25243b;
`;
export const BoldText = styled.Text`
  font-weight: bold;
`;
export const QRContainer = styled.View`
  flex-direction: row;
  padding: 20px;
`;
export const QRLeft = styled.View`
  flex-direction: row;
  flex: 1;
  align-item: center;
`;
export const QRRight = styled.View`
  align-item: center;
  flex-direction: row;
`;
export const ScanNowText = styled.Text`
  font-size: 16px;
  color: #9b1e26;
  font-weight: bold;
`;
