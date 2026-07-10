const sql = require("mssql");

const config = {
   server: process.env.DB_SERVER || 'SATYA-KOLA\\SQLEXPRESS',
    database: process.env.DB_NAME || 'master',
    user: process.env.DB_USER || 'demo1',
    password: process.env.DB_PASSWORD || 'NewPassword@123',

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
role:result.recordset[0].role,
result:result.recordset[0]})}
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
 
//Forget Password

app.put("/forget/:e", async(req, res) => {
  //const email = Number(req.params.e);
  
  const {email,password}=req.body
 const valid_email=await sql.query(`select *from students_details where Email='${email}'`)
  const sql_result=await sql.query(`update students_details
  set Password='${password}' where Email='${email}'`)
  //console.log(sql_result.recordset[0].length)
  console.log(valid_email.recordset.length)
  if(valid_email.recordset.length==1){
res.send({forget:true})}
else{
res.send({forget:false})
}

})

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

//student files

const multer = require("multer");

const storage = multer.diskStorage({

    destination:function(req,file,cb){

        cb(null,"uploads");

    },

    filename:function(req,file,cb){

        cb(null,file.originalname);

    }

});

const upload = multer({storage});

async function startserver(){

try{
await sql.connect(config)
app.post("/upload",
upload.single("file"),
async(req,res)=>{
const f=req.file.originalname
const s_id=req.body.email
const desc=req.body.desc
const s=await sql.query(`insert into student_files(file_name,Studentid,description)

values('${f}','${s_id}','${desc}')`)
    //console.log(req.body);

    //console.log(req.file);

    res.send({status:"Uploaded"});

});
app.post("/files_h",async(req,res)=>{
const email=req.body.email
console.log(email)
const files_h=await sql.query(`select * from student_files
where StudentId='${email}'`)
res.json(files_h.recordset)
})
}
catch(err){
console.log(err)}
 app.listen(3000,()=>{
 console.log("Connected")})

}
startserver()

}
data()
/*app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
*/


app.listen(3000,()=>{
console.log("Hello i am 3000 port and connected")})


module.exports={sql,config}