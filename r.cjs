const sql = require("mssql");

const config = {
    server: 'SATYA-KOLA\\SQLEXPRESS',
    database: 'master',
    user: 'demo1',
    password: 'NewPassword@123',

    options:{
        trustServerCertificate:true,
        encrypt:false
    }
};
const express=require('express')
const app=express()
const cros=require('cors')
app.use(cros())
app.use(express.json());
async function data(){
await sql.connect(config)
const result=await sql.query("select Email,Password from students_details")
app.get("/yyy",async(req,res)=>{
res.send(result.recordset)
})
app.post("/yyy", (req, res) => {
    console.log(req.body.Email);
    const {
    Email,
    lastname,
    firstname,
    contact,
    aadhaar,
    address,
    gender,
    date,
    qualification,
    college,
    password,
    course
    }=req.body
//const Email=  req.body.Email
  sql.query(`insert into students_details(FirstName,LastName,Email,ContactNumber,AadhaarNumber,
Gender,DOB,CollegeName,CourseInterested,PassWord)
values('${firstname}','${lastname}','${Email}','${contact}','${aadhaar}',
'${gender}','${date}','${college}','${course}','${password}')`)
   
});

//console.log(result.recordset)
}
app.listen(3000,()=>{
console.log("Hello i am 3000 port and connected")})
data()
