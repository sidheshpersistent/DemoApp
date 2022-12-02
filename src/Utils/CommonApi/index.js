import { Endpoints, NetworkManager } from "../../API";
import { decryptDataValue, encryptedDataValue } from "../CryptoHelper.js";
import { Account_Type, Customer_Type, AdharPanMatch, CommonConstant, Customer_Dedupe, ResponseCD } from "../../Utils/Constants"
import { StringsOfLanguages } from "../../Localization";
import { isEmptyValue } from '../../Utils/ValidationUtils';
export const isPanNumberValidApi = async (panNumber, callBack) => {


    let encryptedPanNumber = encryptedDataValue(panNumber);
    let params = {
        "panNumber": encryptedPanNumber,
        "isPanOnly": true
    };
    let header = {
        appName: Account_Type.ASSISTED_SA,
        mobileNumber: ""
    }
    NetworkManager.IDFCNetworkPost(Endpoints.getPanValidationData, params, header, response => {
        if (response?.status == CommonConstant.SUCCESS) {
            let panDetails = decryptDataValue(response?.responseData?.panResp);
            // let pDetails = panDetails?.verifyAEMPANDetailsResponse?.msgBdy?.pnDtls[0];
            if (response?.responseData?.pnSts == "OK") {
                callBack(true, panDetails);
            } else {
                callBack(false, panDetails);
            }
        } else {
            callBack(false, "");
        }
    });
};

export const checkPanAdharMatch = (adharName, panName, callBack) => {

    let header = {
        appName: Account_Type.ASSISTED_SA,
        mobileNumber: ""
    }
    let param = `${adharName.trim()}${`/`}${panName.trim()}`
    NetworkManager.IDFCNetworkGet(`${Endpoints.checkPanAdharMatch}${param}`, header, (response) => {
        if (response?.status == CommonConstant.SUCCESS && response?.responseCd == "00") {
            callBack(AdharPanMatch.COMPLETE_MATCHED);
        } else if (response?.status == CommonConstant.SUCCESS && response?.responseCd == "ADPAN2") {
            callBack(AdharPanMatch.PARTIAL_MATCHED);
        } else {
            callBack(AdharPanMatch.BAD_REQUEST);
        }
    });
}

export const getOfferList = () => {
    let offerList = [
        { id: 1, displayText: "Better offer on cards", value: 1 },
        { id: 2, displayText: "Higher transaction limits", value: 2 },
        { id: 3, displayText: "Higher ATM withdrawals", value: 3 },
        { id: 4, displayText: "Airport lounge access", value: 4 },
        { id: 5, displayText: "Higher insurance cover", value: 5 },
        { id: 6, displayText: "Other reason", value: 6 },
    ]
    //          if (response?.offerList) {
    //   let customOfferlist = [];
    //   let offerlist = response?.offerList;
    //   for (
    //     let offerValue = 0;
    //     offerValue < offerlist.length;
    //     offerValue++
    //   ) {
    //     customOfferlist.push({
    //       id: offerlist[offerValue].ID,
    //       displayText: offerlist[offerValue].reason,
    //       value: offerlist[offerValue].ID,
    //     });
    //   }
    //   response.offerList = customOfferlist;
    // }
    return offerList;
}

