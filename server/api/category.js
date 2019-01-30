const express = require('express');
let router = express.Router();

let Category = require('../models/Category');

router.get('/:domain', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Category.retrieve(req.params.domain, categoryList => {
    res.json(categoryList);
  });
});

router.post('/', (req, res) => {
  if (!req.user)
    return res.json({ code: 401, message: 'Unauthorized access of API.' });
  
  Category.create(req.body.domain, req.body.categoryLabel, categoryList => {
    console.log(categoryList);
    res.json(categoryList);
  });
});

module.exports = router;
