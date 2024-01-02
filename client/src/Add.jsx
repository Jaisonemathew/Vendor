import React, { useState } from 'react';
import axios from 'axios';

function Add() {
    const [vendor, setVendor] = useState({
        VendorID: '',
        Vendor_name: '',
        Account_no: '',
        Bank_name: '',
        Address_Line1: '',
        Address_Line2: '',
        Zip_Code: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setVendor({
            ...vendor,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/create', vendor)
            .then(response => {
                console.log(response);
                setIsSubmitted(true);
            })
            .catch(error => {
                console.error('Error adding vendor: ', error);
            });
    };

    return (
        <div>
            {isSubmitted && <p>Data added successfully!</p>}
            <h1>Add Vendor</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="VendorID" value={vendor.VendorID} onChange={handleChange} placeholder="Vendor ID" required />
            <input type="text" name="Vendor_name" value={vendor.Vendor_name} onChange={handleChange} placeholder="Vendor Name" required />
            <input type="text" name="Account_no" value={vendor.Account_no} onChange={handleChange} placeholder="Account Number" required />
            <input type="text" name="Bank_name" value={vendor.Bank_name} onChange={handleChange} placeholder="Bank Name" required />
            <input type="text" name="Address_Line1" value={vendor.Address_Line1} onChange={handleChange} placeholder="Address Line 1" required />
            <input type="text" name="Address_Line2" value={vendor.Address_Line2} onChange={handleChange} placeholder="Address Line 2" />
            <input type="text" name="Zip_Code" value={vendor.Zip_Code} onChange={handleChange} placeholder="Zip Code" required />
                <button type="submit">Add Vendor</button>
            </form>
        </div>
    );
}

export default Add;