CREATE OR REPLACE FUNCTION meta.create_domain (
  domain_name TEXT,
  domain_label TEXT
)
RETURNS INT AS $$
DECLARE
  latest INTEGER;
BEGIN
  EXECUTE 'CREATE TABLE app.' || domain_name || '(
    id SERIAL PRIMARY KEY NOT NULL,
    value VARCHAR(150) NULL,
    category INT NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )';

  INSERT INTO meta.domains (label) VALUES (domain_label);

  SELECT id INTO latest FROM meta.domains WHERE label = domain_label;

  RETURN latest;
END; 
$$ LANGUAGE 'plpgsql'

-------------------------------------------
--Create a new category for a given domain.
-------------------------------------------
CREATE OR REPLACE FUNCTION meta.create_category (
  domain INT,
  category_label TEXT
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO meta.categories (label, domain_id) VALUES (category_label, domain);
END; 
$$ LANGUAGE 'plpgsql'

----------------------
--List domain items.
----------------------
CREATE OR REPLACE FUNCTION meta.domain_items ()
RETURNS TABLE (
  value INT,
  label VARCHAR
) AS $$
BEGIN
  RETURN QUERY 
    SELECT * FROM meta.domains ORDER BY label ASC;
END; 
$$ LANGUAGE 'plpgsql'

----------------------
--List category items.
----------------------
CREATE OR REPLACE FUNCTION meta.category_items (
  domain INT
)
RETURNS TABLE (
  value INT,
  label VARCHAR
) AS $$
BEGIN
  RETURN QUERY 
    SELECT id, label FROM meta.categories 
      WHERE domain_id = domain 
      ORDER BY label ASC;
END; 
$$ LANGUAGE 'plpgsql'
