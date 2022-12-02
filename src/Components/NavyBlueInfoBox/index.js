import React from "react";
import { View ,Image} from "react-native";
import styled from "styled-components/native";
import { icons_24_info } from "../../Assets/Images";


const NavyBlueInfoBox=({children ,style})=>{

    return(
        <InfoBox style={style}>
            <Image 
            style={{width:24,height:24}}
            source={icons_24_info}
            />
            <View style={{width:"92%"}}>
            {children}
            </View>
            
        </InfoBox>
    )

}
export default NavyBlueInfoBox

export const InfoBox = styled.View`
  border-radius: 10px;
  width: 100%;
  
  background-color: #25243b;
  padding:16px ;
  flex-direction:row
`;