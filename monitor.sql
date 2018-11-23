
drop table if exists users, students, Projects;

CREATE TABLE users
(
    id serial not null PRIMARY key,
    full_name text not null,
    position text not null,
    PASSWORD text not null,
    email text not null,
    joined_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE students
(
    id serial not null PRIMARY key,
    full_name text not null,
    email text not null,
    github_username text not null,
    codewars_username text not null,
    joined_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE projects
(
   id serial not null PRIMARY key,
    project_name text not null,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE,
    project_keys text not null
);


insert into projects(project_name, date_created, project_keys) values('Basic Web App', '2018-02-21', 'basic');
insert into projects(project_name, date_created, project_keys) values('Waiter App', '2018-02-21', 'waiter');

INSERT into students
    (full_name, email, github_username, codewars_username, joined_date)
values('Anele Tom', 'aneletom10@gmail.com', 'Theophelus', 'nachowolf', '2018-11-21');
INSERT into students
    (full_name, email, github_username, codewars_username, joined_date)
values('Ayabonga Booi', 'ayabongabooi2@gmail.com', 'mrBooi', 'MrBooi', '2018-11-21');
