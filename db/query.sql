SELECT department.department_name AS department, department_role.title, department_role.salary
FROM department_role
JOIN department ON department_role.department_id = department.id

SELECT employee.first_name, employee.last_name, department_role.title, department_role.department_id, department_role.salary, employee.manager_id
FROM employee
JOIN department_role ON employee.role_id = department_role.id