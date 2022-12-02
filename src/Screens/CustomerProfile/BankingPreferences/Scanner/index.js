
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  //Alert
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
//import { RNCamera } from 'react-native-camera';
import useSession from '../../../../App/useSession';
const ScanScreen = (props) => {
  const { session, setSession } = useSession()
  const prevSession = session
  const bankingPreferenceContext = prevSession.customerProfile.bankingPreference
  const onSuccess = e => {

    // api call for getting details of the account may be required

    bankingPreferenceContext.Success = true
    bankingPreferenceContext.verifyKitData.status = true
    bankingPreferenceContext.verifyKitData.data.accountNumber = e.data
    // bankingPreferenceContext.branchSelected = { displayText: "Rural Branch", id: "1", value: "1" }
    // TODO: This value will be get after scanning the QR code and will save it in branchSelectedInstant.
    setSession({ ...session, prevSession })

    //Alert.alert(e.data)
    props.navigation.goBack()
  };

  return (
    <QRCodeScanner
      cameraContainerStyle={{ flex: 5 }}
      onRead={onSuccess}
      showMarker={true}
      topContent={
        <View style={{ flex: 1 }}>
          <Text style={styles.centerText}>
            Please Scan QR code or Bar code from Insta Kit
          </Text>
        </View>
      }
    />
  );

}


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    margin: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
export default ScanScreen
