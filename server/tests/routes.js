process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const jwtDecode = require('jwt-decode');
const chaiHttp = require('chai-http');
const server = require('../index');
const keys = require('../config/keys');
const User = require('../models/user');

chai.use(chaiHttp);

let userId, jwtToken;
let user = {
  username: 'johndoe',
  password: 'password',
  password2: 'password',
  adminKey: keys.adminKey
};

describe('User route testing', () => {
  describe('POST /api/register', () => {
    it('Fails without matching passwords', done => {
      chai
        .request(server)
        .post('/api/register')
        .send({ ...user, password2: '123456' })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('password fields must match');
          done();
        });
    });
    it('Succeeds with unique username and matching passwords', done => {
      chai
        .request(server)
        .post('/api/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.token.should.be.a('string');
          jwtToken = res.body.token;
          userId = jwtDecode(jwtToken).user.id;
          done();
        });
    });
    it('Fails with existing username', done => {
      chai
        .request(server)
        .post('/api/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Username already taken');
          done();
        });
    });
  });
  describe('DELETE /api/user/:userId', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete('/api/user/1234')
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Fails with invalid user ID', done => {
      chai
        .request(server)
        .delete(`/api/user/1234`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Invalid user ID');
          done();
        });
    });
    it('Succeeds with valid http header and user ID', done => {
      chai
        .request(server)
        .delete(`/api/user/${userId}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Successfully deleted');
          done();
        });
    });
  });
});
