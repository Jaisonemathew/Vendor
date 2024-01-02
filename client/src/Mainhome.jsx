import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import BannerBackground from "./download\ \(1\).png";
import "./index"
import { Link, useNavigate } from "react-router-dom";
function Mainhome() {
    const navigate = useNavigate();
    const responseMessage = (response) => {
        alert("Succesfully Logged in");
        navigate("/home");
    
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    
    return (
        
        <div className="login-section">
            <img src={BannerBackground} alt="Banner Background" class="ss"/>
            
 <h2>Login using Google account</h2>
 <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
</div>
    )
}
export default Mainhome;