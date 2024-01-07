const express  = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
app.use(cors())
app.use(express.json())

const PORT  = process.env.PORT||4000
mongoose.connect("mongodb+srv://ajith1323:Achanamma@cluster0.3jql3om.mongodb.net/Vendors?retryWrites=true&w=majority")
.then(()=>{
    console.log("connect to DB")
    app.listen(PORT,()=>console.log("Server is running"))
})
.catch((err)=>console.log(err))

//schema

const Schema=mongoose.Schema

const DetailsSchema = new Schema({
    id:{
        type:String
    },
    Vendor_name:{
        type:String
    },
    Account_no:{
        type:String
    },
    Bank_name:{
        type:String
    },
    Address_Line1:{
        type:String
    },
    Address_Line2:{
        type:String
    },
    Zip_Code:{
        type:String
    }
})
const VendorData=mongoose.model('VendorData',DetailsSchema)

app.use(express.static(path.join(__dirname, 'client/build')));


// read
// ​ http://localhost:8080/
app.get("/vendor",async(req,res)=>{
    const data = await VendorData.find({})
    res.json({success : true , data : data})
})  

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



//create data || save data in mongodb
//http://localhost:8080/create
/*
{
    name,
    email,
    mobile
}
*/
app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new VendorData(req.body)
    await data.save()
    res.send({success : true, message : "data save successfully" , data : data})
})

//update data 
// http://localhost:8080/update
/**
 *  {
 *      id :"",
 *      name : "",
 *      email : "",
 *       moible : ""
 * }
 */

app.put("/update",async(req,res)=>{
    console.log(req.body)
    const { _id,...rest} = req.body 

    console.log(rest)
    const data = await VendorData.updateOne({ _id : _id},rest)
    res.send({success : true, message : "data update successfully", data : data})
})

//delete api
// http://localhost:8080/delete/id
app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await VendorData.deleteOne({_id : id})
    res.send({success : true, message : "data delete successfully", data : data})
})





