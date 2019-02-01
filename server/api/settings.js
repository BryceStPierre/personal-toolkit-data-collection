const express = require('express');
let router = express.Router();

let Settings = require('../models/Settings');

router.post('/password', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Settings.changePassword(req.body.oldPassword, req.body,newPassword, result => {

  });

  // Domain.create(req.body.domain, domainList => {
  //   console.log(domainList);
  //   res.json(domainList);
  // });
});

module.exports = router;
