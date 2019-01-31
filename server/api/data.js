const express = require('express');
let router = express.Router();

let Data = require('../models/Data');

router.post('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Data.create(req.body.domain, req.body.category, req.body.value, result => {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
