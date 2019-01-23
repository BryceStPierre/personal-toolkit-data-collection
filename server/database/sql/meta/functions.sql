--------------------
--List domain items.
--------------------
CREATE OR REPLACE FUNCTION meta.get_domain_items ()
RETURNS TABLE (
  value INT,
  label VARCHAR
) AS $$
BEGIN
  RETURN QUERY 
    SELECT id, domain_label FROM meta.domains ORDER BY domain_label ASC;
END; 
$$ LANGUAGE 'plpgsql'

----------------------
--List category items.
----------------------
CREATE OR REPLACE FUNCTION meta.get_category_items (
  domain INT
)
RETURNS TABLE (
  value INT,
  label VARCHAR
) AS $$
BEGIN
  RETURN QUERY 
    SELECT id, category_label FROM meta.categories 
      WHERE domain_id = domain 
      ORDER BY category_label ASC;
END; 
$$ LANGUAGE 'plpgsql'
