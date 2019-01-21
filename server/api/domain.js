const express = require('express');
let router = express.Router();

let Domain = require('../models/Domain');

router.get('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Domain.retrieveAll(list => {
    res.json(list);
  });
});

module.exports = router;
