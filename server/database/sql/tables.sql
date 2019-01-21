DROP TABLE app.users;

CREATE TABLE app.users (
	id SERIAL PRIMARY KEY NOT NULL,
	username VARCHAR(10) NOT NULL,
	password VARCHAR(100) NOT NULL,
	display_name_long VARCHAR(100) NOT NULL,
  display_name_short VARCHAR(100) NOT NULL,
  last_login TIMESTAMP DEFAULT clock_timestamp(),
	created TIMESTAMP DEFAULT clock_timestamp()
);

DROP TABLE meta.domains;

CREATE TABLE meta.domains (
  id SERIAL PRIMARY KEY NOT NULL,
  label VARCHAR(75) NOT NULL
);

DROP TABLE meta.categories;

CREATE TABLE meta.categories (
  id SERIAL PRIMARY KEY NOT NULL,
  label VARCHAR(75) NOT NULL,
  domain_id INT NOT NULL
);
