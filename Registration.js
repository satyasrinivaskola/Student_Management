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


async function  Registration(){
//console.log(date.innerHTML)
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
date:"03-03-2000",
qualification:qualification.value,
college:college.value,
password:password.value,

course:course.value


})}

await fetch("http://localhost:3000/yyy",methods)
.then(res=>res.json())
.then(data=>{console.log(data)
dd()
})
console.log(lastname.value+ee)
}

function dd(){
if(email.value=="satya3@gmail.com"){
console.log(email.value+"email")
window.location.href = "Login.html"; }}
function back(){
window.location.href = "Home.html"
}
