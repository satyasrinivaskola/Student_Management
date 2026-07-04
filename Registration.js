const firstname=document.getElementById("firstname")
const lastname=document.getElementById("lastname")
const email=document.getElementById("email")
const contact=document.getElementById("contact")
const aadhaar=document.getElementById("aadhaar")
const address=document.getElementById("address")
const gender=document.getElementById("gender")
const date=document.getElementById("date")
const qualification=document.getElementById("qualification")
const college=document.getElementById("college")
const course=document.getElementById("course")
const password=document.getElementById("password")
const confirmpassword=document.getElementById("confirmpassword")
const params=new URLSearchParams(window.location.search)
const email_para=params.get("email")
const Register=document.getElementById("Register")
const edit=params.get("edit")
console.log(email_para)
console.log(edit)

console.log(email.innerHTML=email_para)
function data(){
if(edit){
Back.addEventListener("click",function(){
window.location.href="Admin.html"}
)
Register.textContent="Update"
console.log("HEllo True")
email.value=email_para
email.readOnly=true
password.disabled=true
confirmpassword.disabled=true
}}
data()
async function  Registration(){

const methods={
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({Email:email.value,
lastname:lastname.value,
firstname:firstname.value,
contact:contact.value,
aadhaar:aadhaar.value,
address:address.value,
gender:gender.value,
date:'23-07-2000',
qualification:qualification.value,
college:college.value,
password:password.value,
course:course.value,


})}


await fetch("http://localhost:3000/registration",methods)
.then(res=>res.json())
.then(data=>{
console.log(data)

if(data.available){
if(edit){
alert ("Admin Registration Updated")
window.location.href = "Login_role.html"
}
else{
window.alert("Already availblae")
window.location.href = "Login_role.html"}
}
else{
alert ("User Registration Completed")
window.location.href = "Home.html"
}

})



}

function back(){
window.location.href = "Home.html"
}

