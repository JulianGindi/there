(function() {
  var app, express, io;

  express = require('express');

  app = express();

  require('./build/there.js')(app);

  io = require('./build/there.js').listen(app);

  app.listen(3000);

  console.log("Listening on port 3000");

}).call(this);
