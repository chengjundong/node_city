/**
 * Created by Administrator on 2016/5/14.
 */
const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('OK');
});

module.exports = app;