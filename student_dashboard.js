const fileInput=document.getElementById("fileInput")
const uploaded_files=document.getElementById("uploaded_files")
const params=new URLSearchParams(window.location.search)
const email_id=params.get("email")

  const desc_e=document.getElementById("description")
let upload=false
function uploadFile(){
  const formData = new FormData();

  const desc=desc_e.value
console.log("uploadFile")
console.log(email_id)
//console.log(file_data)
const file_data=fileInput.files[0]
//{file:"filedate"}
 formData.append("file",file_data);
  formData.append("email",email_id);
   formData.append("desc",desc);
//console.log(file_data)
 fetch("http://localhost:3000/upload",{

        method:"POST",

        body:formData

    })
    .then(res=>res.text())
    .then(data=>{alert("file uploaded succefully")
    fileInput.value="";
    desc_e.value=""
  
    });
}

//uploaded files button
uploaded_files.addEventListener("click",(()=>{
file_table.innerHTML = "";
alert("files are loading")
fetch("http://localhost:3000/files_h",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email:`${email_id}`})})
.then(res=>res.json())
.then(data=>{
console.log(data)
(data.map((list)=>{
const file_table=document.getElementById("file_table")

let tr_item=document.createElement("tr")

let td_item_1=document.createElement("td")

let td_item_2=document.createElement("td")
const a=document.createElement("a")
a.textContent=list.file_name
console.log(`./uploads/${list.file_name}`)
a.setAttribute("href",`./uploads/${list.file_name}`)
a.setAttribute("target","_blank")
td_item_1.appendChild(a)
td_item_2.textContent=list.description
tr_item.appendChild(td_item_1)
tr_item.appendChild(td_item_2)
//const fileList=document.getElementById("fileList")
file_table.appendChild(tr_item)




}))
})
}))
function  back(){
window.location.href="Home.html"}