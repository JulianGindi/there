express = require('express')
app = express()

app.use(express.static(__dirname + '/static'))

app.get('/', (req,res) ->
    res.setHeader('Content-Type', 'text/plain')
    res.sendfile(__dirname + '/static/index.html')
    res.end())

app.listen(3000)
console.log("Listening on port 3000")