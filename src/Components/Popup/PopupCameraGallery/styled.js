import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },
  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 30
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    borderRightWidth:1,borderRightColor:"#999"
  },
  iconStyle: {
    width: 50,
    height: 50
  }
});
export default styles