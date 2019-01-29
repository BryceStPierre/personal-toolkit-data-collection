const express = require('express');
let router = express.Router();

let Domain = require('../models/Domain');

router.get('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Domain.retrieveAll(domainList => {
    res.json(domainList);
  });
});

router.post('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Domain.create(req.body.domain, domainList => {
    console.log(domainList);
    res.json(domainList);
  });
});

module.exports = router;
