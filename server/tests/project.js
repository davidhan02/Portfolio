process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const user = require('../config/testuser');
const Project = require('../models/project');
const should = chai.should();
chai.use(chaiHttp);

let jwtUser, jwtToken;
const project = {
  title: 'Test Project Title',
  url: 'https://www.google.com',
  code: 'https://www.github.com',
  categories: 'HTML, CSS, JavaScript',
  text: 'A short test description here',
  created: '6/19/2019'
};

describe('Project route testing', () => {
  describe('Register user for tests', () => {
    it('Succeeds then stores jwtToken and decoded user', done => {
      chai
        .request(server)
        .post('/api/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.token.should.be.a('string');
          jwtToken = res.body.token;
          jwtUser = jwtDecode(jwtToken).user;
          done();
        });
    });
  });
  describe('GET /api/project with empty DB', () => {
    it('Fails without any projects in DB', done => {
      chai
        .request(server)
        .get('/api/project')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No projects found');
          done();
        });
    });
  });
  describe('POST /api/project', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .post('/api/project')
        .send({ ...project })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
  });
  describe('Delete user created for tests', () => {
    it('Succeeds with valid http header and user ID', done => {
      chai
        .request(server)
        .delete(`/api/user/${jwtUser.id}`)
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
