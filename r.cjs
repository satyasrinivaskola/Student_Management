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
async function data(){
await sql.connect(config)
const result=await sql.query("select *from demo")
app.get("/yyy",async(req,res)=>{
res.send(result.recordset)
})
console.log(result.recordset)
}
app.listen(3000,()=>{
console.log("Hello i am 3000 port and connected")})
data()
