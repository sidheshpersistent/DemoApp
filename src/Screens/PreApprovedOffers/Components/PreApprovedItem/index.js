import React from "react";


import CreditCard from "../CreditCard";
import Hospicash from "../Hospicash";
import JeevanJyoti from "../JeevanJyoti";
import SurakshaBima from "../SurakshaBima";



const Item = ({ item }) => {
  return (
    <>
      {
        item.type == "credit" ? <CreditCard item={item} /> :
          item.type == "hospi" ? <Hospicash item={item} /> :
            item.type == "jj" ? <JeevanJyoti item={item} /> :
              item.type == "sb" ? <SurakshaBima item={item} /> :
                null
      }
    </>
  );
};





export default Item;
