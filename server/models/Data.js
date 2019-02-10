let db = require('../database');

class Data {
  static create (domain, category, value, dataType, callback) {
    db.query('SELECT * FROM domain.insert_data_point($1, $2, $3, $4) AS message', 
    [domain, category, value, dataType],
    (err, rows) => {
      if (err)
        return callback({ message: 'Error inserting data point.' });
      callback(rows && rows.length > 0 ? rows[0] : null);
    });
  }
}

module.exports = Data;
