process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const user = require('../config/chai').user;
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken;

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
    it('Succeeds with valid username and passwords', done => {
      chai
        .request(server)
        .post('/api/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.token.should.be.a('string');
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
  describe('POST /api/login', () => {
    it('Fails without valid username', done => {
      chai
        .request(server)
        .post('/api/login')
        .send({ ...user, username: 'invalid' })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('user not found');
          done();
        });
    });
    it('Fails without valid password', done => {
      chai
        .request(server)
        .post('/api/login')
        .send({ ...user, password: 'invalid' })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('invalid password');
          done();
        });
    });
    it('Succeeds with valid username and password', done => {
      chai
        .request(server)
        .post('/api/login')
        .send({ ...user })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.token.should.be.a('string');
          jwtToken = res.body.token;
          testUser = jwtDecode(jwtToken).user;
          testUser.username.should.be.eql(user.username);
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
        .delete(`/api/user/${testUser.id}`)
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
