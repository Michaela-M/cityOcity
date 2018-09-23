const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const { Activity } = require('../models');

router.get('/activities', (res, res) => {
    Activity
      .find()
      .then(activities => { 
        res.json(activities.map(activity => {
            return {
                id: activity._id,
                name: activity.name,
                type: activity.type,
                description: activity.description
            };
        }));
      })
      .catch(err => {
          console.error(err);
          res.statusCode(500).json({error: 'something went wrong'});
      });
});