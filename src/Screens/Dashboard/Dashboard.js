import React from 'react';
import {View, Text, Image} from 'react-native';
import Box from '../../components/Box';
import Card from '../../components/CardView';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import ProfileHeaderContainer from '../../components/ProfileHeaderContainer';


const Dashboard = props => {
  return (
    <View style={{flex: 1}}>
      <Box>
        <Text>Box container with default padding 10px</Text>
      </Box>
      <Card>
        <Text>hello eorld</Text>
        <Text>hello eorld</Text>
        <Text>hello eorld</Text>
        <Text>hello eorld</Text>
        <Text>hello eorld</Text>
      </Card>
      <ProfileHeaderContainer
        style={{
          backgroundColor: 'gray',
          marginTop: 5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        maxContainerHeight={200}
        leftView={
          <Image
            style={{width: 20, height: 20}}
            source={{
              uri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1280w.avif',
            }}
            resizeMode="contain"
          />
        }
        rightView={<Text>Ayush bmbmnn</Text>}
      />

      <CustomTextInput
        /* value={tintColorVal ? aadhaarNo.replace(/[0-9]/g, '•') : aadhaarNo} */
        isActive={false}
        isValue={false}
        placeholder="user name"
        spannableText="Hi i am aadhar"
        keyboardType="numeric"
        errorMessage=""
        isError={false}
        errorColor="red"
        textColor="maroon"
        maxLength={19}
        // secureTextEntry={tintColorVal}
        returnKeyType="done"
        multiline={false}
        editable={true}
       /*  nextAction={iconConstants.IC_ARROW_FORWARD} */
        /* onChangeText={} */
        onKeyPress={() => {}}
      />
      <CustomTextInput
        /* value={tintColorVal ? aadhaarNo.replace(/[0-9]/g, '•') : aadhaarNo} */
        isActive={false}
        isValue={false}
        placeholder="user name"
        spannableText="Hi i am aadhar"
        keyboardType="numeric"
        errorMessage=""
        isError={false}
        errorColor="red"
        textColor="maroon"
        maxLength={19}
        // secureTextEntry={tintColorVal}
        returnKeyType="done"
        multiline={false}
        editable={true}
       /*  nextAction={iconConstants.IC_ARROW_FORWARD} */
        /* onChangeText={} */
        onKeyPress={() => {}}
      />
    </View>

  );
};

export default Dashboard;
