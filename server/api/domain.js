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

router.post('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  console.log(req.user)

  // Domain.create('test', r => {
  //   res.json(r);
  // });
});

module.exports = router;
