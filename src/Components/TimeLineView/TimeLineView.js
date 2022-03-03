import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import PersonalDetailsEnabled from './images/personalDetailsEnabled.png';
import OccupationDetailsEnabled from './images/occupationDetailsEnabled.png';
import OccupationDetailsDisabled from './images/occupationDetailsDisabled.png';
import BankingPreferenceEnabled from './images/bankingPreferenceEnabled.png';
import BankingPreferenceDisabled from './images/bankingPreferenceDisabled.png';
import CustomerConsentEnabled from './images/customerConsentEnabled.png';
import CustomerConsentDisabled from './images/customerConsentDisabled.png';
const data = [
    {
        'ID':1,
        'img':'source',
        'text':'Personal Details',
        'isSelected': true,
        'iconEnabled': PersonalDetailsEnabled,
        'iconDisabled' : PersonalDetailsEnabled,
    },
    {
        'ID':2,
        'img':'source',
        'text':'Occupational Details',
        'isSelected': false,
        'iconEnabled': OccupationDetailsEnabled,
        'iconDisabled' : OccupationDetailsDisabled,
    },
    {
        'ID':3,
        'img':'source',
        'text':'Banking Preference',
        'isSelected': false,
        'iconEnabled': BankingPreferenceEnabled,
        'iconDisabled' : BankingPreferenceDisabled,
    },
    {
        'ID':4,
        'img':'source',
        'text':'Customer Consent',
        'isSelected': false,
        'iconEnabled': CustomerConsentEnabled,
        'iconDisabled' : CustomerConsentDisabled,
    }
]

const TimeLineView = ()=>{

    return(
        <View style={{flex:1,flexDirection:'row'}}>
            {data.map((item,index)=>{
                return <TimeLineItem key={item.ID} item={{item}} length={4} index={index}></TimeLineItem>
            })}
        </View>
    );
}

export const TimeLineItem = ({item,length,index}) =>{
    let icon = '';
    let islineRightAlignType = false;

    if(index === 0){
        islineRightAlignType = false;
    } else{
        islineRightAlignType = item.item.isSelected;
    }
    if (item.item.isSelected){
        icon = item.item.iconEnabled;
        
    }else{
        icon = item.item.iconDisabled;
    }
    console.log(index);
    console.log(islineRightAlignType);
    return (<TimeLineItemContainer totalItem={length}>
        <View style={{height:70,justifyContent:'center', alignItems:'center'}}>
            { islineRightAlignType ? <View style={{position:'absolute',right:'50%', height:1,width:'100%',backgroundColor:'black'}}></View>
            : null
        }
            <TimeLineImgContainer isSelected={item.item.isSelected}>
            <Image
                style={{height: 36, width: 36}}
                source={icon}
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