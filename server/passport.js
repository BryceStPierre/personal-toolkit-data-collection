const bcrypt = require('bcrypt');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

let Users = require('./models/Users');

passport.use(new Strategy(
  { usernameField: 'username', passwordField: 'password' }, 
  (username, password, done) => {
    Users.retrieveByUsername(username, user => {
      if (user.message)
        return done(null, false);
  
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          Users.update(username, res => {
            return done(null, {
              id: user.id,
              lastLogin: user.last_login,
              displayNameLong: user.display_name_long,
              displayNameShort: user.display_name_short
            });
          });
        } else {
          return done(null, false);
        }
      });
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.retrieveById(id, (user) => {
    done(null, user);
  });
});

module.exports = passport;