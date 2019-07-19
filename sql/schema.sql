-- create table team (
--         id serial primary key,
--         datakey varchar(100),
--         active boolean,
--         groupi varchar(100),
--         details varchar(100),
--         title varchar(100)
-- );

CREATE TABLE boxscore (
    id SERIAL PRIMARY KEY,
    info json NOT NULL
)