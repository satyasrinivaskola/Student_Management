const input=document.getElementById("input_e")
function submit(){
console.log("Hello submit")
const user={mes:input.value}
const methods={
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(user)
}
fetch("http://localhost:3000/result",methods)
.then(res=>res.json()
.then(data=>console.log(data)))}