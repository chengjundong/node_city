/**
 * Created by Administrator on 2016/5/14.
 */
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/cities', function (req, res) {
   var cities = ['上海','北京','广州'];
   res.json(cities);
});

module.exports = app;