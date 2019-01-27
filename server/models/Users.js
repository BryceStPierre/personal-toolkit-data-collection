const bcrypt = require('bcrypt');

let db = require('../database');

class Users {
  static retrieveByUsername (username, callback) {
    db.query('SELECT * FROM meta.users WHERE username = $1', [username], (err, rows) => {
      if (err)
        return callback(err);
      callback(rows && rows.length > 0 ? rows[0] : null);
    });
  }

  static retrieveById (id, callback) {
    db.query('SELECT * FROM meta.users WHERE id = $1', [id], (err, rows) => {
      if (err)
        return callback(err);
      callback(rows && rows.length > 0 ? rows[0] : null);
    });
  }

  static update (username, callback) {
    db.query('UPDATE meta.users SET last_login = clock_timestamp() WHERE username = $1', [username], (err, rows) => {
      if (err)
        return callback(err);
      callback(rows && rows.length > 0 ? rows[0] : null);
    });
  }
}

module.exports = Users;