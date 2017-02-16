const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refresh = require('../tools/refresh-mongo');
require('should');

describe('paperController', ()=> {

    beforeEach(()=> {
        refresh();
    });

    it('getAll', (done)=> {
        request
            .get('/api/papers')
            .expect(200)
            .end(done)
    });

    it('getOne', (done)=> {
        request
            .get('/api/papers/587f0f2586653d19297d40c1')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c1')
            })
            .end(done);
    });

    it('create', (done)=> {
        request
            .post('/api/papers')
            .send({
                '_id': '587f0f2586653d19297d40d2',
                makerId: '2'
            })
            .expect(201)
            .end(done);
    });

    it('update', (done)=> {
        request
            .put('/api/papers/587f0f2586653d19297d40c1')
            .send({
                '_id': '587f0f2586653d19297d40c1',
                "paperId": '5',
                "name": "kkkkk",
                "description": "java",
                "makerId": "2",
                "sections": [
                    {
                        "title": "逻辑题",
                        "definition": {
                            "easy": 2,
                            "normal": 3,
                            "hard": 4
                        },
                        "type": "logicPuzzle"
                    }, {
                        "title": "编程题",
                        "definition": {
                            "quizzes": [
                                {"quizId": "12345"}
                            ]
                        },
                        "type": "homeworkQuiz"
                    }
                ]
            })
            .expect(204)
            .end(done);
    });

    it('delete', (done)=> {
        request
            .delete('/api/papers/587f0f2586653d19297d40c1')
            .expect(204)
            .end(done)
    });

});