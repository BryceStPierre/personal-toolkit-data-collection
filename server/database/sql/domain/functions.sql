-----------------------------------------
--Insert data point into specific domain.
-----------------------------------------
CREATE OR REPLACE FUNCTION domain.insert_data_point (
  domain_id INT,
  category_id INT,
  data_value TEXT,
  data_type INT
)
RETURNS TEXT AS $$
DECLARE
  table_name TEXT;
BEGIN
  SELECT name INTO table_name FROM meta.domains WHERE id = domain_id;
  EXECUTE 'INSERT INTO domain.' || table_name || ' (value, category, type) VALUES (''' || data_value || ''', ' || category_id || ', ' || data_type || ')';
  RETURN 'Successfully inserted data point.';
END; 
$$ LANGUAGE 'plpgsql';