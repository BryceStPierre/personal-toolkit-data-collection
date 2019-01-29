----------------------
--Create a new domain.
----------------------
CREATE OR REPLACE FUNCTION integration.create_domain (
  domain_name TEXT,
  domain_label TEXT
)
RETURNS TABLE (
  value INT,
  text VARCHAR
) AS $$
BEGIN
  EXECUTE 'CREATE TABLE app.' || domain_name || '(
    id SERIAL PRIMARY KEY NOT NULL,
    value VARCHAR(150) NULL,
    category INT NOT NULL,
    updated TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp(),
    created TIMESTAMP WITHOUT TIME ZONE DEFAULT clock_timestamp()
  )';

  INSERT INTO meta.domains (name, label) VALUES (domain_name, domain_label);
  
  RETURN QUERY 
    SELECT id, label FROM meta.domains 
      ORDER BY label ASC;
END; 
$$ LANGUAGE 'plpgsql';

-------------------------------------------
--Create a new category for a given domain.
-------------------------------------------
CREATE OR REPLACE FUNCTION integration.create_category (
  category_domain INT,
  category_label TEXT
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO meta.categories (label, domain_id) VALUES (category_label, category_domain);
END; 
$$ LANGUAGE 'plpgsql';