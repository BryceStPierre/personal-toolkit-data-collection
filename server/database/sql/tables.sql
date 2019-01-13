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