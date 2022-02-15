import React from 'react';
import PropTypes from 'prop-types';
import { TabLabel, TabText, Tabs, MainContainer, InnerContainer } from './StepItem.style';

const StepItem = ({ tabNo, tabLabel, isSelected }) => {
  return (
    <MainContainer>
      <InnerContainer>
        <TabLabel IsSelected={isSelected} TabNo={tabNo}>
          {tabLabel}
        </TabLabel>
      </InnerContainer>
      <Tabs IsSelected={isSelected} TabNo={tabNo}>
        <TabText IsSelected={isSelected} TabNo={tabNo}>
          {tabNo}
        </TabText>
      </Tabs>
    </MainContainer>
  );
};

StepItem.propTypes = {
  tabNo: PropTypes.number,
  isSelected: PropTypes.number,
  tabLabel: PropTypes.string.isRequired,
};

StepItem.defaultProps = {
  tabNo: 1,
  isSelected: 1,
};

export default StepItem;
