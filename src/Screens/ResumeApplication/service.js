import { Endpoints, NetworkManager } from "../../API";
import { Account_Type, CommonConstant } from "../../Utils/Constants";


export const getResumeApplicationsListComm = async (callBack) => {

    let header = {
        appName: Account_Type.ASSISTED_SA,
        mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(Endpoints.getResumeApplicationsList, header,response => {
        if (response?.status == CommonConstant.SUCCESS) {
            callBack(true,response?.data);
        } else {
            callBack(false,"");
        }
    });
};

export const getResumeApplicationDataComm = async (endPoint, callBack) => {

    let header = {
        appName: Account_Type.ASSISTED_SA,
        mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(endPoint,header, response => {
        if (response?.status == CommonConstant.SUCCESS) {
            callBack(true,response);
        } else {
            callBack(false,"");
        }
    });
};


export const deleteResumeApplicationDataComm = async (endPoint, callBack) => {
    let header = {
        appName: Account_Type.ASSISTED_SA,
        mobileNumber: ""
    }
    NetworkManager.IDFCNetworkDelete(endPoint, header, response => {
        if (response?.status == CommonConstant.SUCCESS) {
            callBack(response);
        } else {
            callBack("");
        }
    });
};