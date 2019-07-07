process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const { user, profile, certificate } = require('../config/chai');
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken, testProfile, testCert;

describe('Certificate route testing', () => {
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
  describe('GET /api/profile/:profile/cert', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get('/api/profile/invalidID/cert')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails without any certificates in profile', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/cert`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No certificates found');
          done();
        });
    });
  });
  describe('POST /api/profile/:profile/cert', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .post(`/api/profile/${testProfile.id}/cert`)
        .send({ ...certificate })
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
        .post(`/api/profile/${testProfile.id}/cert`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...certificate })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          testCert = res.body.certificates[0];
          testCert.title.should.be.eql(certificate.title);
          testCert.from.should.be.eql(certificate.from);
          testCert.url.should.be.eql(certificate.url);
          testCert.issued.should.be.a('string');
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/cert', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get('/api/profile/invalidID/cert')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Succeeds with valid profile and existing certificate', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/cert`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('array');
          res.body[0].should.be.eql(testCert);
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/cert/:cert', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get(`/api/profile/invalidID/cert/${testCert.id}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails with invalid certificate ID', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/cert/invalidID`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No certificate matches that ID');
          done();
        });
    });
    it('Succeeds with valid profile and certificate ID', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/cert/${testCert.id}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql(testCert);
          done();
        });
    });
  });
  describe('PATCH /api/profile/:profile/cert/:cert', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/invalidID/cert/${testCert.id}`)
        .send({ title: 'Responsive Web Design' })
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
        .patch(`/api/profile/${testProfile.id}/cert/${testCert.id}`)
        .send({ title: 'Responsive Web Design' })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Fails with invalid certificate ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/cert/invalidID`)
        .send({ title: 'Responsive Web Design' })
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No certificate matches that ID');
          done();
        });
    });
    it('Succeeds with valid http header and both IDs', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/cert/${testCert.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ title: 'Responsive Web Design' })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.certificates[0].should.be.eql({
            ...testCert,
            title: 'Responsive Web Design'
          });
          done();
        });
    });
  });
  describe('DELETE /api/profile/:profile/cert/:cert', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/cert/${testCert.id}`)
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
        .delete(`/api/profile/invalidID/cert/${testCert.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails with invalid certificate ID', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/cert/invalidID`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No certificate matches that ID');
          done();
        });
    });
    it('Succeeds with valid http header and both IDs', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/cert/${testCert.id}`)
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
