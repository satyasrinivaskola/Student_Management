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

//Login
app.post("/login",async(req,res)=>{
const {email,password}=req.body
console.log(req.body)
const result=await sql.query(`select Email,Password,role from students_details where Email='${email}' and Password='${password}'`)
console.log(result.recordset.length)
if(result.recordset.length==1){
res.json({
success:true,
role:result.recordset[0].role})}
else{
res.json({
success:false})
}
}
)



//Registration
app.post("/registration", async(req, res) => {

    console.log(req.body.Email);
    const {
    Email,
    lastname,
    firstname,
    contact,
    aadhaar,
    address,
    gender,
    //date,
    qualification,
    college,
    password,
    course
    }=req.body
//const Email=  req.body.Email
const student_rec=await sql.query(`select *from students_details where email='${Email}'`)
  if(student_rec.recordset.length==1){
   res.json({available:true})
   console.log(res.json())
   }
   else{
    res.json({available:false})}
  const result= await sql.query(`insert into students_details(FirstName,LastName,Email,ContactNumber,AadhaarNumber,
Gender,CollegeName,CourseInterested,PassWord)
values('${firstname}','${lastname}','${Email}','${contact}','${aadhaar}',
'${gender}','${college}','${course}','${password}')`)
   //console.log("rec length"+student_rec.recordset.length)
 

});
//admin update
app.put("/registration/:id", async(req, res) => {
  const id = Number(req.params.id);
  
  const {firstname,lastname,aadhaar,address,contact,Email,gender,
  qualification,college,course}=req.body
  
 await sql.query(`update students_details set ContactNumber='${contact}',FirstName='${firstname}'
 ,LastName='${lastname}',AadhaarNumber='${aadhaar}',Gender='${gender}',Qualification='${qualification}',Address='${address}',
 CollegeName='${college}',CourseInterested='${course}'
where Email='${Email}'`)
 
res.send({updated:true})
})
   //console.log("rec length"+student_rec.recordset.length)
 


//Admin
app.get('/Admin',async(req,res)=>{
const result_1=await sql.query("select *from students_details where role='Student'")
const count=await sql.query("select count(*) as count from students_details where role='Student'")
const admin_data=await sql.query("select *from students_details where role='Admin'")
res.send({data:result_1.recordset,
count:count.recordset,
admin_data:admin_data.recordset
})
console.log(result_1.recordset)
})

//Admin delete
app.delete("/Admin/:id",async(req,res)=>{
const id=req.params.id
console.log(id)
console.log("Hello delete")
const r=await sql.query(`select* from students_details where StudentID='${id}'`)
await sql.query(`delete from students_details where StudentID='${id}'`)
  res.json({
        deleted: true,
        message: "Deleted Successfully",
        details:r.recordset[0]
    });
})
app.post('/Admin',async(req,res)=>{
const {Email,Password,role}=req.body
const result=await sql.query(`insert into students_details(Email,Password,role)
values('${Email}','${Password}','${role}')`)

res.json({Email:Email,Password:Password,role:role,edit:true})
console.log(result.recordset)
})

app.post('/Admin/Details',async(req,res)=>{
const id=req.body.id
const result=await sql.query(`select *from students_details where studentid='${id}'`)

res.json(result.recordset)
console.log("admin/details")
})
//add admin

app.post('/addAdmin',async(req,res) => {
const {email,Password,role}=req.body
const addadmin=sql.query(`insert into students_details(Email,Password,role)
values('${email}','${Password}','${role}')`

)
res.json(...{edit:true},addadmin.recordset)
})
//console.log(result.recordset)
}
/*app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});*/

data()
app.listen(3000,()=>{
console.log("Hello i am 3000 port and connected")})


module.exports={sql,config}