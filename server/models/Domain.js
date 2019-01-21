let db = require('../database');

class Domain {
  static create (domain, callback) {

  }
  
  static retrieveAll (callback) {
    db.query('SELECT * FROM meta.domain_items()', (err, res) => {
      if (err)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Domain;
