const fileInput=document.getElementById("fileInput")

  const formData = new FormData();
function uploadFile(){
console.log("uploadFile")

const file_data=fileInput.files[0]
 formData.append("file",file_data);
console.log(file_data)
 fetch("http://localhost:3000/upload",{

        method:"POST",

        body:formData

    })
    .then(res=>res.json())
    .then(data=>console.log(data));
}
function  back(){
window.location.href="Home.html"}