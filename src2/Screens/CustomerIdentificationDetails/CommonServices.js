import {aadharBase64String } from "./constants";
export const getDummy_random_adharname = (aadharNameList) => {
    return aadharNameList[Math.floor(Math.random() * aadharNameList.length)].name;
}

export const getAadharDetails=(aadharNo,aadharNameList)=>{
    let dummyAdharList = [{
      adharNumber: "557243072931",
      name: "Piyush Ashokrao Modokar",
      avator: aadharBase64String,
      gender: "M",
      state: "Maharashtra",
      pincode: "444108",
      location: "Akola",
      dob: "01-06-1990",
      age:"32",
      addressLn1: "Yogeshwar Colony,Near hanuman Temple",
      addressLn2: "Telhara",
    },
    {
      adharNumber: "633321055816",
      name: "Nagnath Mahadev Pawar",
      avator: aadharBase64String,
      gender: "M",
      state: "Maharashtra",
      pincode: "413253",
      location: "Solapur",
      dob: "01-06-1990",
      age:"32",
      addressLn1: "Pandharpur",
      addressLn2: "Pandharpur",
    },
    {
      adharNumber: "882500280069",
      name: "Subrat Kumar Bal",
      avator: aadharBase64String,
      gender: "M",
      state: "Odisha",
      pincode: "755019",
      location: "Jajpur",
      dob: "01-09-1989",
      age:"33",
      addressLn1: "Dolipur, jhatia sahi",
      addressLn2: "Jajpur road,Jajpur", 
    },{
      adharNumber: "327203910322",
      name: "Meghana T",
      avator: aadharBase64String,
      gender: "F",
      state: "Karnataka",
      pincode: "560020",
      location: "Bangalore",
      dob: "21-08-1991",
      age:"31",
      addressLn1: "Near chinnaswammy stadium",
      addressLn2: "Bangalore", 
    },{
      adharNumber: "288391987782",
      name: "Siddhi Agarwal",
      avator: aadharBase64String,
      gender: "F",
      state: "Madhya Pradesh",
      pincode: "462023",
      location: "Bhopal",
      dob: "02-03-1999",
      age:"23",
      addressLn1: "LIG 251",
      addressLn2: "Bharto niketan colony", 
    },{
      adharNumber: "775713862620",
      name: "Rohit Namdev Babar",
      avator: aadharBase64String,
      gender: "M",
      state: "Maharashtra",
      pincode: "411051",
      location: "Pune",
      dob: "08-09-1993",
      age:"28",
      addressLn1: "WING-B,FLAT N0-6,UJJWAL ANGAN SOCIETY,KARTIKINAGAR,SINHGAD ROAD",
      addressLn2: "VITTHALWADI,PUNE", 
    },{
      adharNumber: "536392283526",
      name: "Ayush Mishra",
      avator: aadharBase64String,
      gender: "M",
      state: "Uttar Pradesh",
      pincode: "221107",
      location: "Varanasi",
      dob: "26-06-1998",
      age:"24",
      addressLn1: "Ghamhapur,Varanasi",
      addressLn2: "Varanasi", 
    },{
      adharNumber: "698657327383",
      name: "Kapil Shravan Kumawat",
      avator: aadharBase64String,
      gender: "M",
      state: "Maharashtra",
      pincode: "431009",
      location: "Aurangabad",
      dob: "27-08-1988",
      age:"34",
      addressLn1: "Plt no-47,Shambhu Nagar",
      addressLn2: "Garkheda parisar Aurangabad Maharashtra.",
    },{
      adharNumber: "487335348075",
      name: "Neelesh Rajendra Atale",
      avator: aadharBase64String,
      gender: "M",
      state: "Maharashtra",
      pincode: "411057",
      location: "Pune",
      dob: "10-06-1993",
      age:"29",
      addressLn1: "seven hills homes",
      addressLn2: "Laxmi chowk hinjewadi pune.",
    }];
    let adharDetails = dummyAdharList.find(
      (obj) => obj.adharNumber === aadharNo
    )
    if(adharDetails){
      return adharDetails
    }
    else{
      return{
        adharNumber: aadharNo,
        name: getDummy_random_adharname(aadharNameList),
        avator: aadharBase64String,
        gender: "M",
        state: "Maharashtra",
        pincode: "462023",
        location: "pune",
        dob: "08-09-1993",
        age:"23",
        addressLn1: "Sinhgad road",
        addressLn2: "Narhe", 
    }
  }
}