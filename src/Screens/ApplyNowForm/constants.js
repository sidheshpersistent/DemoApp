import {
  background1,
  background2,
  hospicashOffer1,
  hospicashOffer2,
  hospicashOffer3,
  icon_1,
} from "../../Assets/Images";

export const nomineeRelationApiData=[{"id":1,"relation":"Brother"},{"id":2,"relation":"Daughter"},{"id":3,"relation":"Father"},{"id":4,"relation":"Husband"},{"id":5,"relation":"Mother"},{"id":6,"relation":"Other"},{"id":7,"relation":"Sister"},{"id":8,"relation":"Son"},{"id":9,"relation":"Wife"}]

export const cc_dropDown_Data = [
  { id: "1", displayText: "Andorra", value: "1" },
  { id: "2", displayText: "Angola", value: "2" },
  { id: "3", displayText: "Bahamas", value: "3" },
  { id: "4", displayText: "Bahrain", value: "4" },
  { id: "5", displayText: "Cameroon", value: "5" },
  { id: "6", displayText: "Colombia", value: "6" },
  { id: "7", displayText: "Cyprus", value: "7" },
  { id: "8", displayText: "Denmark", value: "8" },
];
export const Property_Data = [
  { id: "1", displayText: "Owned", value: "1" },
  { id: "2", displayText: "Rented", value: "2" },
];
export const nominee_Relation_Data = [
  { id: "1", displayText: "Mother", value: "1" },
  { id: "2", displayText: "Father", value: "2" },
  { id: "3", displayText: "Brother", value: "3" },
  { id: "4", displayText: "Daughter", value: "4" },
  { id: "5", displayText: "Others", value: "5" },
];
export const State_Data = [
  { id: "1", displayText: "Maharashtra", value: "1" },
  { id: "2", displayText: "Uttar Pradesh", value: "2" },
  { id: "3", displayText: "Jharkhand", value: "3" },
  { id: "4", displayText: "Punjab", value: "4" },
  { id: "5", displayText: "West Bengal", value: "5" },
];
export const City_Data = [
  { id: "1", displayText: "Mumbai", value: "1" },
  { id: "2", displayText: "Varanasi", value: "2" },
  { id: "3", displayText: "Dhanbad", value: "3" },
  { id: "4", displayText: "Amritsar", value: "4" },
  { id: "5", displayText: "Howrah", value: "5" },
];
export const Occupation_Type_Data = [
  { id: "1", displayText: "Salaried", value: "1" },
  { id: "2", displayText: "Self Employed", value: "2" },
];
export const Product_Data = [
  { id: "1", displayText: "IDFC FIRST Power for Women", value: "1" },
  { id: "2", displayText: "Senior Citizen Saving Account", value: "2" },
  { id: "3", displayText: "Staff Saving Account", value: "3" },
  { id: "4", displayText: "Others", value: "4" },
];

export const Branch_Location = [
  { id: "1", displayText: "BKC-Naman Branch", value: "1" },
  { id: "2", displayText: "Others", value: "2" },
];
export const Income_Source_Data = [
  { id: "1", displayText: "Salary", value: "1" },
  { id: "2", displayText: "Others", value: "2" },
];
export const Company_Data = [
  { id: "1", displayText: "Persistent Systems", value: "1" },
  { id: "2", displayText: "Infosys", value: "2" },
  { id: "3", displayText: "Wipro", value: "3" },
  { id: "4", displayText: "OLX", value: "4" },
  { id: "5", displayText: "Amazon", value: "5" },
];

