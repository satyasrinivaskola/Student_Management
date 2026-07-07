/*document.getElementById("studentName")
.innerHTML =
"Welcome to your Dashboard";*/

function viewNotes(){

fetch("http://192.168.100.6:5000/notes")

.then(res=>res.text())

.then(data=>{

let output="";

data.forEach(note=>{

output += `
<div>
<h3>${note.title}</h3>
<a href="${note.file}">
Download Notes
</a>
</div>
`;

});

document.getElementById("notesSection")
.innerHTML = output;

});

}

function  back(){
window.location.href="Home.html"}