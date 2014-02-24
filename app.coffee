express = require('express')
app = express()

app.get('/', (req,res) ->
    body = 'Hello World'
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Length', Buffer.byteLength(body))
    res.end(body))

app.listen(3000)
console.log("Listening on port 3000")
