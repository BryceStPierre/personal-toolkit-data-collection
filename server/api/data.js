const express = require('express');
let router = express.Router();

let Data = require('../models/Data');

// router.get('/', (req, res) => {
//   // if (!req.user)
//   //   return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
//   // Domain.retrieveAll(domainsList => {
//   //   res.json(domainsList);
//   // });
// });

router.post('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Data.create(req.body.domain, req.body.category, req.body.value, data => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
