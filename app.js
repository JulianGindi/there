(function() {
  var app, express;

  express = require('express');

  app = express();

  app.get('/', function(req, res) {
    var body;
    body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    return res.end(body);
  });

  app.listen(3000);

  console.log("Listening on port 3000");

}).call(this);
