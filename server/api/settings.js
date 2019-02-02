const bcrypt = require('bcrypt');
const express = require('express');
let router = express.Router();

let Users = require('../models/Users');
let Settings = require('../models/Settings');

router.post('/password', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Users.retrieveByUsername('owner', user => {
    bcrypt.compare(req.body.oldPassword, user.password, (err, match) => {
      if (match) {
        Settings.changePassword(req.body.newPassword, result => {
          if (result.length === 0)
            res.json({ message: 'Password has been changed successfully.' });
        });
      } else
        res.json({ message: 'Error: incorrect password.' });
    });
  });
});

module.exports = router;
