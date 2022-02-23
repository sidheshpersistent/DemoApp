import { StyleSheet } from "react-native";
import styled  from "styled-components/native";


export const LoginContainer = styled.View`
    flex:1;
    backgroundColor: #02aecc;
    justify-content: center;
    align-items: center;
`;
export const LoginTitle = styled.View`
    justify-content: center;
    align-items: flex-start;

`;

export const styles = StyleSheet.create({

    
    red: {
        width: 500,
        height: 400,
    },
    loginbox: {
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#e9eff0',
        backgroundColor: 'pink',
        flex: 1
    }
});