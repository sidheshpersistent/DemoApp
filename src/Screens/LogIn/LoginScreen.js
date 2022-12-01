import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {styles} from './LoginScreenStyle';
import {userNameValidate, credentialMatch} from './service/LoginService';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showInvalidMsg, setShowInvalidMsg] = useState(false);

  const loginAPiCall = () => {
    let response = credentialMatch(userName, password);
    if (response) {
      setShowInvalidMsg(false);
      alert('login success');
    } else {
      setShowInvalidMsg(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <View style={styles.loginTitle}>
          <Text
            style={{
              fontSize: 40,
              color: 'white',
            }}>{`Login to your account`}</Text>
        </View>
        <View style={styles.loginbox}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TextInput
              placeholder="user name"
              onChangeText={setUserName}
              style={{
                backgroundColor: 'white',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10,
                fontSize: 30,
              }}>
              {userName}
            </TextInput>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TextInput
              placeholder="password"
              onChangeText={setPassword}
              style={{
                backgroundColor: 'white',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10,
                fontSize: 30,
              }}>
              {password}
            </TextInput>
          </View>
          {showInvalidMsg ? (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{marginHorizontal: 20}}>{`invalid user name`}</Text>
              <Text style={{marginHorizontal: 20}}>{`invalid password`}</Text>
            </View>
          ) : null}
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              testID={'signin'}
              onPress={loginAPiCall}
              style={{
                backgroundColor: 'red',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10,
                fontSize: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 30, color: 'white'}}>{'Login'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
