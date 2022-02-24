import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import {
     LoginContainer, 
     LoginTitle,
     LoginBox, 
     LoginBoxContainer ,
     LoginTitleText,
     UserNameView,
     PasswordView,
     UserNametextInput,
     PasswordtextInput,
     ErrorMsgView, 
     LoginButtonView
} from './styles';
import { userNameValidate, credentialMatch } from './Service/LoginService';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';


const LoginScreen = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showInvalidMsg, setShowInvalidMsg] = useState(false);

    const loginAPiCall = () => {
        let response = credentialMatch(userName, password);
        if (response) {
            setShowInvalidMsg(false)
            // alert("login success done");
            props.navigation.navigate("Dashboard")
        } else {
            setShowInvalidMsg(true)
        }

    }

    // testing git push

    return (
        <BackgroundImage>
            <LoginContainer>
            <LoginBoxContainer>
                <LoginTitle>
                    <LoginTitleText>{`Login to your account`}</LoginTitleText>
                </LoginTitle>
                <LoginBox>
                    <UserNameView>
                    {/* TODO: ccl textinput to be used here */}
                        <UserNametextInput placeholder='User name' onChangeText={setUserName}>
                            {userName}
                        </UserNametextInput>
                    </UserNameView>
                    <PasswordView >
                    {/* TODO: ccl textinput to be used here */}
                        <PasswordtextInput  placeholder='Password' onChangeText={setPassword} >
                            {password}
                        </PasswordtextInput>
                    </PasswordView>
                    {showInvalidMsg ? <ErrorMsgView>
                        <Text style={{ marginHorizontal: 20 }}>{`invalid user name`}</Text>
                        <Text style={{ marginHorizontal: 20 }}>{`invalid password`}</Text>
                    </ErrorMsgView> : null}
                    <LoginButtonView>
                    {/* TODO: ccl Button to be used here */}
                        <TouchableOpacity testID={'signin'} onPress={loginAPiCall} style={{ backgroundColor: '#9b1e26', height: 50, marginHorizontal: 20, borderRadius: 10, fontSize: 40, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 30, color: 'white' }}>{'Login'}</Text></TouchableOpacity>
                    </LoginButtonView>
                </LoginBox>
            </LoginBoxContainer>
            </LoginContainer>
        </BackgroundImage>
    );
}

export default LoginScreen;

