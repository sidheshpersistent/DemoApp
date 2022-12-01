

export const userNameValidate = () =>{

    return true;
}

export const credentialMatch = (userName,password) =>{
    if((userName === "Subrat") && (password === "password")){
        return true;
   }else{
        return false;
   }
   
}

export const additiom = (var1,var2) =>{
    return var1+var2;

}
