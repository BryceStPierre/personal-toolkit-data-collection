let db = require('../database');

class Domain {
  static create (domainLabel, callback) {
    db.query('SELECT * FROM meta.create_domain($1, $2)', 
    [domainLabel.toLowerCase().replace(/ /g, '_'), domainLabel],
    (err, rows) => {
      if (err)
        return callback(err);
      callback(rows ? rows : null);
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
