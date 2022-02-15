import React from "react"
import { View,Text } from "react-native"
import Box from "../../Components/Box"
import Button from "../../Components/Button"

const Dashboard=(props)=>{


    return(
        <View style={{height:40}}>
          <Box >
          <Text >
            Box container with default padding 10px
          </Text>
        </Box>
        <View style={{paddingVertical: 10}}>
        <Button buttonType="primary" title="Primary Button with longer text and more text" onPress={() => console.warn('Button pressed!')} />
      </View>
      <View style={{paddingVertical: 10}}>
        <Button buttonType="secondary" title="Secondary Button" onPress={() => {}} />
      </View>
      <View style={{paddingVertical: 10}}>
        <Button buttonType="secondary" title="Secondary with noBorder" noBorder onPress={() => {}} />
      </View>
        </View>
    )
}

export default Dashboard