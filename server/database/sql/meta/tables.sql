CREATE TABLE meta.users (
	id SERIAL PRIMARY KEY NOT NULL,
	username VARCHAR(10) NOT NULL,
	password VARCHAR(100) NOT NULL,
	display_name_long VARCHAR(100) NOT NULL,
  display_name_short VARCHAR(100) NOT NULL,
  last_login TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp(),
	created TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp()
);

CREATE TABLE meta.logs (
  id SERIAL PRIMARY KEY NOT NULL,
  action VARCHAR(25) NOT NULL,
  message VARCHAR(125) NOT NULL,
  created TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp()
);

CREATE TABLE meta.domains (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(75) NOT NULL,
  label VARCHAR(75) NOT NULL,
  updated TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp(),
	created TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp()
);

CREATE TABLE meta.categories (
  id SERIAL PRIMARY KEY NOT NULL,
  label VARCHAR(75) NOT NULL,
  domain_id INT NOT NULL,
  updated TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp(),
	created TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp()
);
