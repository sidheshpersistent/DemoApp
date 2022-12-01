export const mode_of_IP = [
  { id: "1", displayText: "NEFT/RTGS", value: "1" },
  { id: "2", displayText: "Cheque", value: "2" },
  { id: "3", displayText: "Payment gateway", value: "3" },
];

export const campaign_code = [
  { id: "1", displayText: "Testing", value: "1" },
  { id: "2", displayText: "Testing", value: "2" },
  { id: "3", displayText: "Testing", value: "3" },
];

export const met_customer_at = [
  { id: "1", displayText: "Residence", value: "1" },
  { id: "2", displayText: "Place of work", value: "2" },
  { id: "3", displayText: "IDFC FIRST Bank branch", value: "3" },
];

export const dateFormat = "dd MMMM yyyy";
export const minDate = "1990-01-01";

export const countryList = {
  data: [
    {
      createdOn: null,
      modifiedOn: null,
      isActive: null,
      id: 234,
      country: "IO",
      countryValue: "BRITISH INDIAN OCEAN TERRITORY",
    },
    {
      createdOn: null,
      modifiedOn: null,
      isActive: null,
      id: 94,
      country: "IN",
      countryValue: "INDIA",
    },
    {
      createdOn: null,
      modifiedOn: null,
      isActive: null,
      id: 90,
      country: "ID",
      countryValue: "INDONESIA",
    },
  ],
  status: "SUCCESS",
};

export const cityList = {
  data: [
    {
      id: "627",
      value: "872",
      displayText: "ASSAM",
      state: "01",
    },
    {
      id: "54",
      value: "021",
      displayText: "BARPETA",
      state: "01",
    },
    {
      id: "676",
      value: "FXY",
      displayText: "CHACHER",
      state: "01",
    },
    {
      id: "765",
      value: "Y09",
      displayText: "KAMRUP METRO",
      state: "01",
    },
    {
      id: "8",
      value: "010",
      displayText: "LAKHIMPUR",
      state: "01",
    },
    {
      id: "9",
      value: "009",
      displayText: "DIBRUGARH",
      state: "01",
    },
    {
      id: "33",
      value: "410",
      displayText: "DHEMAJI",
      state: "01",
    },
    {
      id: "34",
      value: "005",
      displayText: "MORIGAON",
      state: "01",
    },
    {
      id: "35",
      value: "014",
      displayText: "NAGAON",
      state: "01",
    },
    {
      id: "36",
      value: "Y10",
      displayText: "MARIGAON",
      state: "01",
    },
    {
      id: "37",
      value: "016",
      displayText: "KARBI ANGLONG",
      state: "01",
    },
    {
      id: "38",
      value: "013",
      displayText: "GOLAGHAT",
      state: "01",
    },
    {
      id: "39",
      value: "012",
      displayText: "SIBSAGAR",
      state: "01",
    },
    {
      id: "40",
      value: "011",
      displayText: "JORHAT",
      state: "01",
    },
    {
      id: "41",
      value: "15",
      displayText: "TINSUKIA",
      state: "01",
    },
    {
      id: "42",
      value: "017",
      displayText: "KARIMGANJ",
      state: "01",
    },
    {
      id: "43",
      value: "004",
      displayText: "HAILAKANDI",
      state: "01",
    },
    {
      id: "44",
      value: "022",
      displayText: "CACHAR",
      state: "01",
    },
    {
      id: "45",
      value: "018",
      displayText: "NORTH CACHAR HILLS",
      state: "01",
    },
    {
      id: "46",
      value: "007",
      displayText: "DARRANG",
      state: "01",
    },
    {
      id: "47",
      value: "006",
      displayText: "SONITPUR",
      state: "01",
    },
    {
      id: "48",
      value: "002",
      displayText: "BONGAIGAON",
      state: "01",
    },
    {
      id: "49",
      value: "020",
      displayText: "KOKRAJHAR",
      state: "01",
    },
    {
      id: "50",
      value: "003",
      displayText: "GOALPARA",
      state: "01",
    },
    {
      id: "51",
      value: "019",
      displayText: "DHUBRI",
      state: "01",
    },
    {
      id: "52",
      value: "001",
      displayText: "KAMRUP",
      state: "01",
    },
    {
      id: "53",
      value: "008",
      displayText: "NALBARI",
      state: "01",
    },
    {
      id: "675",
      value: "781",
      displayText: "GUWAHATI",
      state: "01",
    },
  ],
  status: "SUCCESS",
};

// TODO: mode of payments needs to be get from enums.
export const modeOfPayementCheque = "Cheque";
export const modeOfPayementNeft = "NEFT/RTGS";
export const modeOfPayementGateway = "Payment gateway";
export const bankNameIdfc = "IDFC FIRST BANK";
export const avoidNumNChar = /[^A-Za-z ]+/g;
export const allowOnlyNum = /([^0-9])/g;
export const addressCheck = /[^A-Za-z 0-9/,]+/g;
