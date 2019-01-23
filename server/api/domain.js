const express = require('express');
let router = express.Router();

let Domain = require('../models/Domain');

router.get('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Domain.retrieveAll(domainsList => {
    res.json(domainsList);
  });
});

router.post('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Domain.create(req.body.domain, domain => {
    console.log(domain);
    res.json(domain);
  });
});

module.exports = router;
