import deviceConstants from '../../constants/ntb_sa/deviceConstants';

export default {
  tabsWrapper: {
    paddingVertical: 0,
  },
  tabTextContainerStyle: {
    borderRadius: 0,
    flexDirection: 'column',
    width: deviceConstants.deviceWidth * 0.89,
    justifyContent: 'space-between',
    marginTop: 0,
  },
  tabTextContainerActiveStyle: {
    paddingHorizontal: 0,
  },
  tabText: {
    fontSize: 2,
    lineHeight: 0,
    color: 'white',
    backgroundColor: 'transparent',
  },
  customButtonWrapper: {
    alignItems: 'stretch',
    paddingTop: 10,
    overflow: 'hidden',
  },
};
