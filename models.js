'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String },
    address: { type: String },
    phone: { type: String },
    website: { type: String },
    description: { type: String, required: true },
    tags: { type: String },
    photoLink: { type: String },
    addedBy: {
        firstName: { type: String, required: true },
        hometown: { type: String }
    }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = { Activity };