----------------------
--Create a new domain.
----------------------
CREATE OR REPLACE FUNCTION integration.create_domain (
  domain_name TEXT,
  domain_label TEXT
)
RETURNS INT AS $$
DECLARE
  latest_domain INTEGER;
BEGIN
  EXECUTE 'CREATE TABLE app.' || domain_name || '(
    id SERIAL PRIMARY KEY NOT NULL,
    value VARCHAR(150) NULL,
    category INT NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )';

  INSERT INTO meta.domains (label) VALUES (domain_label);

  SELECT id INTO latest_domain FROM meta.domains WHERE label = domain_label;
  RETURN latest_domain;
END; 
$$ LANGUAGE 'plpgsql'

-------------------------------------------
--Create a new category for a given domain.
-------------------------------------------
CREATE OR REPLACE FUNCTION integration.create_category (
  domain INT,
  category_label TEXT
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO meta.categories (label, domain_id) VALUES (category_label, domain);
END; 
$$ LANGUAGE 'plpgsql'