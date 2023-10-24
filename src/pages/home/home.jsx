import React from "react";
import homeImg from "../../assets/img/home-img.png"
import styled from "styled-components";
import {Button} from "../../components/button/button.jsx"
import { Link } from "react-router-dom";
export const Home = () =>{

    return(
        <>
          <HomeTop>
                <div>
                    <h2>
                    Товары
                    </h2>
                    <p>
                    Главная/Товары
                    </p>
                </div>
                <div>
                    <button>Выйти</button>
                </div>

            </HomeTop>
            <HomeContent>
            <h2>Вы пока не создали ни одного товара</h2>
             <img src={homeImg} alt="img" />
                <Link to="/post" >
                
             <Button text="Создать первый товар" > </Button>
                </Link>
            </HomeContent>
        
        
        </>
    )
}



const HomeTop = styled.section`
display:  flex;
justify-content: space-between;
align-items: center;
width: 1100px;
max-width: 100%;
background-color: #fff;
padding-left: 40px;
padding-bottom: 10px;

button{
    border: none;
    outline: transparent;
    padding: 10px 16px;
    background-color:#e3e3ea9c;
    border-radius: 8px;
    color: #212121;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 72%; /* 10.08px */
cursor: pointer;
}
p{
    padding-top: 4px;
    color: #B5B5C3;
font-family: Mulish;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 21px; /* 161.538% */
}
`

const HomeContent = styled.section`
gap: 65px;
text-align: center;
margin-left: auto;
margin-right: auto;
width: 1100px;
max-width: 100%;
margin: 45px;
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;

h2{
    padding-top: 30px;
    max-width:100%; 
    /* width: 350px; */
    text-align: center;
    margin: 0 auto;
}
img{
    width: 300px;
    margin:  0 auto;
    
}
button{
   
}
`