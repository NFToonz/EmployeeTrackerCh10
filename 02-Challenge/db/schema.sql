DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

\c department_db;

CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id) --Foreign key and references stay together

); -- every table needs ";" 

CREATE TABLE employees (
    id INTEGER NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    management_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id)
);