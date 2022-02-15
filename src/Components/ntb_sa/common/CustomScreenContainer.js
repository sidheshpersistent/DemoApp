/* eslint-disable import/no-cycle */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { ErrorModal } from 'components/ntb_sa';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
});

const CustomScreenContainer = props => {
  const { children } = props;
  const loaderReducer = useSelector(state => state.LoaderReducer);

  return (
    <>
      <View style={styles.container}>{children}</View>
      <ErrorModal isModalVisible={loaderReducer.showSysMsg} />
    </>
  );
};

export default CustomScreenContainer;
