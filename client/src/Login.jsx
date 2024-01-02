import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import "./index"
import VendorList from './Vendorlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const responseMessage = (response) => {
        navigate("/home");
    
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>Login As</h2>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default Login;