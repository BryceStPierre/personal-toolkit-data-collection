DROP TABLE app.sample_table;

DROP TABLE meta.users;
DROP TABLE meta.domains;
DROP TABLE meta.categories;

DROP FUNCTION app.insert_data(INT, INT, TEXT);

DROP FUNCTION integration.create_category(INT, TEXT);
DROP FUNCTION integration.create_domain(TEXT, TEXT);

DROP FUNCTION meta.get_domain_items();
DROP FUNCTION meta.get_category_items(INT);