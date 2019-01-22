DROP TABLE meta.domains;
CREATE TABLE meta.domains (
  id SERIAL PRIMARY KEY NOT NULL,
  label VARCHAR(75) NOT NULL,
	created TIMESTAMP DEFAULT clock_timestamp(),
  updated TIMESTAMP DEFAULT clock_timestamp()
);

DROP TABLE meta.categories;
CREATE TABLE meta.categories (
  id SERIAL PRIMARY KEY NOT NULL,
  label VARCHAR(75) NOT NULL,
  domain_id INT NOT NULL,
  created TIMESTAMP DEFAULT clock_timestamp(),
  updated TIMESTAMP DEFAULT clock_timestamp()
);