export const customerDedupe = async (userDetails, header, callBack) => {
    console.log("value of adhar", JSON.stringify(userDetails.aadharDetails))
    let encryptedAadharDetails = encryptedDataValue(JSON.stringify(userDetails.aadharDetails))
    let encryptedCidDetails = userDetails.cidDetails
    let params = {
        cidDetails: encryptedCidDetails,
        aadharDetails: encryptedAadharDetails,
    };
    NetworkManager.IDFCNetworkPost(Endpoints.customerDedupe, params, header, response => {
        if (response?.status == CommonConstant.SUCCESS) {
            let userDetails = decryptDataValue(response?.userValidationDetails)
            console.log("userVal", userDetails)
            let userDetailsEncrypted = response?.userValidationDetails;
            console.log("userDetailsEncrypted", userDetailsEncrypted)
            let genericCustResp = response?.genericCustResp;
            console.log("generic", JSON.stringify(genericCustResp))
            let posidexDedupeResp = response?.posidexDedupeResp;
            console.log("posidex", JSON.stringify(posidexDedupeResp))
            let dummyResponse =
            {
                acNos: [
                    "7182730121",
                    "1231231222"
                ], acTyp: "ETB", bussUnits: ["SA", "CA"],
                cbsProducts: [{
                    productDesc: "Savings Regular",
                    productType: "2000",
                    productCatogory: "1001",
                    categorization: "SA",
                    acNo: "7182730121",
                },
                {
                    productDesc: "Savings Regular",
                    productType: "2002",
                    productCatogory: "5001",
                    categorization: "",
                    acNo: "1231231222",
                }
                ],
                cstmrIdntfr: "0HE7O5V3P0M87D7UE78W",
                existingEmails: ["yogeshpavtekar@gmail.com"],
                existingMobiles: ["9764845382", "9922555552"],
                ucic: "3639413"
            }

            if (response?.userValidationDetails) {
                let userDetails = decryptDataValue(response?.userValidationDetails)
                console.log("response333", userDetails)
                //let userDetails = dummyResponse;
                userDetails.offerList = getOfferList(); //offerlist added to response
                let accountType = userDetails?.acTyp;
                let cbsProducts = userDetails?.cbsProducts;
                if (header.appName == Account_Type.ASSISTED_SA) {
                    if (accountType == Customer_Dedupe.ACC_TYPE_ETB && !isEmptyValue(cbsProducts)) {
                        if (cbsProducts && cbsProducts.length > 0) {
                            let data = cbsProducts?.filter((item) => item?.productType == "2000" && item?.productCatogory == "5001");
                            if (data?.length > 0) {
                                console.log("PRATHAM-SA");
                                userDetails.prathamBankData = data;
                                callBack(Customer_Type.PRATHAMBANK_CUSTOMER, userDetails, "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                            }
                            else {

                                let data = cbsProducts?.filter((item) => item?.categorization == Customer_Dedupe.SA_CATEGORY);
                                if (data.length > 0) {
                                    console.log("ETB with SA");
                                    callBack(Customer_Type.ETB_WITH_SA_CUSTOMER, userDetails, "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                                }
                                else {
                                    console.log("ETB WITHOUT SA OR with CS");
                                    callBack(Customer_Type.ETB_WITHOUT_SA_CUSTOMER, userDetails, "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                                }

                            }
                        }
                        else {
                            callBack("", "", StringsOfLanguages.COMMON.UNKOWN_ERROR, genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                        }
                    }
                    else {
                        //TODO:- this if block is commented as every new user is treated as ETB ,once the db is resolved need to revert this code.
                        // if(isEmptyValue(cbsProducts)){
                        //     callBack("","",StringsOfLanguages.COMMON.UNKOWN_ERROR);
                        // }             
                        // else{
                        callBack(Customer_Type.NTB_CUSTOMER, "", "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                        //}
                    }
                } else {
                    console.log("CS ACC opening") //CS acc opening conditions to be handled here
                    if (accountType == Customer_Dedupe.ACC_TYPE_ETB && !isEmptyValue(cbsProducts)) {
                        if (cbsProducts && cbsProducts.length > 0) {
                            let data = cbsProducts?.filter((item) => item?.productType == "2000" && item?.productCatogory == "5001");
                            if (data?.length > 0) {
                                console.log("PRATHAM-CS");
                                userDetails.prathamBankData = data;
                                callBack(Customer_Type.PRATHAMBANK_CUSTOMER, userDetails, "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                            }
                            else {
                                let etb_with_cs_data = cbsProducts?.filter((item) => item?.categorization == Customer_Dedupe.CS_CATEGORY);
                                if (etb_with_cs_data.length > 0) {
                                    console.log("ETB with CS-CS");
                                    // callBack(Customer_Type.ETB_WITHOUT_SA_CUSTOMER,userDetails,"");
                                    callBack(Customer_Type.ETB_WITH_CS_CUSTOMER_CORPORATE, userDetails, "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                                }
                                else {
                                    let etb_with_sa_data = cbsProducts?.filter((item) => item?.categorization == Customer_Dedupe.SA_CATEGORY);
                                    if (etb_with_sa_data.length > 0) {
                                        console.log("ETB with SA-CS");
                                        callBack(Customer_Type.ETB_WITH_SA_CUSTOMER_CORPORATE, userDetails, "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                                    }
                                    else {
                                        console.log("ETB WITHOUT SA and CS");
                                        callBack(Customer_Type.ETB_WITHOUT_SA_CUSTOMER, userDetails, "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                                    }
                                }
                            }
                        }
                        else {
                            callBack("", "", StringsOfLanguages.COMMON.UNKOWN_ERROR, genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                        }
                    }
                    else {
                        //TODO:- this if block is commented as every new user is treated as ETB ,once the db is resolved need to revert this code.
                        // if(isEmptyValue(cbsProducts)){
                        //     callBack("","",StringsOfLanguages.COMMON.UNKOWN_ERROR);
                        // }             
                        // else{
                        callBack(Customer_Type.NTB_CUSTOMER, "", "", genericCustResp, posidexDedupeResp, userDetailsEncrypted);
                        //}
                    }
                }
            } else {
                callBack("", "", StringsOfLanguages.COMMON.UNKOWN_ERROR, genericCustResp, posidexDedupeResp, userDetailsEncrypted);
            }
        } else {
            callBack("", "", StringsOfLanguages.COMMON.UNKOWN_ERROR, "", "");
        }
    }
    );
};

//'123456789123' temporary Adhar number is hardcoded for dummy api
//https://matmdemotest-default-rtdb.firebaseio.com/mATMApi/DevTeam/CID/customerDedupe/123456789123.json


export const checkMobileDedupe = (mobileNumber, callBack) => {
    // let encryptedMobileNumber = encryptedDataValue(mobileNumber);

    let header = {
        appName: Account_Type.ASSISTED_SA,
        mobileNumber: encryptedDataValue(mobileNumber)
    }
    NetworkManager.IDFCNetworkGet(Endpoints.checkMobileDedupe, header, (response) => {
        if (response?.status == CommonConstant.SUCCESS) {
            callBack(true, false);//SUCCESS means NTB user 
            //{"authToken": null, "message": "Mobile dedupe checked successfully...", "responseCd": "00", "status": "SUCCESS", "userId": null}
        } else if (response?.status == CommonConstant.ERROR && response?.responseCd == ResponseCD.MD2) {
            callBack(false, false);//ERROR with ETB user 
            //{"authToken": null, "message": "Your mobile number is linked with another accounts. Please try with another mobile number.", "responseCd": "MD2", "status": "ERROR", "userId": null}
        }
        else {
            callBack(false, true); //ERROR with api failure
        }

    });
}

export const checkEmailDedupe = (emailId, callBack) => {
    callBack(null);
    // NetworkManager.GetWithSession(`${Endpoints.checkEmailDedupe}.json`, (response) => {
    //     console.log("checkEmailDedupe : ", response?.data)
    //     if (response) {
    //         let data  = response?.data;
    //         if((data &&
    //             data[0] &&
    //             data[0].emailID) == emailId){
    //                 console.log("email : ", data[0])
    //                 callBack(data[0])
    //             }else{
    //                 callBack(null)
    //             }
    //     }
    // });
}