-----------------------------------------
--Insert data point into specific domain.
-----------------------------------------
CREATE OR REPLACE FUNCTION app.insert_data (
  domain_id INT,
  category_id INT,
  value_data TEXT
)
RETURNS TEXT AS $$
DECLARE
  table_name TEXT;
BEGIN
  SELECT name INTO table_name FROM meta.domains WHERE id = domain_id;
  EXECUTE 'INSERT INTO app.' || table_name || ' (value, category) VALUES (''' || value_data || ''', ' || category_id || ')';
  RETURN 'Successfully inserted data point.';
END; 
$$ LANGUAGE 'plpgsql';