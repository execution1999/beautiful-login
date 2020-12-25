import React from 'react';
import styled from 'styled-components';

const TabButtonsContainer = styled.div`
    display: flex;
    height: max-content;
    border: 1px solid #5e6ad2;
    border-radius: 5px;
`

const ButtonTab = styled.button`
    width: 160px;
    height: 92px;
    outline: none;
    border: none;
    color: white;
    font-size: 20px;
    background: ${(props) => props.active ? '#5e6ad2' : '#1f2023'};
    border-radius: ${(props) => props.isLeft ? '3px 0 0 3px' : '0 3px 3px 0'};
    &:hover {
        background-color: ${(props) => props.active ? '#4f61ec' : '#1a1c1c'};
    }
`

export const TabButtons = () => {
    return <TabButtonsContainer>
        <ButtonTab active={true} isLeft={true}>
            Sign in
        </ButtonTab>
        <ButtonTab>
            Log in
        </ButtonTab>
    </TabButtonsContainer>
}