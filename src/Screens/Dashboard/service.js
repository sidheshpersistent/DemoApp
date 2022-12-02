import { Endpoints, NetworkManager } from "../../API";
import { CommonConstant } from "../../Utils/Constants";
import { isEmptyValue } from "../../Utils/ValidationUtils";
import { MonthlyHighlightData } from "./constants";

export const getDasboardDetailsDataService = async (callBack) => {
  NetworkManager.IDFCNetworkGet(
    Endpoints.getAgentDasboardDetails,
    null,
    (response,message) => {
      if (response?.status === CommonConstant.SUCCESS) {
        if (!isEmptyValue(response?.responseData)) {
          const updatedMonthlyHighlightData = MonthlyHighlightData();
          updatedMonthlyHighlightData.map((item) => {
            if (item?.id === 1) {
              item.value = response?.responseData?.monthlyTotal;
            }
            if (item?.id === 2) {
              item.value = response?.responseData?.monthlySuccessful;
            }
            if (item?.id === 3) {
              item.value = response?.responseData?.monthlyInProgress;
            }
          });
          callBack(
            CommonConstant.SUCCESS,
            response.responseData,
            updatedMonthlyHighlightData
          );
        } else {
          callBack(CommonConstant.NODATA, null, null);
        }
      } else if (response == CommonConstant.INTERNALSERVERERROR){
        callBack(CommonConstant.INTERNALSERVERERROR, message, null);
      }
    }
  );
};
