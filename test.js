/**
 * Created by Administrator on 2016/5/14.
 */
var request = require('supertest');
var app = require('./app');

// 请求根目录的测试
describe('请求根目录测试', function () {
    it('返回200状态码，表示请求成功', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function (error) {
                if (error) throw  error;
                else done();
            });
    })
});


