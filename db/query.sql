SELECT department_role.id, department.department_name AS department, department_role.title AS title, department_role.salary AS salary
FROM department_role
JOIN department ON department_role.department_id = department.id;

SELECT employee.id, employee.first_name AS firstName , employee.last_name AS lastName, department_role.title AS title, department.department_name AS department, department_role.salary AS salary, employee.manager_id AS manager
FROM employee
JOIN department_role ON employee.role_id = department_role.id
JOIN department ON department_role.department_id = department.id;

-- not sure how to make the manager name pop up instead or # - revisit
--JOIN employee AS employee_manager ON CONCAT(employee.first_name,'', employee.last_name) = employee.manager_id;