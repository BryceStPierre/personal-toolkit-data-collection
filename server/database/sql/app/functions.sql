-----------------------------------------
--Insert data point into specific domain.
-----------------------------------------
CREATE OR REPLACE FUNCTION app.insert_data (
  domain_id INT,
  category_id INT,
  value_data TEXT
)
RETURNS VOID AS $$
DECLARE
  table_name TEXT;
BEGIN
  SELECT name INTO table_name FROM meta.domains WHERE id = domain_id;
END; 
$$ LANGUAGE 'plpgsql';
