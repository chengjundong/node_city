/**
 * Created by Administrator on 2016/5/14.
 */
var request = require('supertest');
var app = require('./app');

describe('请求根目录测试', function () {
    it('返回200状态码，表示请求成功', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('测试返回的是HTML格式数据', function (done) {
        request(app)
            .get('/')
            .expect('Content-Type',/html/,done);
    });
    it("测试返回一个包含'中国城市'四个字的index文件",function (done) {
       request(app)
           .get('/')
           .expect(/中国城市/, done);
    });
});

describe('测试列出所有的city数据', function () {
    it('向 /cities 发出请求', function (done) {
        request(app)
            .get('/cities')
            .expect(200, done);
    });
    it('数据格式为json', function (done) {
        request(app)
            .get('/cities')
            .expect('Content-Type',/json/, done);
    })
    it('测试初始化的三个城市：上海、北京、广州', function (done) {
        request(app)
            .get('/cities')
            .expect(JSON.stringify(['上海','北京','广州']),done);
    });
});


