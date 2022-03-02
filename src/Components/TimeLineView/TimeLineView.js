import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const data = [
    {
        'ID':1,
        'img':'source',
        'text':'Personal Details',
        'isSelected': true,
    },
    {
        'ID':2,
        'img':'source',
        'text':'Occupational Details',
        'isSelected': false,
    },
    {
        'ID':3,
        'img':'source',
        'text':'Banking Preference',
        'isSelected': false,
    },
    {
        'ID':4,
        'img':'source',
        'text':'Customer Consent',
        'isSelected': false,
    }
]

const TimeLineView = ()=>{

    return(
        <View style={{flex:1,flexDirection:'row'}}>
            {data.map((item)=>{
                return <TimeLineItem key={item.ID} item={{item}} length={4}></TimeLineItem>
            })}
        </View>
    );
}

export const TimeLineItem = ({item,length}) =>{
 
    return (<TimeLineItemContainer totalItem={length}>
        <View style={{height:70,justifyContent:'center', alignItems:'center'}}>
            <TimeLineImgContainer isSelected={item.item.isSelected}>
            <Image
                style={{height: 36, width: 36}}
                source={require('../../assets/icons_24_arrow_forward.png')}
              />
            </TimeLineImgContainer>
        </View>
        <TimeLineText isSelected={item.item.isSelected}>{item.item.text}</TimeLineText>
    </TimeLineItemContainer>);
}
export default TimeLineView;

export const TimeLineItemContainer = styled.View`
    height:90px;
    width:${props =>{ return  (100/props.totalItem) + `%`}};
`;

export const TimeLineImgContainer = styled.View`
    height:60px;
    width:60px;
    border-radius:30px;
    justify-content: center;
    align-items:center;
    background-color: ${props =>{ return  (props.isSelected ? `#9b1e26`:`#ffffff`)}};
`;

export const TimeLineText = styled.Text`
    color:${props =>{ return  (props.isSelected ? `#9b1e26`:`#25243b`)}};
    text-align:center;
`;