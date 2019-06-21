process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const { user, profile, experience } = require('../config/chai');
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken, testProfile, testExp;

describe('Experience route testing', () => {
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
  describe('GET /api/profile/:profile/exp', () => {
    it('Fails without any experience in profile', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/exp`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No experience found');
          done();
        });
    });
  });
  describe('POST /api/profile/:profile/exp', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .post(`/api/profile/${testProfile.id}/exp`)
        .send({ ...experience })
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
        .post(`/api/profile/${testProfile.id}/exp`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...experience })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          testExp = res.body.experience[0];
          testExp.title.should.be.eql(experience.title);
          testExp.company.should.be.eql(experience.company);
          testExp.location.should.be.eql(experience.location);
          testExp.description.should.be.eql(experience.description);
          testExp.from.should.be.a('string');
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/exp', () => {
    it('Succeeds with experience in profile', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/exp`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('array');
          res.body[0].should.be.eql(testExp);
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/exp/:exp', () => {
    it('Fails with invalid experience ID', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/exp/invalidID`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No experience matches that ID');
          done();
        });
    });
    it('Succeeds with valid profile ID', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/exp/${testExp.id}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql(testExp);
          done();
        });
    });
  });
  describe('PATCH /api/profile/:profile/exp/:exp', () => {
    it('Fails with invalid project ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/invalidID/exp/${testExp.id}`)
        .send({ company: 'Boston Dynamics' })
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
        .patch(`/api/profile/${testProfile.id}/exp/${testExp.id}`)
        .send({ company: 'Boston Dynamics' })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Fails with invalid experience ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/exp/invalidID`)
        .send({ company: 'Boston Dynamics' })
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No experience matches that ID');
          done();
        });
    });
    it('Succeeds with valid http header and profile ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/exp/${testExp.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ company: 'Boston Dynamics' })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.experience[0].should.be.eql({
            ...testExp,
            company: 'Boston Dynamics'
          });
          done();
        });
    });
  });
  describe('DELETE /api/profile/:profile/exp/:exp', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/exp/${testExp.id}`)
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
        .delete(`/api/profile/invalidID/exp/${testExp.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails with invalid experience ID', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/exp/invalidID`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No experience matches that ID');
          done();
        });
    });
    it('Succeeds with valid http header and profile ID', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/exp/${testExp.id}`)
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
