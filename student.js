document.getElementById("studentName")
.innerHTML =
"Welcome to your Dashboard";

function viewNotes(){

fetch("http://localhost:3000/notes")

.then(res=>res.json())

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