export const applyNow_api_Data = [
  {
    CardId: 1,
    flag:"wealth",
    cardFlag: "CreditCard",
    backgroundImage: background1,
    title: "Apply for FIRST Wealth Credit Card",
    subTitle:
      "Please review all the application details carefully before proceeding to apply",
    infoName:"Vicky Dhanwani ",
    infoEmail:"'vickydhanwani@mail.com'",
    customerAddress:"401, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    CardData: {
      cardImage: icon_1,
      cardName: "FIRST Wealth Credit Card",
      creditTitle: "CREDIT LIMIT",
      creditLimit: "₹XXXX",
      annualTitle: "ANNUAL PERCENTAGE RATE",
      annualPercentage: "XX%",
      Offers: [
        "Gift Voucher worth ₹500 on spending ₹ 15,000 in first 3 months",
        "On monthly spends less than ₹20,000, 6x rewards on online spends and 3x rewards on retail store spends",
        "10x rewards on birthdays and on monthly spends > ₹20,000",
        "1.5% Forex markup on international spends",
        " Domestic Airport Lounges, Spas and International Airport lounge- 4 visits per quarter",
        "Upto 2 complimentary Golf rounds in a month",
      ],
    },
  },
  {
    CardId: 5,
    flag:"wealth2",
    cardFlag: "CreditCard",
    backgroundImage: background1,
    title: "Apply for FIRST Millennia Credit Card",
    subTitle:
      "Please review all the application details carefully before proceeding to apply",
    infoName:"Vicky Dhanwani ",
    infoEmail:"'vickydhanwani@mail.com'",
    customerAddress:"401, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    CardData: {
      cardImage: icon_1,
      cardName: "FIRST Millennia Credit Card",
      creditTitle: "CREDIT LIMIT",
      creditLimit: "₹XXXX",
      annualTitle: "ANNUAL PERCENTAGE RATE",
      annualPercentage: "XX%",
      Offers: [
        "Gift Voucher worth ₹500 on spending ₹ 15,000 in first 3 months",
        "On monthly spends less than ₹20,000, 6x rewards on online spends and 3x rewards on retail store spends",
        "10x rewards on birthdays and on monthly spends > ₹20,000",
        "1.5% Forex markup on international spends",
        " Domestic Airport Lounges, Spas and International Airport lounge- 4 visits per quarter",
        "Upto 2 complimentary Golf rounds in a month",
      ],
    },
  },
  {
    CardId: 6,
    flag:"wealth3",
    cardFlag: "CreditCard",
    backgroundImage: background1,
    title: "Apply for FIRST Select Credit Card",
    subTitle:
      "Please review all the application details carefully before proceeding to apply",
    infoName:"Vicky Dhanwani ",
    infoEmail:"'vickydhanwani@mail.com'",
    customerAddress:"401, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    CardData: {
      cardImage: icon_1,
      cardName: "FIRST Wealth Select Card",
      creditTitle: "CREDIT LIMIT",
      creditLimit: "₹XXXX",
      annualTitle: "ANNUAL PERCENTAGE RATE",
      annualPercentage: "XX%",
      Offers: [
        "Gift Voucher worth ₹500 on spending ₹ 15,000 in first 3 months",
        "On monthly spends less than ₹20,000, 6x rewards on online spends and 3x rewards on retail store spends",
        "10x rewards on birthdays and on monthly spends > ₹20,000",
        "1.5% Forex markup on international spends",
        " Domestic Airport Lounges, Spas and International Airport lounge- 4 visits per quarter",
        "Upto 2 complimentary Golf rounds in a month",
      ],
    },
  },
  {
    CardId: 7,
    flag:"wealth4",
    cardFlag: "CreditCard",
    backgroundImage: background1,
    title: "Apply for FIRST Classic Credit Card",
    subTitle:
      "Please review all the application details carefully before proceeding to apply",
    infoName:"Vicky Dhanwani ",
    infoEmail:"'vickydhanwani@mail.com'",
    customerAddress:"401, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    CardData: {
      cardImage: icon_1,
      cardName: "FIRST Classic Credit Card",
      creditTitle: "CREDIT LIMIT",
      creditLimit: "₹XXXX",
      annualTitle: "ANNUAL PERCENTAGE RATE",
      annualPercentage: "XX%",
      Offers: [
        "Gift Voucher worth ₹500 on spending ₹ 15,000 in first 3 months",
        "On monthly spends less than ₹20,000, 6x rewards on online spends and 3x rewards on retail store spends",
        "10x rewards on birthdays and on monthly spends > ₹20,000",
        "1.5% Forex markup on international spends",
        " Domestic Airport Lounges, Spas and International Airport lounge- 4 visits per quarter",
        "Upto 2 complimentary Golf rounds in a month",
      ],
    },
  },
  {
    CardId: 2,
    cardFlag: "Hospicash",
    backgroundImage: background2,
    title: "Apply for Group Safeguard Insuarance",
    terms:"https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/Declaration-and-T_C-for-AEM-Journey.html?alt=media&token=ed1fa250-2481-4613-9025-06adc853c200",
    declaration:"https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/Annexure-3_Policy-Wordings-Group-Safeguard-Insurance.html?alt=media&token=0fa66900-ca51-4cd2-81b1-2835f762ed4b",
    subTitle:
      "Please review all the application details carefully before proceeding to apply for the product",
    warning:
      "Please fund your IDFC FIRST account within 24 hours to avoid any rejection to your Group Safeguard insuarance application",
    CardData: {
      cardName: "Group Safegaurd Insuarance",
      cardSubtitle_1:
        "hospitalisation cover of upto ₹3,60,000**  at just ₹2200*",
      cardSubtitle_2: " * inclusive of taxes",
      cardSubtitle_3:
        "** in case of ICU hospitalisation due to accident for 30 days",

      Offers: [
        {
          id: 1,
          offerImg: hospicashOffer1,
          offerData:
            "₹4,000 per day for up to 30 days on completion of 24 hours of hospitalisation",
        },
        {
          id: 2,
          offerImg: hospicashOffer2,
          offerData: "All pre-existing are covered after 30 days",
        },
        {
          id: 3,
          offerImg: hospicashOffer3,
          offerData: "No medical check-up required",
        },
      ],
    },
  },
];

export const dec_banks_data = [
  { id: "1", displayText: "State Bank of India", value: "1" },
  { id: "2", displayText: "Bank of Maharashtra", value: "2" },
  { id: "3", displayText: "Kotak Mahindra Bank", value: "3" },
  { id: "4", displayText: "Axis Bank", value: "4" },
  { id: "5", displayText: "IDBI Bank", value: "5" },
  { id: "6", displayText: "ICICI Bank", value: "6" },
  { id: "7", displayText: "Bank of Baroda", value: "7" },
  { id: "8", displayText: "Canara Bank", value: "8" },
];