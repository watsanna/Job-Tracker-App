CREATE TABLE Login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);


CREATE TABLE Companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    jobTitle VARCHAR(100),
    description TEXT
);


CREATE TABLE Status (
    id INT PRIMARY KEY AUTO_INCREMENT,
    studentId INT,
    companyId INT,
    status VARCHAR(50),
    FOREIGN KEY (studentId) REFERENCES Login(id),
    FOREIGN KEY (companyId) REFERENCES Companies(id)
);