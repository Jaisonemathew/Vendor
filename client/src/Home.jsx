import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import "./index"
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from "axios";
import Formtable from './components/Formtable';
import Login from './Login';
axios.defaults.baseURL = "/";

function Home() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    Vendor_name: "",
    Account_no: "",
    Bank_name: "",
    Address_Line1: "",
    Address_Line2: "",
    Zip_Code: ""
  });

  const [formDataEdit, setFormDataEdit] = useState({
    Vendor_name: "",
    Account_no: "",
    Bank_name: "",
    Address_Line1: "",
    Address_Line2: "",
    Zip_Code: ""
    
  });

  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target; // Extract 'value' and 'name' from the event target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value // Use 'name' to dynamically update the state
    }));
  };
  



  const handleSubmit = async(e)=>{
      e.preventDefault()
      const data = await axios.post("/create",formData)
      console.log(data)
      if(data.data.success){
          setAddSection(false)
          alert(data.data.message)
          getFetchData()
          setFormData({
            Vendor_name : "",
            Account_no : "",
            Bank_name : "",
            Address_Line1 : "",
            Address_Line2 : "",
            Zip_Code:""
          })

      }
  }
  const getFetchData = async()=>{
    const data = await axios.get("/vendor")
    console.log(data)
    if(data.data.success){
        setDataList(data.data.data)
    }
  }
  useEffect(()=>{
    getFetchData()
  },[])

  
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
  
    if (confirmDelete) {
      const data = await axios.delete("/delete/" + id);
      if (data.data.success) {
        getFetchData();
        alert(data.data.message);
      }
    }
  };
  

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/update",formDataEdit)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }
  }
  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prevDataEdit) => ({
      ...prevDataEdit,
      [name]: value
    }));
  };
  
  
  const handleEdit = (el)=>{
    setFormDataEdit(el)
    setEditSection(true)
  }
  const responseMessage = (response) => {
        
    
 
 };
 const errorMessage = (error) => {
     console.log(error);
 };

 return (
    <div>
      <br/>
          <Login />

   
    <div className="container">
   
  <button className="btn btn-add" onClick={() => setAddSection(true)}>Add</button>
  {addSection && (
    <Formtable
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
      handleclose={() => setAddSection(false)}
      rest={formData}
    />
  )}

  {editSection && (
    <Formtable
      handleSubmit={handleUpdate}
      handleOnChange={handleEditOnChange}
      handleclose={() => setEditSection(false)}
      rest={formDataEdit}
    />
  )}

  <div className='tableContainer'>
    <table>
      <thead>
        <tr>
          <th>Vendor_Name</th>
          <th>Bank_Name</th>
          <th>Account_no</th>
          <th>AddressLine1</th>
          <th>AddressLine2</th>
          <th>Zip_Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataList.length > 0 ? (
          dataList.map((el) => (
            <tr key={el._id}>
              <td>{el.Vendor_name}</td>
              <td>{el.Bank_name}</td>
              <td>{el.Account_no}</td>
              <td>{el.Address_Line1}</td>
              <td>{el.Address_Line2}</td>
              <td>{el.Zip_Code}</td>
              <td>
                <button className='btn btn-edit' onClick={() => handleEdit(el)}>Edit</button>
                <button className='btn btn-delete' onClick={() => handleDelete(el._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" style={{ textAlign: 'center' }}>No data</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
</div>
);
}

export default Home;