DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE comapny_db;

CREATE TABLE department (
  id INT NOT NULL,
  department_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE department_role (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id),
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id),
    REFERENCES department_role(id),
    FOREIGN KEY (manager_id),
    REFERENCES employee(id)
);

--not sure if the last few lines are correct??? Might have referenced incorrectly??