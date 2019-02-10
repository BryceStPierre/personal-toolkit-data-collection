CREATE TABLE domain.sample_table (
  id SERIAL PRIMARY KEY NOT NULL,
  value VARCHAR(150) NULL,
  category INT NOT NULL,
  type INT NOT NULL,
  updated TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp(),
	created TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp()
);