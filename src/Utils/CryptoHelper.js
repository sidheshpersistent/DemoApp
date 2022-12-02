import CryptoJS from 'crypto-js';

const encryptionKey = 'IDeCVaBRGoWE1Xb+';

// Used for userid,aadhar and mpin
export const encryptedDataValue = (value) => {
    const key = CryptoJS.enc.Latin1.parse(encryptionKey);
    const concEncryptionString = value;
  
    const str = CryptoJS.AES.encrypt(concEncryptionString, key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  
    return str.toString();
  };

  export const decryptDataValue = (value) => {
    try {
      const key = CryptoJS.enc.Latin1.parse(encryptionKey);
      const str = CryptoJS.AES.decrypt(value, key, {
        iv: key,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
  
      const decryptedData = str.toString(CryptoJS.enc.Utf8);

      return JSON.parse(decryptedData) ;
    } catch (error) {
      return null;
    }
  };

  export const decryptURL = (value) => {
    try {
      const key = CryptoJS.enc.Latin1.parse(encryptionKey);
      const str = CryptoJS.AES.decrypt(value, key, {
        iv: key,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
  
      const decryptedData = str.toString(CryptoJS.enc.Utf8);

      return decryptedData;
    } catch (error) {
      // console.log(error);
    }
  
    return null;
  };
