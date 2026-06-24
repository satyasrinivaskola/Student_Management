const sql=require('mssql')
const config={
server:"SATYA-KOLA\\SQLEXPRESS",
database:"master",
user:"demo1",
password:"NewPassword@123",
options:{
trustServerCertificate:true,
}
}


const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
async function data(){
await sql.connect(config)
app.post('/result',async(req,res)=>{
const d=await req.body.mes
console.log(d)
await sql.query(`insert into demo(name)values('${d}')`)
})

}

data()
app.listen(3000,function(){
console.log("3000 connected")})