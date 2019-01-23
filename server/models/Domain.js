let db = require('../database');

class Domain {
  static create (domainLabel, callback) {
    db.query('SELECT * FROM integration.create_domain($1, $2) AS value', 
    [domainLabel.toLowerCase().replace(/ /g, '_'), domainLabel],
    (err, rows) => {
      if (err)
        return callback(err);
      callback(rows && rows.length > 0 ? rows[0] : null);
    });
  }
  
  static retrieveAll (callback) {
    db.query('SELECT * FROM meta.get_domain_items()', (err, rows) => {
      if (err)
        return callback(err);
      callback(rows ? rows : null);
    });
  }
}

module.exports = Domain;
