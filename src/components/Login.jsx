import React from 'react';
import styled from 'styled-components'
import {TabButtons} from "./TabButtons";
import {LabeledInput} from "./LabeledInput";

const SexyDiv = styled.div`
    box-sizing: border-box;
    height: 575px;
    width: 430px;
    padding: 74px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`
const JuicyDiv = styled.div`
    margin-top: 145px;
    
`


export const Login = () => {
    return <LoginContainer>
        <SexyDiv>
            <TabButtons/>
            <JuicyDiv>
                <LabeledInput label={'email'} placeholder={'name@exmaple.com'}/>
                <LabeledInput label={'password'} placeholder={'******'}/>
            </JuicyDiv>
        </SexyDiv>
    </LoginContainer>
};