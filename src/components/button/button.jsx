import React from "react";
import styled from "styled-components";
import  {COLORS} from "../../config/colors"

export const Button = ({text}) =>{

    return(
        <Buttons>
            {text}
        </Buttons>
    )
}
const Buttons = styled.button`
    color: #FFF;
text-align: center;
font-family: Mulish;
font-size: 15px;
font-weight: 800;
line-height: normal;
    background-color: ${COLORS.secondary};
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 300px;
    margin: 0 auto;
    

`