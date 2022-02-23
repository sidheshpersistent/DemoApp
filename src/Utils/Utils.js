import moment from 'moment';

const Utils = {
  customDatePassport: data => {
    return moment(new Date(data)).format('DD/MM/YYYY');
  },
  customeDateMinus: data => {
    return moment(new Date(data)).format('DD-MM-YYYY');
  },
  customeDateMinusYMD: data => {
    return moment(new Date(data)).format('YYYY-MM-DD');
  },
  customeDateYMDtoDMY: data => {
    return moment(data, 'DD-MM-YYYY').format('YYYY-MM-DD');
  },
  customDateFormat: data => {
    return moment(new Date(data)).format('DD MMMM,YYYY');
  },
  customDateDL: data => {
    return moment(data, 'DD-MM-YYYY').format('DD MMMM,YYYY');
  },
  customDate: data => {
    return moment(data, 'DD-MM-YYYY').format('DD MMMM,YYYY');
  },
  customDateStateMachine: data => {
    return moment(data, 'YYYY-MM-DD').format('DD MMMM,YYYY');
  },
  getDlDdate: data => {
    var dateStr = '';
    try {
      let dateArr = data.split(' ');
      if (dateArr.length === 3) {
        dateStr = dateArr[2];
      } else if (dateArr.length === 1 && data.length === 10) {
        dateStr = data;
      }
    } catch (e) {}
    return dateStr;
  },
  checkFullDate: data => {
    if (data.length === 4) {
      return moment(moment(data, 'YYYY')).format('YYYY');
    } else {
      return moment(moment(data, 'YYYY-MM-DD')).format('DD MMMM,YYYY');
    }
  },
  getAddrLine40: data => {
    var addrStr = null;
    if (data?.length > 0) {
      if (data?.length > 40) {
        addrStr = data.slice(0, 40);
      } else {
        addrStr = data;
      }
    }
    return addrStr;
  },
  getAddrLine80: data => {
    var addrStr = null;
    if (data?.length > 40) {
      addrStr = data.slice(40, 80);
    }
    return addrStr;
  },
  getNameLen50: data => {
    var name = null;
    if (data?.length > 0) {
      if (data?.length > 50) {
        name = data.slice(0, 50);
      } else {
        name = data;
      }
    }
    return name;
  },
  getAge(dateString) {
    var age = 0;
    try {
      if (dateString?.length > 0) {
        var today = new Date();
        var birthDate = new Date(dateString);
        age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
      }
    } catch (e) {}
    return age;
  },
  getIndexByValue(value, array) {
    if (array.length > 0 && value !== null) {
      return array.indexOf(value) + 1;
    }
    return 0;
  },
  isNullEmpty(obj) {
    if (obj === null || obj === '') {
      return '';
    }
    return obj;
  },
  getFormattedDate(date, format) {
    let value = Date.parse(date);
    let formattedDate = moment(value).format(format);
    return formattedDate;
  },
  getValueByArray(value, array) {
    if (array.length > 0) {
      let [data] = array.filter(
        text => text?.documentName?.toLowerCase() === value.toLowerCase(),
      );
      return data?.uniqueName;
    }
    return '';
  },
};

export default Utils;
