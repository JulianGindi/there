socketio = require('socket.io')

module.exports.listen = (app) ->
  io = socketio.listen(app)

  io.on('connection', (socket) ->
      socket.emit("foo"))

  return io
