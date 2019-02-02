const bcrypt = require('bcrypt');

let db = require('../database');

class Settings { 
  static changePassword (newPassword, callback) {
    bcrypt.hash(newPassword, 10, (err, encrypted) => {
      db.query('UPDATE meta.users SET password = $1 WHERE username = $2',
      [encrypted, 'owner'],
      (err, rows) => {
        if (err)
          return callback(err);
        callback(rows ? rows : null);
      });
    });
  }
}

module.exports = Settings;
