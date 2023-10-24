import React from "react";
// import { Header } from "../header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { NavLeft } from "./nav-left/nav-left";
import styled from 'styled-components'

export const MainLayout = ()=>{

    return(
        <Wrapper>
           <AllBox>
          
            <section>
             <NavLeft/>
            </section>
            {/* <Clear/> */}
            <Content>
                <Outlet/>
            </Content>
           </AllBox>
            <footer>
                <Footer/>
            </footer>
        
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1300px;
    height: 100vh;
    margin: 0 auto;
   

`

const AllBox =styled.div`
display: flex;
justify-content:start;
align-items: start;


`

const Content = styled.main`




`

const Clear = styled.div`
clear: both;

`


