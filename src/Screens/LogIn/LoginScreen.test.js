import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';


import LoginScreen from './LoginScreen';
import {credentialMatch, additiom} from './Service/LoginService';

describe('Login Test Module', () => {
    it('Login screen render perfectly', () => {
        const {getByText,getAllByText,getByPlaceholderText} = render(<LoginScreen></LoginScreen>);

        expect(getAllByText('Login to your account')).toHaveLength(1);
        expect(getAllByText('Login')).toHaveLength(1);
        getByPlaceholderText('user name');
        getByPlaceholderText('password');
    });
    it('show invalid error message', () =>{
        const {getByTestId,getAllByText} = render(<LoginScreen></LoginScreen>);
        
        fireEvent.press(getByTestId('signin'));
        getAllByText('invalid user name');
        getAllByText('invalid password');
    })

    it('credential match or not', ()=>{
        let response = credentialMatch("Subrat","password");
        expect(response).toBe(true);
    })

    // it("addition of two numbers", () =>{
    //     let result =  additiom(3,4);
    //     expect(result).toBe(7);
    // })
  });