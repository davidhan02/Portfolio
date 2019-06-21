process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwtDecode = require('jwt-decode');
const server = require('../index');
const { user, profile, education } = require('../config/chai');
const should = chai.should();
chai.use(chaiHttp);

let testUser, jwtToken, testProfile, testEdu;

describe('Education route testing', () => {
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
  describe('GET /api/profile/:profile/edu', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get('/api/profile/invalidID/edu')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails without any education in profile', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/edu`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No education found');
          done();
        });
    });
  });
  describe('POST /api/profile/:profile/edu', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .post(`/api/profile/${testProfile.id}/edu`)
        .send({ ...education })
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
        .post(`/api/profile/${testProfile.id}/edu`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ ...education })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          testEdu = res.body.education[0];
          testEdu.school.should.be.eql(education.school);
          testEdu.degree.should.be.eql(education.degree);
          testEdu.major.should.be.eql(education.major);
          testEdu.description.should.be.eql(education.description);
          testEdu.from.should.be.a('string');
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/edu', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get('/api/profile/invalidID/edu')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Succeeds with valid profile and existing education', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/edu`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('array');
          res.body[0].should.be.eql(testEdu);
          done();
        });
    });
  });
  describe('GET /api/profile/:profile/edu/:edu', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .get(`/api/profile/invalidID/edu/${testEdu.id}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails with invalid education ID', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/edu/invalidID`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No education matches that ID');
          done();
        });
    });
    it('Succeeds with valid profile and education ID', done => {
      chai
        .request(server)
        .get(`/api/profile/${testProfile.id}/edu/${testEdu.id}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.be.eql(testEdu);
          done();
        });
    });
  });
  describe('PATCH /api/profile/:profile/edu/:edu', () => {
    it('Fails with invalid profile ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/invalidID/edu/${testEdu.id}`)
        .send({ school: 'UC San Diego' })
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
        .patch(`/api/profile/${testProfile.id}/edu/${testEdu.id}`)
        .send({ school: 'UC San Diego' })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Unauthorized');
          done();
        });
    });
    it('Fails with invalid education ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/edu/invalidID`)
        .send({ school: 'UC San Diego' })
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No education matches that ID');
          done();
        });
    });
    it('Succeeds with valid http header and profile ID', done => {
      chai
        .request(server)
        .patch(`/api/profile/${testProfile.id}/edu/${testEdu.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({ school: 'UC San Diego' })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.education[0].should.be.eql({
            ...testEdu,
            school: 'UC San Diego'
          });
          done();
        });
    });
  });
  describe('DELETE /api/profile/:profile/edu/:edu', () => {
    it('Fails without valid http header', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/edu/${testEdu.id}`)
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
        .delete(`/api/profile/invalidID/edu/${testEdu.id}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('Profile not found');
          done();
        });
    });
    it('Fails with invalid education ID', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/edu/invalidID`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('No education matches that ID');
          done();
        });
    });
    it('Succeeds with valid http header and profile ID', done => {
      chai
        .request(server)
        .delete(`/api/profile/${testProfile.id}/edu/${testEdu.id}`)
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
