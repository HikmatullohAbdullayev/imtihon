import React from "react";
import logo  from "../../../assets/img/logo.svg"
import {SettingIcon} from '../../../assets/icon/setting'
import {ProfileIcon} from '../../../assets/icon/profile'
import {ShopIcon} from '../../../assets/icon/shop'
import {CardIcon} from '../../../assets/icon/carta'
import styled from "styled-components";
import {COLORS} from '../../../config/colors'

export const NavLeft = () =>{
    return(

        <NavLeftStyle>
            <Logo><img  src={logo} alt="logo" /></Logo>
            <SettingIcon/>
            <ProfileIcon/>
            <ShopIcon/>
            <CardIcon/>

        </NavLeftStyle>
    )
}

const NavLeftStyle = styled.div`
/* position: fixed;
left: 20px;
z-index: -1; */
float: left;
         display: flex;
    justify-content: flex-start;
     align-content:center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: #5B5CE2;
    width: 100px;
    height: 100%;
    color: white;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    height: 100vh;


`
const Logo = styled.a`
padding-bottom: 30px;
`
