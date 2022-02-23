import { StyleSheet } from "react-native";
import styled  from "styled-components/native";


export const LoginContainer = styled.ImageBackground`
    flex:1;
    backgroundColor: #02aecc;
    justify-content: center;
    align-items: center;
`;
export const LoginTitle = styled.View`
    justify-content: center;
    align-items: flex-start;

`;
export const LoginBox = styled.View`
    margin-top: 15px;
    border-radius: 10px;
    background-color: #f6f6f6;
    flex: 1;
`;
export const styles = StyleSheet.create({
    red: {
        width: 500,
        height: 400,
    },
});