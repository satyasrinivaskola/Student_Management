const username=document.getElementById("email")
const password=document.getElementById("password")
let ispassword=false
let isusername=false
function btn(){
fetch("http://localhost:3000/yyy")
.then(res=>res.json())
.then(data=>{
data.map((list)=>{
//console.log(list.name)
//console.log(username.value+"typed by user")
if(list.Email.toLowerCase()===username.value.toLowerCase()){
isusername=true
console.log(isusername+"isusername")
//isusername=false
}
if(list.Password.toLowerCase()===password.value.toLowerCase()){
ispassword=true
console.log(isusername+"isusername")
//isusername=false
}



}
)
d()
})

}
function d(){
if(isusername===true &&ispassword===true ){
window.location.href="Student_dashboard.html"
}
else{
alert("Incorrect credentials")}}

function back(){
window.location.href = "Home.html"
}

