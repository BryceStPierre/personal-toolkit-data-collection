const express = require('express');
let router = express.Router();

module.exports = (passport) => {
  router.get('/', (req, res) => {
    res.json(req.user ? req.user : null);
  });

  router.post('/', passport.authenticate('local'), (req, res) => {
    console.log(`Authenticated successfully on ${Date(Date.now()).toString()}.`);
    res.json(req.user);
  });

  router.delete('/', (req, res) => {
    req.logout();
    res.json(true);
  });

  return router;
}