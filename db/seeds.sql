INSERT INTO role (id, title, salary, department_id)
VALUES 
    (1,'Junior Engineer', 100000, 1),
    (2,'Lead Engineer', 150000, 1),
    (3,'Sales Lead', 90000, 2),
    (4,'Salesperson', 70000, 2),
    (5,'Salesperson', 70000, 2),
    (6,'Software Engineer', 90000, 1),
    (7,'Accountant', 80000, 3),
    (8,'Lawyer', 110000, 4),
    (9,'Legal Team Lead', 12000, 4),
    (10,'Office Manager', 70000, 5);
  
INSERT INTO department (id, name )
VALUES 
(1, 'Engineering'),
(2, 'Sales'),
(3, 'Finance'),
(4, 'Legal'),
(5, 'Office');

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(1, 'Alex', 'Walker', 1, 2),
(2, 'Rocky', 'Balboa', 2, null),
(3, 'Lando', 'Calrissian', 3, null),
(4, 'Han', 'Solo', 4, 3),
(5, 'Travis', 'Bickle', 5, 3),
(6, 'Bruce', 'Wayne', 6, 2),
(7, 'Worf', 'Maximillion', 7, null),
(8, 'Ellen', 'Riply', 8, 9),
(9, 'Amanda', 'Riply', 9, null),
(10, 'Sam', 'Shankle', 10, null);