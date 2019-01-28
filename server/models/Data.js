let db = require('../database');

class Data {
  static create (domain, category, value, callback) {
    db.query('SELECT * FROM app.insert_data($1, $2, $3) AS message', 
    [domain, category, value],
    (err, rows) => {
      if (err)
        return callback(err);
      callback(rows && rows.length > 0 ? rows[0] : null);
    });
  }
  
  // static retrieveAll (callback) {
  //   db.query('SELECT * FROM meta.get_domain_items()', (err, rows) => {
  //     if (err)
  //       return callback(err);
  //     callback(rows ? rows : null);
  //   });
  // }
}

module.exports = Data;
