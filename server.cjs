const express = require("express");
const { sql, config } = require("./db.cjs");

const app = express();

app.use(express.json());

app.post("/register", async (req, res) => {

    try {

        console.log("REGISTER API HIT");
        console.log(req.body);

        const {
            firstname,
            lastname,
            email,
            contact,
            aadhaar,
            address,
            qualification,
            course,
            password
        } = req.body;

        await sql.query(`
        INSERT INTO Students_details
        (
            FirstName,
            LastName,
            Email,
            ContactNumber,
            AadhaarNumber,
            Address,
            Qualification,
            CourseInterested,
            Password
        )
        VALUES
        (
            '${firstname}',
            '${lastname}',
            '${email}',
            '${contact}',
            '${aadhaar}',
            '${address}',
            '${qualification}',
            '${course}',
            '${password}'
        )
        `);

        res.send("Student Registered Successfully");

    }
    catch(err){

        console.log(err);

        res.status(500).send(err.message);

    }

});

async function startServer(){

    try{

        await sql.connect(config);

        console.log("SQL Connected");

        app.listen(3000,()=>{

            console.log("Server Running On Port 3000");

        });

    }
    catch(err){

        console.log("Database Connection Error:",err);

    }

}

startServer();