import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import useSession from "../../App/useSession";
import { ProfileHeaderContainer } from "../../Components";
import CustomProgressBar from "../../Components/CustomProgressBar/CustomProgressBar";
import { Account_Type, timeoutConst } from "../../Utils/Constants";
import { CustomerName, header, image, NameAndAge, NameAndGender, ProgressHeaderContainer } from "./styled";

const UserContainer = () => {

  const { session, setSession } = useSession();
  const { progressLoader, } = session
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  }, [progressLoader])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoad(false)
    }, 3000);
    return () => {
      clearTimeout(timeOut)
    }

  }, [progressLoader])
  return (
    <ProgressHeaderContainer>
      <ProfileHeaderContainer
        style={header}
        maxContainerHeight={200}
        leftView={
          <View>
            {/* {session.adharDetails?.avator != "" ? */}
            <Image style={image} source={require("../../Assets/Images/user_image.png")} />
            {/*  : null } */}
          </View>
        }
        rightView={
          <NameAndGender>
            <CustomerName style={capitalizeText}>{"Sidhesh M"}</CustomerName>
            <View style={{ flexDirection: "row" }}>
              <NameAndAge>{"27"}</NameAndAge>
              <NameAndAge>|</NameAndAge>
              <NameAndAge>{"Male"}</NameAndAge>
            </View>
          </NameAndGender>
        }
      />

      <CustomProgressBar progressValue={session.progressPercent} progressLoader={load} />

    </ProgressHeaderContainer>
  );
};

export default UserContainer;
const capitalizeText = {
  textTransform: 'capitalize'
};