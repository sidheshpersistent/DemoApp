import React from 'react';
import { View, Image, } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../Utils';


const TimeLineView = ({ data, activeIndex }) => {

    return (
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: "center" }}>
            {data.map((item, index) => {
                return <TimeLineItem key={item.ID} item={{ item }} length={4} index={index} activeIndex={activeIndex}></TimeLineItem>
            })}
        </View>
    );
}

export const TimeLineItem = ({ item, length, index, activeIndex }) => {
    let icon = '';
    let islineRightAlignType = false;

    if (index === 0) {
        islineRightAlignType = false;
    } else {
        islineRightAlignType = item.item.isSelected;
    }
    if (item.item.isSelected) {
        icon = item.item.iconEnabled;

    } else {
        icon = item.item.iconDisabled;
    }

    return (
        <TimeLineItemContainer totalItem={length}>
            <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                {islineRightAlignType ? <View style={{ position: 'absolute', right: '50%', height: 1, width: '100%', backgroundColor: Colors.ERROR }}></View>
                    : null
                }
                <TimeLineImgContainer isSelected={item.item.isSelected}>
                    <Image
                        style={{ height: 22, width: 22 }} //TODO: chnaged from 36 to 22
                        source={icon}
                    />
                </TimeLineImgContainer>
            </View>
            <TimeLineText isSelected={item.item.isSelected} activeIndex={activeIndex} ID={item.item.ID}>{item.item.text}</TimeLineText>
        </TimeLineItemContainer>
    );
}
export default TimeLineView;

export const TimeLineItemContainer = styled.View`
    width:${props => { return (100 / props.totalItem) + `%` }};
`;
// TODO:changed height width from 60 to 36
export const TimeLineImgContainer = styled.View`
    height:36px;
    width:36px;
    border-radius:18px;
    justify-content: center;
    align-items:center;
    background-color: ${props => { return (props.isSelected ? Colors.ERROR : Colors.WHITE) }};
`;
//TODO: added fontSize below
export const TimeLineText = styled.Text`
    color:${props => { return (props.ID == props.activeIndex + 1 ? Colors.ERROR : props.ID < props.activeIndex + 1 ? Colors.BLACK : Colors.NEW_GREY_600.code) }};
    text-align:center;
    font-size:10px; 
`;