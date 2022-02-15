import React from 'react';
import styled from 'styled-components/native';
import { Colors, Typography } from 'styles';
import DeprecatedStyledText from 'components/common/DeprecatedStyledText';

// import Labels from 'translations/ntb_sa/common';

const Container = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  background-color: transparent;
`;

const BalanceText = styled(DeprecatedStyledText)`
  opacity: 0.4;
  font-size: 12px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  color: ${Colors.DARK};
`;

const BalanceUpContainer = () => {
  return (
    <Container>
      <BalanceText />
    </Container>
  );
};
export default BalanceUpContainer;
