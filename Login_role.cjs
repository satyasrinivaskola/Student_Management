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

app.post("/login",async(req,res)=>{
const {email,password}=req.body
const result=await sql.query(`select Email,Password from students_details
where Email='${email}' and Password='${password}'`)
console.log(result.recordset.length)
if(result.recordset.length>0){
res.json({
success:true,
role:result.recordset[0].role})}
else{
res.json({
success:false})
}
//console.log(result.recordset)
}
)

}
data()
app.listen(3000,function (){
console.log("3000 connected")})