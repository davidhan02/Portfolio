process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const { user, profile } = require('../config/chai');
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken, testProfile;

describe('Profile route testing', () => {
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
  describe('GET /api/profile', () => {
    it('Fails without any profiles in DB', done => {
      chai
        .request(server)
        .get('/api/profile')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No profiles found');
          done();
        });
    });
  });
  describe('POST /api/profile', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .post('/api/profile')
        .send({ ...profile })
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
        .post('/api/profile')
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...profile })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.name.should.be.eql(profile.name);
          res.body.birthday.should.be.a('string');
          res.body.status.should.be.eql(profile.status);
          res.body.skills.should.be.eql(profile.skills.split(', '));
          res.body.company.should.be.eql(profile.company);
          res.body.location.should.be.eql(profile.location);
          res.body.bio.should.be.eql(profile.bio);
          testProfile = res.body;
          done();
        });
    });
  });
  describe('GET /api/profile', () => {
    it('Succeeds with profile in DB', done => {
      chai
        .request(server)
        .get('/api/profile')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[0].should.be.eql(testProfile);
          done();
        });
    });
  });
  describe('GET /api/profile/:profile', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get('/api/profile/invalidID')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Succeeds with valid profile ID', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql(testProfile);
          done();
        });
    });
  });
  describe('PATCH /api/profile/:profile', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .patch('/api/profile/invalidID')
        .send({ ...profile, name: 'James Dent' })
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
        .patch(`/api/profile/${testProfile.id}`)
        .send({ ...profile, name: 'James Dent' })
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
        .patch(`/api/profile/${testProfile.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...profile, name: 'James Dent' })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql({
            ...testProfile,
            name: 'James Dent'
          });
          done();
        });
    });
  });
  describe('DELETE /api/profile/:profile', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}`)
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
        .delete('/api/profile/invalidID')
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
        .delete(`/api/profile/${testProfile.id}`)
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
