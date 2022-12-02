import { Colors} from '../../Utils';
import styled from 'styled-components/native';

export const DashboardContainer = styled.ImageBackground`
  flex: 1;
`;

export const AgentGreetWrapper = styled.View`
  margin-left: 16px;
`;

export const StatusView = styled.View`
align_items:center;
padding-vertical:6px;
border-radius:4px;
width:100px;
background-color: ${Colors.NEW_YELLOW_100.code};
`

export const LowerBoxContainer = styled.View`
  padding-horizontal: 30px;
  padding-top: 20px;
  flex: 1;
`;

export const CardDetailsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor:Colors.NEW_GREY_400.code
};

export const header = {elevation: 0, padding: 0, marginTop: 15};

// export const highlightCard = {
//   width: '30%',
//   backgroundColor: 'skyblue',
//   marginTop: 16,
//   height: 90,
// };
// export const MainCardStyle = {
//   width: '45%',
//   height: 253,
//   backgroundColor: 'red',
// };
