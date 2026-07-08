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

--To create student files

create table student_files(
file_name varchar,
StudentId int,
 foreign key(StudentId)  references students_details(StudentID))

 select * from students_details
SELECT * FROM dbo.Students_details WHERE Email = 'priya@gmail.com';
select *from demo
sp_help student_files
select * from student_files
alter table student_files
alter column 
drop constraint FK__student_f__Stude__5DEAEAF5
alter table student_files 
alter column file_name varchar(250)
sp_help students_details
alter table student_files
add foreign key(Studentid) references students_details(email)