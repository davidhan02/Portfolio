process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

describe('Integration tests with chai-http', () => {
  describe('POST /register', () => {
    it('Fails with existing username', done => {
      const user = {
        username: 'davidhan',
        password: 'password',
        password2: 'password'
      };
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
  describe('GET /api/project/:projectId', () => {
    it('Fails with invalid project ID', done => {
      chai
        .request(server)
        .get('/api/project/1234')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Project not found');
          done();
        });
    });
  });
});
