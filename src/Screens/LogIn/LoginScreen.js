import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { LoginContainer, LoginTitle, styles } from './styles';
import { userNameValidate, credentialMatch } from './Service/LoginService';

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
        <LoginContainer >
            <View style={styles.red}>
                <LoginTitle>
                    <Text style={{ fontSize: 40, color: 'white' }}>{`Login to your account`}</Text>
                </LoginTitle>
                <View style={styles.loginbox}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput placeholder='user name' onChangeText={setUserName} style={{ backgroundColor: 'white', height: 50, marginHorizontal: 20, borderRadius: 10, fontSize: 30 }}>
                            {userName}
                        </TextInput>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput  placeholder='password' onChangeText={setPassword} style={{ backgroundColor: 'white', height: 50, marginHorizontal: 20, borderRadius: 10, fontSize: 30 }}>
                            {password}
                        </TextInput>
                    </View>
                    {showInvalidMsg ? <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ marginHorizontal: 20 }}>{`invalid user name`}</Text>
                        <Text style={{ marginHorizontal: 20 }}>{`invalid password`}</Text>
                    </View> : null}
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TouchableOpacity testID={'signin'} onPress={loginAPiCall} style={{ backgroundColor: 'red', height: 50, marginHorizontal: 20, borderRadius: 10, fontSize: 40, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 30, color: 'white' }}>{'Login'}</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

        </LoginContainer>
    );
}

export default LoginScreen;

