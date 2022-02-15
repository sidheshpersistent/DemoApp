import React from 'react';
import { View, Image } from 'react-native';
import { Colors } from 'styles';
import styled from 'styled-components/native';

const CommonBackground = props => {
  const { imageStyle = {}, backgroundBg } = props;
  // export const HeaderWrapper = styled(View)`
  const ContainerView = styled(View)`
    justify-content: flex-start;
    align-items: flex-start;
  `;
  const ImageView = styled(Image)`
    background-color: ${Colors.BACKGROUND_COLOR};
    width: 100%;
  `;
  return (
    <>
      <ContainerView>
        <ImageView style={[imageStyle]} resizeMode="stretch" source={backgroundBg} />
      </ContainerView>
    </>
  );
};

export default React.memo(CommonBackground);
