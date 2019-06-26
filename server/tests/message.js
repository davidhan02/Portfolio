process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const { user, message } = require('../config/chai');
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken, testMessage;

describe('Message route testing', () => {
  describe('Register user for tests', () => {
    it('Succeeds then stores jwtToken and decoded user', done => {
      chai
        .request(server)
        .post('/api/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          jwtToken = res.body.token;
          testUser = jwtDecode(jwtToken).user;
          done();
        });
    });
  });
  describe('GET /api/message', () => {
    it('Fails without any messages in DB', done => {
      chai
        .request(server)
        .get('/api/message')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No messages found');
          done();
        });
    });
  });
  describe('POST /api/message', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .post('/api/message')
        .send({ ...message })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Succeeds with valid http header and fields', done => {
      chai
        .request(server)
        .post('/api/message')
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...message })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.name.should.be.eql(message.name);
          res.body.email.should.be.eql(message.email);
          res.body.subject.should.be.eql(message.subject);
          res.body.body.should.be.eql(message.body);
          res.body.read.should.be.eql(false);
          res.body.sent.should.be.a('string');
          testMessage = res.body;
          done();
        });
    });
  });
  describe('GET /api/message', () => {
    it('Succeeds with message in DB', done => {
      chai
        .request(server)
        .get('/api/message')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[0].should.be.eql(testMessage);
          done();
        });
    });
  });
  describe('GET /api/message/:message', () => {
    it('Fails with invalid message ID', done => {
      chai
        .request(server)
        .get('/api/message/invalidID')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Message not found');
          done();
        });
    });
    it('Succeeds with valid message ID', done => {
      chai
        .request(server)
        .get(`/api/message/${testMessage.id}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql({
            ...testMessage,
            read: true
          });
          done();
        });
    });
  });
  describe('DELETE /api/message/:message', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete(`/api/message/${testMessage.id}`)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Fails with invalid message ID', done => {
      chai
        .request(server)
        .delete('/api/message/invalidID')
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Message not found');
          done();
        });
    });
    it('Succeeds with valid http header and message ID', done => {
      chai
        .request(server)
        .delete(`/api/message/${testMessage.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Successfully deleted');
          done();
        });
    });
  });
  describe('Delete user created for tests', () => {
    it('Succeeds with valid http header and user ID', done => {
      chai
        .request(server)
        .delete(`/api/user/${testUser.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.eql('Successfully deleted');
          done();
        });
    });
  });
});
