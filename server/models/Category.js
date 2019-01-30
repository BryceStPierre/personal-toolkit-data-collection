let db = require('../database');

class Category {
  static create (domain, categoryLabel, callback) {
    db.query('SELECT * FROM integration.create_category($1, $2)', [domain, categoryLabel], (err, rows) => {
      if (err)
        return callback(err);
      callback(rows ? rows : null);
    });
  }
  
  static retrieve (domain, callback) {
    db.query('SELECT * FROM meta.get_category_items($1)', [domain], (err, rows) => {
      if (err)
        return callback(err);
      callback(rows ? rows : null);
    });
  }
}

module.exports = Category;
