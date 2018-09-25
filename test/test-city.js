const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const expect = chai.expect;

const { Activity } = require('../models');
const { runServer, app, closeServer } = require('../server');

chai.use(chaiHttp);

describe("index page", function() {
    it('should return 200 status', function() {
        return chai
        .request(app)
        .get('/')
        .then(function(res) {
            expect(res).to.have.status(200)
        });
    });
});

describe("create page", function() {
    it('should return 200 status', function() {
        return chai
        .request(app)
        .get('/create-listing')
        .then(function(res) {
            expect(res).to.have.status(200)
        });
    });
});

describe("activities page", function() {
    it('should return 200 status', function() {
        return chai
        .request(app)
        .get('/activities')
        .then(function(res) {
            expect(res).to.have.status(200)
        });
    });
});
