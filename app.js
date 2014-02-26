(function() {
  var app, express;

  express = require('express');

  app = express();

  app.use(express["static"](__dirname + '/static'));

  app.get('/', function(req, res) {
    return res.sendfile(__dirname + '/static/index.html');
  });

  app.get('/mobile', function(req, res) {
    return res.sendfile(__dirname + '/static/mobile.html');
  });

  app.listen(3000);

  console.log("Listening on port 3000");

}).call(this);
