process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const user = require('../config/chai').user;
const project = require('../config/chai').project;
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken, testProject;

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
          testUser = jwtDecode(jwtToken).user;
          done();
        });
    });
  });
  describe('GET /api/project', () => {
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
    it('Succeeds with valid http header and fields', done => {
      chai
        .request(server)
        .post('/api/project')
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...project })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.title.should.be.eql(project.title);
          res.body.url.should.be.eql(project.url);
          res.body.code.should.be.eql(project.code);
          res.body.categories.should.be.eql(project.categories.split(', '));
          res.body.text.should.be.eql(project.text);
          res.body.created.should.be.a('string');
          testProject = res.body;
          done();
        });
    });
  });
  describe('GET /api/project', () => {
    it('Succeeds with project in DB', done => {
      chai
        .request(server)
        .get('/api/project')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[0].should.be.eql(testProject);
          done();
        });
    });
  });
  describe('GET /api/project/:project', () => {
    it('Fails with invalid project ID', done => {
      chai
        .request(server)
        .get('/api/project/invalidID')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Project not found');
          done();
        });
    });
    it('Succeeds with valid project ID', done => {
      chai
        .request(server)
        .get(`/api/project/${testProject.id}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql({
            ...testProject,
            views: testProject.views + 1
          });
          done();
        });
    });
  });
  describe('DELETE /api/project/:project', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete(`/api/project/${testProject.id}`)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Fails with invalid project ID', done => {
      chai
        .request(server)
        .delete('/api/project/invalidID')
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Project not found');
          done();
        });
    });
    it('Succeeds with valid http header and project ID', done => {
      chai
        .request(server)
        .delete(`/api/project/${testProject.id}`)
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
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Successfully deleted');
          done();
        });
    });
  });
});
