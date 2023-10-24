import React from "react";
import noPage from "../../assets/img/not-found.png"
import { Link } from "react-router-dom";

export const NoPage = () =>{

    return(
        <>
            <img src={noPage} alt="noPage" />
                <Link to='/'>
                <button>home</button></Link>
        </>
    )
}