export const CID_MockData = {
  companyList: {
    data: [
      {
        ID: 0,
        corporateID: 4088,
        corporateName: "Indian Army",
        rankList: [
          { ID: 0, rank: "General" },
          { ID: 1, rank: "Lieutenant General" },
        ],
      },
      { ID: 1, corporateID: 4089, corporateName: "Home Decor" },
    ],
  },
  PanValidation: {
    data: ["AZWPB6704B", "AZWPB6704F"],
  },
  PAN_Adhar_Name_Match: {
    data: {
      adharName: "Ayush Mishra",
      adharNumber: "123456789123",
      panName: "Ayush Mishra",
      panNumber: "AZWPB6704B",
    },
  },
  CustomerDedupe: {
    data: {
      accountList: [
        { accountNumber: "*****678", accountType: "Saving" },
        { accountNumber: "*****677", accountType: "Current" },
      ],
      adharNumber: "123456789123",
      customerID: "******744",
      emailID: "idfc1@gmail.com",
      etbWithSA: true,
      isPrathamBankCustomer: false,
      mobileNumber: "9876543211",
      offerList: [
        { ID: 1, reason: "Better Offers on Card" },
        { ID: 2, reason: "PPF Account" },
      ],
      panNumber: "AZWPB6704B",
    },
  },
  MobileDedupe: {
    data: [
      {
        customerID: "*****653",
        customerName: "Vicky Mishra",
        mobileNumber: "9876543210",
      },
    ],
  },
  EmailDedupe: {
    data: [
      {
        customerID: "****8976",
        customerName: "Ayush Mishra",
        emailID: "idfc@gmail.com",
      },
    ],
  },
  CustomerDedupeParams: {
    aadharNumber: "123456789123",
    mobileNumber: "9876543211",
    panNumber: "AZWPB6704B",
    emailId: "idfc1@gmail.com",
  },
};
export const CustomerProfile_MockData = {
  userDetails: {
    data: [
      {
        adharAdress:
          "399, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
        avator:
          "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/user.jpeg?alt=media&token=e38ba727-1b04-47a8-817f-13d6761428f7",
        dob: 959077860000,
        gender: "Male",
        isPanStatus: true,
        userName: "Ayush Mishra",
      },
      {
        adharAdress:
          "400, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
        avator:
          "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/user.jpeg?alt=media&token=e38ba727-1b04-47a8-817f-13d6761428f7",
        dob: -303067432000,
        gender: "Male",
        isPanStatus: false,
        userName: "Rohit Babar",
      },
      {
        adharAdress:
          "401, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
        adharNumber: 123456789122,
        avator:
          "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/user.jpeg?alt=media&token=e38ba727-1b04-47a8-817f-13d6761428f7",
        dob: 959077860000,
        emailID: "idfc@gmail.com",
        gender: "Male",
        isPanStatus: false,
        mobileNumber: 959077860000,
        panNumber: "",
        userName: "Kapil Kumawat",
      },
    ],
  },
};
export const getCampaignCodeList_MockData = [
  { id: 1, displayText: "Doctors and CA Drive", campaignCode: "6569" },
  { id: 2, displayText: "Car Loan", campaignCode: "CARLN" },
  { id: 3, displayText: "Gold Loan", campaignCode: "GLDLN" },
  { id: 4, displayText: "SME X-sell to SA", campaignCode: "6686" },
  { id: 5, displayText: "Campaign", campaignCode: "120" },
  { id: 6, displayText: "Asset Liability Collaboration", campaignCode: "6621" },
];
export const getAgentDasboardDetails_MockData = {
  status: "SUCCESS",
  responseData: {
    monthlyTotal: 1,
    monthlySuccessful: 1,
    monthlyInProgress: 0,
    resumeAppl: 0,
    incomplete: 1,
  },
  message: null,
  responseCd: "00",
};
export const getPaymentDetails_MockData = { status: "SUCCESS" }; //"{\"leadId\":null,\"status\":\"SUCCESS\",\"message\":null,\"responseCd\":\"00\",\"id\":10,\"userId\":114,\"agentId\":\"agent@idfc.com\",\"custName\":\"Jitendra Kumar Tiwari\",\"acNumber\":\"21988198989\",\"custId\":\"31957892\",\"productName\":\"BSBDA - Small Account\",\"accountOpenDate\":\"2022-08-30T18:42:23\",\"isBuCompleted\":false,\"assistedCreateBankUseSection\":{\"leadId\":null,\"status\":\"SUCCESS\",\"message\":null,\"responseCd\":\"00\",\"id\":10,\"userId\":114,\"isInitialFunding\":true,\"amount\":30000.5,\"modeOfPayment\":\"Cheque\",\"chequeTs\":null,\"paymentdetails\":\"TXN1234567YTR\",\"bankName\":\"HDFC BANK\",\"branchName\":\"Alibag\",\"leadGenCode\":\"654321\",\"leadWarmerCode\":\"654321\",\"leadConverterCode\":\"654321\",\"compaignCode\":\"54321\",\"metCustAt\":\"Office Address\",\"isCustSignInPresense\":true,\"chequeDt\":\"09-03-2022\"}}";
export const getBankList_MockData = {
  data: {
    data: [
      {
        id: 11,
        displayText: "HDFC BANK LTD",
        debitCardCode: "10850",
        netbankingCode: "9660",
        popularity: 1,
      },
      {
        id: 18,
        displayText: "XYZ BANK",
        debitCardCode: "10010",
        netbankingCode: "9460",
        popularity: 2,
      },
    ],
  },
};
