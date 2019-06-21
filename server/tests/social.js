process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const { user, profile, social } = require('../config/chai');
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken, testProfile, testSocial;

describe('Social route testing', () => {
  describe('Register user and post profile for testing', () => {
    it('Successfully registers and stores test user', done => {
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
    it('Successfully posts and stores test profile', done => {
      chai
        .request(server)
        .post('/api/profile')
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...profile })
        .end((err, res) => {
          res.should.have.status(201);
          testProfile = res.body;
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/social', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get('/api/profile/invalidID/social')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails without any social in profile', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/social`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No social found');
          done();
        });
    });
  });
  describe('POST /api/profile/:profile/social', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .post(`/api/profile/${testProfile.id}/social`)
        .send({ ...social })
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
        .post(`/api/profile/${testProfile.id}/social`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...social })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          testSocial = res.body.social;
          testSocial.linkedin.should.be.eql(social.linkedin);
          testSocial.instagram.should.be.eql(social.instagram);
          testSocial.github.should.be.eql(social.github);
          testSocial.glitch.should.be.eql(social.glitch);
          testSocial.codepen.should.be.eql(social.codepen);
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/social', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get('/api/profile/invalidID/social')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Succeeds with social in profile', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/social`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql(testSocial);
          done();
        });
    });
  });
  describe('PATCH /api/profile/:profile/social', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/invalidID/social`)
        .send({ github: 'https://github.com/johndoe' })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/social`)
        .send({ github: 'https://github.com/johndoe' })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Succeeds with valid http header and profile ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/social`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ github: 'https://github.com/johndoe' })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.social.should.be.eql({
            ...testSocial,
            github: 'https://github.com/johndoe'
          });
          done();
        });
    });
  });
  describe('DELETE /api/profile/:profile/social', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/social`)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .delete(`/api/profile/invalidID/social`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Succeeds with valid http header and profile ID', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/social`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql(testProfile);
          done();
        });
    });
  });
  describe('Delete user and profile created for tests', () => {
    it('Successfully deletes the test profile', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.eql('Successfully deleted');
          done();
        });
    });
    it('Succesfully deletes the test user', done => {
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
