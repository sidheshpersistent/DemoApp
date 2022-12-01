import { Endpoints, NetworkManager } from "../../API";
import { encryptedDataValue } from "../../Utils/CryptoHelper";
import { ConsoleLogHelper } from "../../Utils";

export const saveBankUseSection = async (request,header, callBack) => {
    let encryptedRequest = encryptedDataValue(JSON.stringify(request));
    let finalRequest = { data: encryptedRequest }
    ConsoleLogHelper.log("bank use section req : ",request);
    NetworkManager.IDFCNetworkPut(Endpoints.saveBankUseSection, finalRequest,header, response => {
        ConsoleLogHelper.log("bank use section response : ", response);
        callBack(response);
    });
};