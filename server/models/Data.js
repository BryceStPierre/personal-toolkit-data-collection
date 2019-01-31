let db = require('../database');

class Data {
  static create (domain, category, value, callback) {
    db.query('SELECT * FROM app.insert_data($1, $2, $3) AS message', 
    [domain, category, value],
    (err, rows) => {
      if (err)
        return callback({ message: 'Error insert data point.' });
      callback(rows && rows.length > 0 ? rows[0] : null);
    });
  }
}

module.exports = Data;
