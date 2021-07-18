/* this is a test file  for API testing*/

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should()
chai.use(chaiHttp);
const mockData = require('../mock/input')

describe('/GET request cats route', () => {
    it('provides cats image list', (done) => {

        chai.request('http://127.0.0.1:3001/api')
            .get('/cats')
            .end((err, res, body) => {
                res.should.have.status(200)
                res.body.should.be.eql(mockData.catsList)
                done()
            });
    });
});

describe('/GET request sharks route', () => {
    it('provides  sharks images list', (done) => {


        chai.request('http://127.0.0.1:3001/api')
            .get('/sharks')
            .end((err, res, body) => {
                res.should.have.status(200)
                res.body.should.be.eql(mockData.sharksList)
                done()
            });
    });
});

describe('/GET request unknown route', () => {
    it('provides error response', (done) => {


        chai.request('http://127.0.0.1:3001/api')
            .get('/event')
            .end((err, res, body) => {
                res.should.have.status(500)
                res.body.should.be.eql({message:"server error"})
                done()
            });
    });
});
