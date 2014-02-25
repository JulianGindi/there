express = require('express')
app = express()
require('./build/there.js')(app)


app.listen(3000)
console.log("Listening on port 3000")
