module.exports = (app) ->

  app.get '/', (req,res) ->
      body = 'Hello World'
      res.setHeader('Content-Type', 'text/plain')
      res.setHeader('Content-Length', Buffer.byteLength(body))
      res.end(body)

  app.get '/location', (req, res) ->
      location = req.query.location
      results = getLocationTweets(location)
      res.setHeader('Content-Type', 'application/json')
      res.end(location)
