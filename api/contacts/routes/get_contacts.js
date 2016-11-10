const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../model/Contact');
const router = express.Router();

router.route('/')
  .get((req, res) => {

    Contact.find({}, (err, contacts) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(contacts);
    });

  });

module.exports = router;
