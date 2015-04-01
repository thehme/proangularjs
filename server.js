var express = require('express')
var app = express();

var port = process.env.PORT || 8000;
// connect will look for the default index.html static file
// if the index.html is different, then specify ,{default: "app.html"}
app.use(express.static(__dirname + '/angularjs')); //  "public" off of current is root

app.listen(port);
console.log('Listening on port 8000');
exports = module.exports = app;

