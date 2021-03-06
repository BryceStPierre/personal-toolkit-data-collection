--------------------------------
--Export data for sync purposes.
--------------------------------
CREATE OR REPLACE FUNCTION integration.extract ()
RETURNS TABLE (
  value INT,
  text VARCHAR
) AS $$
BEGIN
  RETURN QUERY 
    SELECT id, label FROM meta.domains 
      ORDER BY label ASC;
END; 
$$ LANGUAGE 'plpgsql';


--------------------------------
--Import data for sync purposes.
--------------------------------
-- CREATE OR REPLACE FUNCTION app.insert_data (
--   domain_id INT,
--   category_id INT,
--   value_data TEXT
-- )
-- RETURNS TEXT AS $$
-- DECLARE
--   table_name TEXT;
-- BEGIN
--   SELECT name INTO table_name FROM meta.domains WHERE id = domain_id;
--   EXECUTE 'INSERT INTO app.' || table_name || ' (value, category) VALUES (''' || value_data || ''', ' || category_id || ')';
--   RETURN 'Successfully inserted data point.';
-- END; 
-- $$ LANGUAGE 'plpgsql';