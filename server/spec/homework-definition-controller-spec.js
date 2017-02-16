const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refresh = require('../tools/refresh-mongo');
require('should');

describe('homeworkController', ()=> {

    beforeEach(()=> {
        refresh();
    });

    it('getAll', (done)=> {
        request
            .get('/api/homework')
            .expect(200)
            .end(done)
    });

    it('getOne', (done)=> {
        request
            .get('/api/homework/587f0f2586653d19297d40c3')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c3')
            })
            .end(done);
    });

    it('create', (done)=> {
        request
            .post('/api/homework')
            .send({
                '_id': '587f0f2586653d19297d40d4',
                'title': 'bbb',
                'stack': 'kkk'
            })
            .expect(201)
            .end(done);
    });

    it('update', (done)=> {
        request
            .put('/api/homework/587f0f2586653d19297d40c4')
            .send({
                '_id': '587f0f2586653d19297d40c4',
                'title': 'vvv',
                'stack': 'kkk'
            })
            .expect(204)
            .end(done);
    });

    it('delete', (done)=> {
        request
            .delete('/api/homework/587f0f2586653d19297d40c4')
            .expect(204)
            .end(done)
    });

});