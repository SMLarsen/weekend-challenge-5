--DROP TABLE employees;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(80),
    employee_id character varying(15),
    salary numeric(15,2),
    title character varying(80),
    status character varying(10)
);

-- Short Data
INSERT INTO employees (first_name, last_name, employee_id, salary, title, status)
VALUES
('Noah', 'Smith', 5900864, 191000, 'Application Developer', 'Active'),
( 'Ethan',  'Williams', 5715139, 175000, 'Applications Engineer', 'Active'),
( 'Mason',  'Jones', 5214829, 144000,  'Associate Developer', 'Active'),
( 'Lucas',  'Brown', 5384113, 46000, 'Chief Technology Officer (CTO)', 'Active'),
( 'Oliver', 'Davis', 5501765, 156000,  'Chief Information Officer (CIO)', 'Active'),
( 'Benjamin',  'Taylor', 5394986, 116000,  'Customer Support Specialist', 'Active'),
( 'Jackson', 'Jackson', 5582936, 220000, 'Database Administrator', 'Active'),
( 'Carter',  'Martin', 5511765, 88000,  'Developer', 'Active'),
( 'William',  'Garcia', 5950627, 37000, 'Front End Developer', 'Active'),
( 'Matthew',  'Lewis', 5531306, 76000, 'Information Technology Manager', 'Active'),
( 'Henry',  'Lee', 5660570, 74000,  'IT Support Manager', 'Active'),
( 'Sebastian',  'Walker', 5173460, 53000, 'IT Support Specialist', 'Active'),
( 'Wyatt',  'Hall', 5949584, 119000,  'IT Systems Administrator', 'Active'),
('Nathan',  'Young', 5313342, 44000, 'Junior Software Engineer', 'Active'),
( 'Jaxon',  'Lopez', 5960077, 106000,  'Network Engineer', 'Active'),
( 'David',  'Hill', 5805085, 77000, 'Network Systems Administrator', 'Active'),
( 'Caleb', 'Scott', 5783224, 192000,  'Programmer', 'Active'),
( 'Eli',  'Green', 5730512, 139000,  'Programmer Analyst', 'Active'),
('Levi',  'Adams', 5530641, 196000, 'Security Specialist', 'Active'),
( 'Julian',  'Baker', 5678770, 221000,  'Senior Applications Engineer', 'Active'),
( 'Olivia',  'Perez', 5341066, 127000, 'Senior Programmer', 'Active'),
( 'Isabella',  'Phillips', 5937475, 187000,  'Senior Software Engineer', 'Active'),
( 'Lily',  'Rogers', 5007587, 132000, 'Senior Web Developer', 'Active'),
('Grace',  'Ward', 5745172, 46000,  'Technical Support Engineer', 'Active'),
( 'Victoria',  'James', 5632960, 201000,  'Web Developer', 'Active'),
( 'Brooklyn',  'Watson', 5336494, 44000, 'Webmaster', 'Active')
;

