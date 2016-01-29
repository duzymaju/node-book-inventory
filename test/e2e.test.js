'use strict';
const request = require('supertest');

const app = require('../app');

describe('/POST stock', () => {
    it('should response with OK', done => {
        request(app)
            .post('/stock')
            .send({
                isbn: '123',
                count: 50
            })
            .set('ContentType', 'application/json')
            .expect(201, {
                status: 'ok dude'
            })
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('should respond with found object', done => {
        request(app)
            .get('/stock/123')
            .expect(200, {
                isbn: 123,
                count: 50
            })
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                done();
            })
    });
});
