/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-bind */
import React, { PureComponent } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  CarouselItemContainer,
  ItemHeightView,
  TextStyle,
  IconContainer,
  TextContainer,
  GradientContainer,
} from './carousel.style';
import CustomLinearGradient from '../../Gradient/CustomLinearGradient';
import CustomIcon from '../../common/CustomIcon';

const { width } = Dimensions.get('window');
const oneSlideWidth = width * 0.87;
const cardHeight = 140;

const styles = StyleSheet.create({
  contentStyle: { position: 'absolute', top: 0, bottom: 0 },
  pagedotStyle: {
    backgroundColor: '#9d1d27',
    marginHorizontal: -4,
    marginTop: -2,
    width: 60,
    height: 5,
  },
  inactiveDotStyle: {
    width: 10,
  },
});

export default class CarouselSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: props.cardContent,
    };
  }

  get pagination() {
    const { activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={activeIndex}
        dotStyle={styles.pagedotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.9}
      />
    );
  }

  renderCarousel({ item }) {
    const iconStyle = {
      margin: 8,
      color: item.iconColor,
      borderRadius: 60,
    };
    return (
      <CarouselItemContainer>
        <ItemHeightView>
          <CustomLinearGradient
            rectWidth={oneSlideWidth - 10}
            rectHeight={cardHeight}
            x={0}
            y={0}
            rx={17}
            ry={17}
            contentStyle={styles.contentStyle}
            startColor={item.startColor1}
            endColor={item.endColor1}
          >
            <GradientContainer>
              <IconContainer bgColor={item.bgColor}>
                <CustomIcon
                  style={{
                    ...iconStyle,
                  }}
                  name={item.image}
                  size={32}
                />
              </IconContainer>
              <TextContainer>
                <TextStyle>{item.text}</TextStyle>
              </TextContainer>
            </GradientContainer>
          </CustomLinearGradient>
        </ItemHeightView>
      </CarouselItemContainer>
    );
  }

  render() {
    const { carouselItems } = this.state;

    return (
      <View>
        <Carousel
          data={carouselItems}
          renderItem={this.renderCarousel.bind(this)}
          sliderWidth={width}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          itemWidth={oneSlideWidth}
          layout="default"
          ref={ref => {
            this.carousel = ref;
          }}
          onSnapToItem={index => this.setState({ activeIndex: index })}
        />
        {this.pagination}
      </View>
    );
  }
}

CarouselSlider.propTypes = {
  cardContent: PropTypes.arrayOf(PropTypes.object),
};

CarouselSlider.defaultProps = {
  cardContent: undefined,
};