---- Long Data
--INSERT INTO employees (first_name, last_name, employee_id, salary, title, status)
--VALUES
--('Noah', 'Smith', 5900864, 191000, 'Application Developer', 'Active'),
--( 'Liam',  'Johnson', 5858630, 88000,  'Application Support Analyst', 'Active'),
--( 'Ethan',  'Williams', 5715139, 175000, 'Applications Engineer', 'Active'),
--( 'Mason',  'Jones', 5214829, 144000,  'Associate Developer', 'Active'),
--( 'Lucas',  'Brown', 5384113, 46000, 'Chief Technology Officer (CTO)', 'Active'),
--( 'Oliver', 'Davis', 5501765, 156000,  'Chief Information Officer (CIO)', 'Active'),
--('Aiden',  'Miller', 5642197, 204000, 'Computer and Information Systems Manager', 'Active'),
--( 'Elijah',  'Wilson', 5509096, 92000,  'Computer Systems Manager', 'Active'),
--( 'James',  'Moore', 5281210, 182000, 'Customer Support Administrator', 'Active'),
--( 'Benjamin',  'Taylor', 5394986, 116000,  'Customer Support Specialist', 'Active'),
--( 'Logan',  'Anderson', 5316819, 54000, 'Data Center Support Specialist', 'Active'),
--( 'Jacob',  'Thomas', 5944509, 170000,  'Data Quality Manager', 'Active'),
--( 'Jackson', 'Jackson', 5582936, 220000, 'Database Administrator', 'Active'),
--('Michael',  'White', 5911861, 102000,  'Desktop Support Manager', 'Active'),
--( 'Daniel',  'Harris', 5663231, 61000, 'Desktop Support Specialist', 'Active'),
--( 'Carter',  'Martin', 5511765, 88000,  'Developer', 'Active'),
--( 'Alexander',  'Thompson', 5019664, 35000,  'Director of Technology', 'Active'),
--( 'William',  'Garcia', 5950627, 37000, 'Front End Developer', 'Active'),
--( 'Luke',  'Martinez', 5374441, 143000,  'Help Desk Specialist', 'Active'),
--( 'Owen', 'Robinson', 5968041, 134000,  'Help Desk Technician', 'Active'),
--('Jack',  'Clark', 5503021, 80000, 'Information Technology Coordinator', 'Active'),
--( 'Gabriel',  'Rodriguez', 5500810, 131000,  'Information Technology Director', 'Active'),
--( 'Matthew',  'Lewis', 5531306, 76000, 'Information Technology Manager', 'Active'),
--( 'Henry',  'Lee', 5660570, 74000,  'IT Support Manager', 'Active'),
--( 'Sebastian',  'Walker', 5173460, 53000, 'IT Support Specialist', 'Active'),
--( 'Wyatt',  'Hall', 5949584, 119000,  'IT Systems Administrator', 'Active'),
--( 'Jayden', 'Allen', 5281345, 204000,  'Java Developer', 'Active'),
--('Nathan',  'Young', 5313342, 44000, 'Junior Software Engineer', 'Active'),
--( 'Ryan',  'Hernandez', 5299624, 189000,  'Management Information Systems Director', 'Active'),
--( 'Grayson',  'King', 5297795, 167000, '.NET Developer', 'Active'),
--( 'Isaac',  'Wright', 5293685, 198000,  'Network Architect', 'Active'),
--( 'Jaxon',  'Lopez', 5960077, 106000,  'Network Engineer', 'Active'),
--( 'David',  'Hill', 5805085, 77000, 'Network Systems Administrator', 'Active'),
--( 'Caleb', 'Scott', 5783224, 192000,  'Programmer', 'Active'),
--( 'Eli',  'Green', 5730512, 139000,  'Programmer Analyst', 'Active'),
--('Levi',  'Adams', 5530641, 196000, 'Security Specialist', 'Active'),
--( 'Julian',  'Baker', 5678770, 221000,  'Senior Applications Engineer', 'Active'),
--( 'Andrew',  'Gonzalez', 5167713, 118000, 'Senior Database Administrator', 'Active'),
--( 'Dylan',  'Nelson', 5311211, 202000,  'Senior Network Architect', 'Active'),
--( 'Lincoln',  'Carter', 5882800, 140000, 'Senior Network Engineer', 'Active'),
--( 'Emma', 'Mitchell', 5255690, 46000,  'Senior Network System Administrator', 'Active'),
--( 'Olivia',  'Perez', 5341066, 127000, 'Senior Programmer', 'Active'),
--( 'Ava',  'Roberts', 5150781, 38000,  'Senior Programmer Analyst', 'Active'),
--('Sophia',  'Turner', 5523736, 186000, 'Senior Security Specialist', 'Active'),
--( 'Isabella',  'Phillips', 5937475, 187000,  'Senior Software Engineer', 'Active'),
--( 'Mia',  'Campbell', 5542212, 93000, 'Senior Support Specialist', 'Active'),
--( 'Charlotte', 'Parker', 5203581, 172000,  'Senior System Administrator', 'Active'),
--( 'Amelia',  'Evans', 5390827, 142000, 'Senior System Analyst', 'Active'),
--( 'Harper',  'Edwards', 5580668, 74000,  'Senior System Architect', 'Active'),
--( 'Abigail',  'Collins', 5145537, 106000, 'Senior System Designer', 'Active'),
--('Emily',  'Stewart', 5978445, 188000,  'Senior Systems Analyst', 'Active'),
--( 'Madison',  'Sanchez', 5083126, 121000, 'Senior Systems Software Engineer', 'Active'),
--( 'Ella', 'Morris', 5048470, 142000,  'Senior Web Administrator', 'Active'),
--( 'Lily',  'Rogers', 5007587, 132000, 'Senior Web Developer', 'Active'),
--( 'Avery',  'Reed', 5901171, 90000,  'Software Architect', 'Active'),
--( 'Evelyn',  'Cook', 5784202, 215000,  'Software Developer', 'Active'),
--( 'Sofia',  'Morgan', 5406312, 174000, 'Software Engineer', 'Active'),
--( 'Aria',  'Bell', 5837709, 42000,  'Software Quality Assurance Analyst', 'Active'),
--('Riley',  'Murphy', 5451369, 131000, 'Support Specialist', 'Active'),
--( 'Chloe', 'Bailey', 5977345, 108000,  'Systems Administrator', 'Active'),
--( 'Scarlett',  'Rivera', 5042540, 184000,  'Systems Analyst', 'Active'),
--( 'Ellie',  'Cooper', 5513845, 168000, 'System Architect', 'Active'),
--( 'Elizabeth',  'Richardson', 5804112, 137000,  'Systems Designer', 'Active'),
--( 'Aubrey',  'Cox', 5543565, 74000,  'Systems Software Engineer', 'Active'),
--( 'Layla',  'Howard', 5038818, 127000, 'Technical Operations Officer', 'Active'),
--('Grace',  'Ward', 5745172, 46000,  'Technical Support Engineer', 'Active'),
--( 'Zoey', 'Torres', 5994296, 124000, 'Technical Support Specialist', 'Active'),
--( 'Mila',  'Peterson', 5263553, 203000,  'Technical Specialist', 'Active'),
--( 'Addison',  'Gray', 5126590, 93000, 'Telecommunications Specialist', 'Active'),
--( 'Hannah',  'Ramirez', 5662618, 78000,  'Web Administrator', 'Active'),
--( 'Victoria',  'James', 5632960, 201000,  'Web Developer', 'Active'),
--( 'Brooklyn',  'Watson', 5336494, 44000, 'Webmaster', 'Active'),
--('Zoe',  'Brooks', 5303890, 163000,  'Customer Support Specialist', 'Active'),
--( 'Penelope', 'Kelly', 5484309, 87000, 'Data Center Support Specialist', 'Active'),
--( 'Lucy',  'Sanders', 5304490, 38000,  'Data Quality Manager', 'Active'),
--( 'Audrey',  'Price', 5370747, 42000, 'Database Administrator', 'Active'),
--( 'Natalie',  'Bennett', 5899500, 170000,  'Desktop Support Manager', 'Active'),
--( 'Nora',  'Wood', 5825193, 160000, 'Desktop Support Specialist', 'Active'),
--( 'Stella',  'Barnes', 5207815, 122000,  'Developer', 'Active'),
--( 'Skylar',  'Ross', 5447226, 185000,  'Director of Technology', 'Active');


--DROP TABLE budget;

CREATE TABLE budget (
    id SERIAL PRIMARY KEY,
    month INTEGER,
    year INTEGER,
    monthly_budget NUMERIC(15,2)
);

INSERT INTO budget (month, year, monthly_budget)
VALUES
(10, 2015, 250000),
(11, 2015, 262000),
(12, 2015, 260000),
(1, 2016, 250000),
(2, 2016, 250000),
(3, 2016, 260000),
(4, 2016, 260000),
(5, 2016, 260000),
(6, 2016, 240000),
(7, 2016, 240000),
(8, 2016, 240000),
(9, 2016, 225000),
(10, 2016, 225000),
(11, 2016, 225000),
(12, 2016, 225000)
;

SELECT * FROM budget ORDER BY year DESC, month DESC;

SELECT  monthly_budget FROM budget WHERE month = 11 AND year = 2016;
