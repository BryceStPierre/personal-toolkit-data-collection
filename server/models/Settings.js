let db = require('../database');

class Settings {
  // static create (domainLabel, callback) {
  //   db.query('SELECT * FROM integration.create_domain($1, $2)', 
  //   [domainLabel.toLowerCase().replace(/ /g, '_'), domainLabel],
  //   (err, rows) => {
  //     if (err)
  //       return callback(err);
  //     callback(rows ? rows : null);
  //   });
  // }
  
  static changePassword (oldPassword, newPassword, callback) {

  }
}

module.exports = Settings;
