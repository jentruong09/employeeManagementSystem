-- to pre-populate the database 
-- reference seeds.sql from activity 12-12
INSERT INTO department (department_name)
VALUES (Engineering), 
       (Finance), 
       (Legal), 
       (Sales),
       (HR);

INSERT INTO department_role (title, department_id, salary)
VALUES ('Lead Engineer', 1, 150000), --1
       ('Salesperson', 4, 90000), --2
       ('Accountant', 2, 110000), --3
       ('Junior Accountant', 2, 65000), --4
       ('Paralegal', 3, 58000),
       ('Lawyer', 3, 130000), --6
       ('Senior Accountant', 2, 160000), --7
       ('Sales Manager', 4, 130000), --8
       ('Human Resource Manager', 6, 100000), --9
       ('Human Resource Coordinator', 6, 55000), --10
       ('Software Engineer', 1, 120000), --11
       ('QA Engineer', 1, 85000); --12


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ben', 'Smith', 1, NULL),
       ('Elizabeth', 'Porter', 6, NULL),
       ('Hailee', 'Caffrey', 3, 11),
       ('Simon', 'Lee', 2, 8), 
       ('Jack', 'McKay', 12, 1),
       ('Kevin', 'Steinfeld', 4, 11),
       ('Samuel', 'Gomez', 9, NULL),
       ('Rose', 'Goo', 8, NULL),
       ('Jackson', 'Darling',11, 1),
       ('Dean', 'Sloan',5, 2),
       ('Leah', 'Lewis', 7, NULL),
       ('Sarah', 'Daniels', 10, 7);