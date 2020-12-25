import React from "react";
import {Login} from "./components/Login";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    background-color: #1f2023;
  }
`
export const App = () => {
    return <div>
        <GlobalStyle/>
        <Login/>
    </div>
}