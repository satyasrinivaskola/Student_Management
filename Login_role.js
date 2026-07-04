const username=document.getElementById("email")
const password=document.getElementById("password")

function btn(event){
event.preventDefault()
const user={
email:username.value,
password:password.value}
const methods={
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify(user)
}
console.log("Hello")
fetch("http://localhost:3000/login",methods)
.then (res=>res.json())
.then(data=>{if(data.success){
if(data.role==="Admin"){
alert("Login succefully Admin")
window.location.href="admin.html"
}
else{
alert("Login succefully Student")
window.location.href="Student_dashboard.html"
}
}
})

}

/*

function btn(){
console.log("Hello")

fetch("http://localhost:3000/login",methods)
.then(res=>res.json())
.then(data=>{
console.log(data)
console.log("Hello Login")

if(data.role==='Admin'){
window.location.href='Admin.html'
}
else{
window.location.href='student_dashboard.html'}
}

)

}

function d(){
if(isusername===true &&ispassword===true ){
window.location.href="Student_dashboard.html"
}
else{
alert("Incorrect credentials")}}
function Admin(){

}*/
function back(){
window.location.href = "Home.html"
}

