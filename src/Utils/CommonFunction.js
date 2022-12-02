

export const getDateInObject = (date) => {
    if (date) {
        var dateObject;
        var dateString = date.split(',')[0] + ",";
        var yearString = (date.split(',')[1]).substring(0, 4);
        var timeString = date.split(' ')[2];
        var meridiemString = date.split(' ')[3];
        dateObject = {
            dateString: dateString,
            yearString: yearString,
            timeString: timeString,
            meridiemString: meridiemString
        }
        return dateObject;
    }
    return;
}
export const convertDateTo_dd_MM_YYYY=(dateStr)=>{
   let dArr = dateStr.split("-");
   return dArr[2]+"-"+dArr[1]+"-"+dArr[0];
}

export const getPrivateString =(str)=>{
    if(str){
      let privateStr = str.replace(/\S(?=\S{4})/g, "*");
      return privateStr;
    }
  }