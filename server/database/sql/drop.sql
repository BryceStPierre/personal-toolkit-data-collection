DROP TABLE meta.logs;
DROP TABLE meta.users;
DROP TABLE meta.domains;
DROP TABLE meta.categories;

DROP FUNCTION domain.insert_data_point(INT, INT, TEXT, INT);

DROP FUNCTION meta.create_category(INT, TEXT);
DROP FUNCTION meta.create_domain(TEXT, TEXT);
DROP FUNCTION meta.get_domain_items();
DROP FUNCTION meta.get_category_items(INT);

DROP SCHEMA meta;
DROP SCHEMA domain;
DROP SCHEMA integration;