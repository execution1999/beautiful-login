import React from 'react';
import styled from "styled-components";

const Label = styled.label`
    color: white;
    margin-bottom: 8px;
    font-size: 16px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    &:first-child {
        margin-bottom: 44px;
    }
`

const Input = styled.input`
    width: 320px;
    height: 48px;
    padding: 0 15px;
    line-height: 48px;
    border: 1px solid #5e6ad2;
    border-radius: 5px;
    box-sizing: border-box;
    background: #1f2023;
    color: white;
    font-size: 16px;
    outline: none;
    &:focus{
      box-shadow: 1px 1px 10px 5px #5e6ad2;
    }
`

export const LabeledInput = (props) => {
    return <InputContainer>
        <Label>
            {props.label}
        </Label>
        <Input placeholder={props.placeholder}/>
    </InputContainer>
}