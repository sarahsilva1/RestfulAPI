'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mongodbUri = 'mongodb://cienki:secret@ds031925.mlab.com:31925/contacts-test';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));

const hostname = 'localhost';
const port = 3001;
const server = app.listen(port, hostname, () => {

  mongoose.connect(mongooseUri, dbOptions, (err) => {
    if (err) {
      console.log(err);
    }
  console.log('Server is running at http://' + hostname + ':' +port);
});

});
