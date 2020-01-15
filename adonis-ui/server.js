const express = require('express');

const path = require('path');

const app = express();
const serveStatic = require('serve-static');
const PORT = 5000;

app.use(express.static('../adonis-ui'));
app.use(express.static('/img'))

app.use(serveStatic(__dirname, {
    'index': ['index.html', 'index.htm']
}))

app.listen(PORT, function() {
    console.log('App listening on port ' + PORT + '!');
});