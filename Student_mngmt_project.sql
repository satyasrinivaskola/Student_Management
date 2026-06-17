CREATE TABLE Students_details
(
    StudentID INT IDENTITY(1,1) PRIMARY KEY,

    FirstName VARCHAR(100),
    LastName VARCHAR(100),

    Email VARCHAR(150) UNIQUE,

    ContactNumber VARCHAR(15),

    AadhaarNumber VARCHAR(12),

    Address VARCHAR(500),

    Gender VARCHAR(20),

    DOB DATE,

    Qualification VARCHAR(100),

    CollegeName VARCHAR(200),

    CourseInterested VARCHAR(100),

    Password VARCHAR(100),

    CreatedDate DATETIME DEFAULT GETDATE()
);


INSERT INTO Students_details
(
    FirstName,
    LastName,
    Email,
    ContactNumber,
    AadhaarNumber,
    Address,
    Gender,
    DOB,
    Qualification,
    CollegeName,
    CourseInterested,
    Password
)
VALUES
(
    'Satya',
    'Kola',
    'satya@gmail.com',
    '9876543210',
    '123456789012',
    'Kakinada, Andhra Pradesh',
    'Male',
    '2000-05-15',
    'B.Tech',
    'KIET College',
    'Full Stack Development',
    'Satya@123'
);

INSERT INTO Students_details
(
    FirstName,
    LastName,
    Email,
    ContactNumber,
    AadhaarNumber,
    Address,
    Gender,
    DOB,
    Qualification,
    CollegeName,
    CourseInterested,
    Password
)
VALUES
(
    'Ravi',
    'Kumar',
    'ravi@gmail.com',
    '9876543211',
    '123456789013',
    'Rajahmundry, Andhra Pradesh',
    'Male',
    '1999-08-20',
    'B.Sc',
    'Aditya Degree College',
    'Python Development',
    'Ravi@123'
);

INSERT INTO Students_details
(
    FirstName,
    LastName,
    Email,
    ContactNumber,
    AadhaarNumber,
    Address,
    Gender,
    DOB,
    Qualification,
    CollegeName,
    CourseInterested,
    Password
)
VALUES
(
    'Priya',
    'Sharma',
    'priya@gmail.com',
    '9876543212',
    '123456789014',
    'Visakhapatnam, Andhra Pradesh',
    'Female',
    '2001-03-10',
    'B.Com',
    'Gayatri College',
    'Digital Marketing',
    'Priya@123'
);

INSERT INTO Students_details
(
    FirstName,
    LastName,
    Email,
    ContactNumber,
    AadhaarNumber,
    Address,
    Gender,
    DOB,
    Qualification,
    CollegeName,
    CourseInterested,
    Password
)
VALUES
(
    'Anil',
    'Reddy',
    'anil@gmail.com',
    '9876543213',
    '123456789015',
    'Vijayawada, Andhra Pradesh',
    'Male',
    '1998-11-25',
    'MCA',
    'SRKR Engineering College',
    'React JS',
    'Anil@123'
);

select*from Students_details