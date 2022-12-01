import { Endpoints, NetworkManager } from "../../../API";
import { Account_Type } from "../../../Utils/Constants";


export function getOccupationDetailsService(res) {
   let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
   }
   NetworkManager.IDFCNetworkGet(Endpoints.getOccupationDetails, header, (response) => {
    let data = response?.data;
    res(data)
});
}