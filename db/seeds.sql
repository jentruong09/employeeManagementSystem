-- to pre-populate the database 
-- reference seeds.sql from activity 12-12
INSERT INTO department (department_name)
VALUES ('Engineering'), 
       ('Finance'), 
       ('Legal'), 
       ('Sales'),
       ('HR'),
       ('Executive');

INSERT INTO department_role (title, department_id, salary)
VALUES ('Lead Engineer', 1, 150000), 
       ('Salesperson', 4, 90000), 
       ('Accountant', 2, 110000), 
       ('Junior Accountant', 2, 65000), 
       ('Paralegal', 3, 58000),
       ('Lawyer', 3, 130000), 
       ('Senior Accountant', 2, 160000), 
       ('Sales Manager', 4, 130000), 
       ('Human Resource Manager', 5, 100000), 
       ('Human Resource Coordinator', 5, 55000), 
       ('Software Engineer', 1, 120000), 
       ('QA Engineer', 1, 85000); 


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ben', 'Smith', 1, NULL),
       ('Elizabeth', 'Porter', 6, NULL),
       ('Hailee', 'Caffrey', 3, 11),
       ('Simon', 'Lee', 2, 8),
       ('Jack', 'McKay', 12, 1),
       ('Kevin', 'Steinfeld', 4, 11),
       ('Samuel', 'Gomez', 9, NULL),
       ('Rose', 'Goo', 8, NULL),
       ('Jackson', 'Darling', 11, 1),
       ('Dean', 'Sloan', 5, 2),
       ('Leah', 'Lewis', 7, NULL),
       ('Sarah', 'Daniels', 10, 7);