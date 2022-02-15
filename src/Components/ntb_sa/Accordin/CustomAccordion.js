import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'styles';
import Config from 'config/Config';
import { iconConstants } from 'constants/ntb_sa';
import KnowMoreContent from 'screens/ntb_sa/Offer/knowMoreContent';
import Labels from 'translations/ntb_sa/common';
import CustomAutoScrollModal from '../Modal/CustomAutoScrollModal';
import CustomIcon from '../common/CustomIcon';
import {
  AccodionTopView,
  FaqRow,
  QueText,
  TitleText,
  SubTitle,
  Arrow,
  KnowMore,
  ContentContainer,
  CardStyle,
  AnsText,
  Description,
  SecondText,
  FirstText,
} from './CustomAccordion.style';

const assetUrl = () => Config.NTB_SA_ASSET_BASE_URL();

const styles = StyleSheet.create({
  imageStyle: { borderRadius: 15 },
  arrowStyle: { color: Colors.WHITE },
  innerCardImg: {
    height: 56,
    width: 56,
  },
});

const Accordion = props => {
  const {
    toggleCallback,
    isExpand,
    anyWhere,
    title,
    subTitle,
    expandHeight,
    AccordianBgExpanded,
    AccordianBg,
    knowMore,
    data,
    name,
  } = props;

  const [isModalVisible, setModalVisible] = useState(false);

  const renderValue = contents => {
    return (
      <If condition={contents !== undefined}>
        {contents.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContentContainer key={`{${name}-${index}`}>
            <CardStyle anyWhereText={anyWhere} bgColor={link.bgColor}>
              <If condition={anyWhere}>
                <CustomIcon name={link.image} size={48} style={{ color: Colors.ICON_ORANGE }} />
              </If>
              <If condition={!anyWhere}>
                <Image
                  source={{ uri: `${assetUrl()}${link.image}` }}
                  style={styles.innerCardImg}
                  resizeMode="contain"
                />
              </If>
            </CardStyle>
            <If condition={anyWhere}>
              <Description>{link.desc1}</Description>
            </If>
            <If condition={!anyWhere}>
              <AnsText TitleText={title}>
                <FirstText>{link.name}</FirstText>
                <SecondText>{link.description}</SecondText>
              </AnsText>
            </If>
          </ContentContainer>
        ))}
      </If>
    );
  };

  const seeMore = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <CustomAutoScrollModal
        isVisible={isModalVisible}
        HeaderMaxHeight={128}
        HeaderMinHeight={115}
        CardMinHeight={115}
        ComponentName={<KnowMoreContent />}
        popText={Labels.POPUP_TEXT}
        popSubText={Labels.POPUP_SUBTEXT}
        toggleCallback={() => {
          setModalVisible(!isModalVisible);
        }}
      />
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={{ opacity: 1, height: isExpand ? expandHeight : 80 }}
        source={isExpand ? AccordianBgExpanded : AccordianBg}
      >
        <TouchableWithoutFeedback onPress={() => toggleCallback()}>
          <AccodionTopView>
            <FaqRow>
              <QueText>
                <TitleText>{title}</TitleText>
                <SubTitle numberOfLines={isExpand ? 0 : 1}>{subTitle}</SubTitle>
              </QueText>
              <Arrow>
                <If condition={isExpand}>
                  <CustomIcon name={iconConstants.IC_CHEVRON_UP} size={24} style={styles.arrowStyle} />
                </If>
                <If condition={!isExpand}>
                  <CustomIcon name={iconConstants.IC_CHEVRON_DOWN} size={24} style={styles.arrowStyle} />
                </If>
              </Arrow>
            </FaqRow>
            {isExpand && renderValue(data)}
            <If condition={isExpand}>
              <View>
                <KnowMore onPress={() => seeMore()}>{knowMore !== undefined ? knowMore : ''}</KnowMore>
              </View>
            </If>
          </AccodionTopView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

Accordion.propTypes = {
  toggleCallback: PropTypes.func.isRequired,
  isExpand: PropTypes.bool,
  anyWhere: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  knowMore: PropTypes.string,
  name: PropTypes.string,
  expandHeight: PropTypes.number,
  AccordianBgExpanded: PropTypes.number,
  AccordianBg: PropTypes.number,
};

Accordion.defaultProps = {
  isExpand: false,
  anyWhere: false,
  title: '',
  subTitle: '',
  knowMore: '',
  name: '',
  expandHeight: 450,
  AccordianBgExpanded: 57,
  AccordianBg: 56,
};

export default Accordion;
