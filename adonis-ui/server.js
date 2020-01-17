const express = require('express');

const path = require('path');

const app = express();
const cookie = require('cookie');
const session = require('express-session');
const serveStatic = require('serve-static');
const crypto = require('crypto')
const csrf = require('csurf')

const PORT = 5000;

app.use(express.static('../adonis-ui'));
app.use(express.static('/img'))

app.use(serveStatic(__dirname, {
    'index': ['index.html', 'index.htm']
}))

// app.use(function (req, res, next) {
//   var token = req.csrfToken();
//   res.cookie('XSRF-TOKEN', token);
//   res.locals.csrfToken = token;
//   next();
// });

app.listen(PORT, function() {
    console.log('App listening on port ' + PORT + '!');
});