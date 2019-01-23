----------------------
--Create a new domain.
----------------------
CREATE OR REPLACE FUNCTION integration.create_domain (
  domain_name TEXT,
  label TEXT
)
RETURNS INT AS $$
DECLARE
  latest_domain INTEGER;
BEGIN
  EXECUTE 'CREATE TABLE app.' || domain_name || '(
    id SERIAL PRIMARY KEY NOT NULL,
    value VARCHAR(150) NULL,
    category INT NOT NULL,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )';

  INSERT INTO meta.domains (domain_label) VALUES (label);

  SELECT id INTO latest_domain FROM meta.domains WHERE domain_label = label;
  RETURN latest_domain;
END; 
$$ LANGUAGE 'plpgsql'

-------------------------------------------
--Create a new category for a given domain.
-------------------------------------------
CREATE OR REPLACE FUNCTION integration.create_category (
  domain INT,
  label TEXT
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO meta.categories (category_label, domain_id) VALUES (label, domain);
END; 
$$ LANGUAGE 'plpgsql'