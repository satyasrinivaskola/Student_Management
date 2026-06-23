function Registered(){

    fetch("http://localhost:3000/register",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            firstname:document.getElementById("firstname").value,

            lastname:document.getElementById("lastname").value,

            email:document.getElementById("email").value,

            contact:document.getElementById("contact").value,

            aadhaar:document.getElementById("aadhaar").value,

            address:document.getElementById("address").value,

            qualification:document.getElementById("qualification").value,

            course:document.getElementById("course").value,

            password:document.getElementById("password").value

        })

    })

    .then(res => res.text())

    .then(data => {

        console.log(data);

        alert(data);

    })

    .catch(err => {

        console.log(err);

    });

}

//Registered()