import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';


const TimeLineView = ({data})=>{
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

    return (<TimeLineItemContainer totalItem={length}>
        <View style={{height:70,justifyContent:'center', alignItems:'center'}}>
            { islineRightAlignType ? <View style={{position:'absolute',right:'50%', height:1,width:'100%',backgroundColor:'#9b1e26'}}></View>
            : null
        }
            <TimeLineImgContainer isSelected={item.item.isSelected}>
            <Image
                style={{height: 22, width: 22}} //TODO: chnaged from 36 to 22
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
// TODO:changed height width from 60 to 36
export const TimeLineImgContainer = styled.View`
    height:36px;
    width:36px;
    border-radius:18px;
    justify-content: center;
    align-items:center;
    background-color: ${props =>{ return  (props.isSelected ? `#9b1e26`:`#ffffff`)}};
`;
//TODO: added fontSize below
export const TimeLineText = styled.Text`

    color:${props =>{ return  (props.isSelected ? `#9b1e26`:`#25243b`)}};
    text-align:center;
    font-size:10px; 
`;