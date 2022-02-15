import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors, Typography } from 'styles';
import { useSelector } from 'react-redux';
import { getAadharDetails } from 'ntb_redux/selectors';

const styles = StyleSheet.create({
  profileTitleLight: {
    fontSize: 18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.DARK,
  },
  profileDetailLabel: {
    fontSize: Typography.CAPTION_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.DARK,
  },
  profileDetailData: {
    fontSize: Typography.H5_BOLD,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.DARK,
  },
  mainConatiner: { flex: 1, paddingLeft: 12 },
  v1Container: { flexDirection: 'row', marginBottom: 12 },
  v2Conatiner: { alignItems: 'flex-start', flex: 1 },
});

let aadharObj;
let fullname = '';
let age = '';
let gender = '';
let address = '';

const ProfileCardd = () => {
  const [showUserDetails] = useState(true);
  aadharObj = useSelector(getAadharDetails());
  fullname = aadharObj?.fullname;
  address = aadharObj?.address;
  gender = aadharObj?.gender;
  age = aadharObj?.age;
  return (
    <View style={styles.mainConatiner}>
      <Text style={styles.profileTitleLight} numberOfLines={1} ellipsizeMode="tail">
        {fullname}
      </Text>
      <If condition={showUserDetails}>
        <View>
          <View style={styles.v1Container}>
            <View style={styles.v2Conatiner}>
              <Text style={styles.profileDetailLabel}>Age</Text>
              <Text style={styles.profileDetailData}>{age}</Text>
            </View>
            <View style={styles.v2Conatiner}>
              <Text style={styles.profileDetailLabel}>Gender</Text>
              <Text style={styles.profileDetailData}>{gender}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.profileDetailLabel}>Address</Text>
            <Text style={styles.profileDetailData}>{address}</Text>
          </View>
        </View>
      </If>
    </View>
  );
};

export default React.memo(ProfileCardd);
