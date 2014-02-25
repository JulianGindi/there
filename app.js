(function() {
  var app, express;

  express = require('express');

  app = express();

  app.use(express["static"](__dirname + '/static'));

  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.sendfile(__dirname + '/static/index.html');
    return res.end();
  });

  app.listen(3000);

  console.log("Listening on port 3000");

}).call(this);
