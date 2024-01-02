import React from 'react';
import { MdClose } from 'react-icons/md';
import '../App.css';

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="Vendor_name">Vendor Name:</label>
        <input
          type="text"
          id="Vendor_name"
          name="Vendor_name"
          onChange={handleOnChange}
          value={rest.Vendor_name}
        />

        <label htmlFor="Account_no">Account Number:</label>
        <input
          type="text"
          id="Account_no"
          name="Account_no"
          onChange={handleOnChange}
          value={rest.Account_no}
        />

        <label htmlFor="Bank_name">Bank Name:</label>
        <input
          type="text"
          id="Bank_name"
          name="Bank_name"
          onChange={handleOnChange}
          value={rest.Bank_name}
        />

        <label htmlFor="Address_Line1">Address Line 1:</label>
        <input
          type="text"
          id="Address_Line1"
          name="Address_Line1"
          onChange={handleOnChange}
          value={rest.Address_Line1}
        />

        <label htmlFor="Address_Line2">Address Line 2:</label>
        <input
          type="text"
          id="Address_Line2"
          name="Address_Line2"
          onChange={handleOnChange}
          value={rest.Address_Line2}
        />

        <label htmlFor="Zip_Code">Zip Code:</label>
        <input
          type="number"
          id="Zip_Code"
          name="Zip_Code"
          onChange={handleOnChange}
          value={rest.Zip_Code}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formtable;

