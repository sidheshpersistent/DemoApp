/* eslint-disable react/no-array-index-key */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Typography } from 'styles';
import CustomIcon from '../common/CustomIcon';
import CardView from '../common/CardView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    paddingBottom: 15,
    marginHorizontal: 10,
  },
  cardContent: {
    flexDirection: 'row',
    paddingTop: 12,
  },
  imageContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  withoutImage: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 10,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  cardStyle: {
    flex: 1,
    marginHorizontal: 5,
  },
});

const CustomSurveyList = props => {
  const {
    handleVisiblity,
    checkedValue,
    multiple,
    numberOfChild,
    childrenSection,
    numberOfVehicle,
    vehicleSection,
    ageSection,
    oldUR,
    insurance,
    insuranceSection,
    insuCoverSection,
    insuranceCover,
    politicalSection,
    political,
    text,
    Que,
    parts,
    data,
    oneButtonSlideWidth,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.topTextView}>
        <If condition={text}>
          <Text style={{ marginVertical: 5, fontSize: 10 }}>{text}</Text>
          <Text style={{ marginVertical: 5, fontSize: 14 }}>{Que}</Text>
        </If>
        <If condition={text === undefined || text === ''}>
          <Text style={styles.rang}>{Que}</Text>
        </If>
      </View>
      <View style={styles.cardContent}>
        {data.map((item, index) => {
          return (
            <CardView elevation={4} key={index} width={oneButtonSlideWidth / parts} style={styles.cardStyle}>
              <TouchableOpacity onPress={() => handleVisiblity(item, index)}>
                <If condition={multiple}>
                  <View style={item.image ? styles.imageContainer : styles.withoutImage}>
                    <If condition={item.image}>
                      <CustomIcon
                        style={{
                          color: checkedValue.some(value => value.text === item.text)
                            ? Colors.MAROON
                            : Colors.SURVEY_ICON_COLOR,
                        }}
                        name={item.image}
                        size={24}
                      />
                    </If>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          color: checkedValue.some(value => value.text === item.text)
                            ? Colors.MAROON
                            : Colors.SURVEY_ICON_COLOR,
                        },
                      ]}
                    >
                      {item.text.replace(/ /g, '\n')}
                    </Text>
                  </View>
                </If>
                <If condition={childrenSection}>
                  <View style={item.image ? styles.imageContainer : styles.withoutImage}>
                    <If condition={item.image}>
                      <CustomIcon
                        style={{
                          color: numberOfChild === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        }}
                        name={item.image}
                        size={24}
                      />
                    </If>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          color: numberOfChild === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </If>
                <If condition={vehicleSection}>
                  <View style={item.image ? styles.imageContainer : styles.withoutImage}>
                    <If condition={item.image}>
                      <CustomIcon
                        style={{
                          color: numberOfVehicle === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        }}
                        name={item.image}
                        size={24}
                      />
                    </If>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          color: numberOfVehicle === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </If>
                <If condition={ageSection}>
                  <View style={item.image ? styles.imageContainer : styles.withoutImage}>
                    <If condition={item.image}>
                      <CustomIcon
                        style={{
                          color: oldUR === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        }}
                        name={item.image}
                        size={24}
                      />
                    </If>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          color: oldUR === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </If>
                <If condition={insuranceSection}>
                  <View style={item.image ? styles.imageContainer : styles.withoutImage}>
                    <If condition={item.image}>
                      <CustomIcon
                        style={{
                          color: insurance === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        }}
                        name={item.image}
                        size={24}
                      />
                    </If>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          color: insurance === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </If>
                <If condition={insuCoverSection}>
                  <View style={item.image ? styles.imageContainer : styles.withoutImage}>
                    <If condition={item.image}>
                      <CustomIcon
                        style={{
                          color: insuranceCover === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        }}
                        name={item.image}
                        size={24}
                      />
                    </If>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          color: insuranceCover === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </If>
                <If condition={politicalSection}>
                  <View style={item.image ? styles.imageContainer : styles.withoutImage}>
                    <If condition={item.image}>
                      <CustomIcon
                        style={{
                          color: political === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        }}
                        name={item.image}
                        size={24}
                      />
                    </If>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          color: political === item.text ? Colors.MAROON : Colors.SURVEY_ICON_COLOR,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </If>
              </TouchableOpacity>
            </CardView>
          );
        })}
      </View>
    </View>
  );
};

CustomSurveyList.propTypes = {
  numberOfChild: PropTypes.string,
  numberOfVehicle: PropTypes.string,
  multiple: PropTypes.bool,
  childrenSection: PropTypes.bool,
  vehicleSection: PropTypes.bool,
  ageSection: PropTypes.bool,
  insuranceSection: PropTypes.bool,
  insuCoverSection: PropTypes.bool,
  politicalSection: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  parts: PropTypes.number,
};

CustomSurveyList.defaultProps = {
  multiple: false,
  childrenSection: false,
  numberOfChild: '',
  numberOfVehicle: '',
  vehicleSection: false,
  ageSection: false,
  insuranceSection: false,
  insuCoverSection: false,
  politicalSection: false,
  parts: 0,
  text: undefined,
};

export default CustomSurveyList;
